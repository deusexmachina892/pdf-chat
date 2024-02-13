import { OpenAIEmbeddings } from "@langchain/openai";
import { PineconeStore } from "@langchain/pinecone";
import { Pinecone } from "@pinecone-database/pinecone";
import { env } from "./config"


export async function emberAndStoreDocs(
    client: Pinecone, // already initialized
    // @ts-ignore docs type error
    docs: Document<Record<string, any>>[]
) {
    try {
       const embeddings = new OpenAIEmbeddings(); // LLM API
       const index = client.Index(env.PINECONE_INDEX_NAME)
       
       // embed the PDF documents
       await PineconeStore.fromDocuments(docs, embeddings, {
        pineconeIndex: index,
        namespace: env.PINECONE_NAMESPACE,
        textKey: "text"
       })
    } catch (err) {
        console.log("error", err);
        throw new Error("Failed to load your docs!")
    }
}