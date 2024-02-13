// Creates a standalone question from the chat history and the current question
export const STANDALONE_QUESTION_TEMPLATE=`Given the following conversation and a follow up, rephrase the follow up to be standalone question.

Chat History:
{chat_history}
Follow Up Input: {question}
Standalone question:`;

// Actual question you ask the chat and send the response to client
export const QA_TEMPLATE=`You are an ethusiastic AI assistant. Use the following pieces of context to answer the question at the end.
If you don't know the answer, just say that you don't know. DO NOT try to up an answer.
If the question is not related to the context, politely respond that you are tuned to only answer questions that are related to the context

{context}

Question: {question}
Helpful answer in the markdown:`;