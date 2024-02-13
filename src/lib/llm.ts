import { ChatOpenAI } from "@langchain/openai";

// streaming model
export const streamingModel = new ChatOpenAI({
    modelName: "gpt-3.5-turbo",
    streaming: true,
    temperature: 0,
})

// non-streaming model
export const nonStreamingModel = new ChatOpenAI({
    modelName: "gpt-3.5-turbo",
    streaming: false,
    temperature: 0
})