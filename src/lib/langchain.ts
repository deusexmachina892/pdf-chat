import {
    StreamingTextResponse,
    experimental_StreamData,
    LangChainStream,
} from "ai";
import { ConversationalRetrievalQAChain } from "langchain/chains";
import { getVectorStore } from "./vector-store";
import { getPineconeClient } from "./pinecone-client";
import { streamingModel, nonStreamingModel } from "./llm";
import { STANDALONE_QUESTION_TEMPLATE, QA_TEMPLATE   } from "./prompt-templates";

type CallChainArgs = {
    question: string;
    chatHistory: string;
}

export async function callChain({ question, chatHistory }: CallChainArgs) {
    try {
        const sanitizedQuestion = question.trim().replaceAll("\n", " ");
        const pineconeClient = await getPineconeClient();
        const vectorStore = await getVectorStore(pineconeClient);
        const { stream, handlers } = LangChainStream({
            experimental_streamData: true
        });

        const data = new experimental_StreamData();

        const chain = ConversationalRetrievalQAChain.fromLLM(
            streamingModel,
            vectorStore.asRetriever(),
            {
                qaTemplate: QA_TEMPLATE, // Final answers
                questionGeneratorTemplate: STANDALONE_QUESTION_TEMPLATE,
                questionGeneratorChainOptions: {
                    llm: nonStreamingModel
                },
                returnSourceDocuments: true, // default 4
            }
        );

        chain.call(
            {
                question: sanitizedQuestion,
                chat_history: chatHistory,
            },
            [handlers]
        ).then(async (res) => {
            const sourceDocuments = res?.sourceDocuments;
            const firstTwoDocuments = sourceDocuments.slice(0, 2);
            const pageContents = firstTwoDocuments.map(
                ({ pageContent }: { pageContent: string }) => pageContent
            );
            data.append({
                sources: pageContents
            });
            data.close();
        });
        return new StreamingTextResponse(stream, {}, data);
    } catch (err) {
        console.error(err);
        throw new Error("Call chain method failed to execute!");
    }
}