import { ChatOpenAI } from "@langchain/openai";
import { LangChainStream } from "ai";
//import { CallbackManager } from "@langchain/core/callbacks/manager";


const { handlers } = LangChainStream();
// streaming model
export const streamingModel = new ChatOpenAI({
    modelName: "gpt-3.5-turbo",
    streaming: true,
    temperature: 0,
    //callbacks: CallbackManager.fromHandlers(handlers)
})

// non-streaming model
export const nonStreamingModel = new ChatOpenAI({
    modelName: "gpt-3.5-turbo",
    streaming: false,
    temperature: 0,
    //callbacks: CallbackManager.fromHandlers(handlers)
})