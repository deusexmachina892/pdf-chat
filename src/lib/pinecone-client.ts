import { Index, IndexList, IndexModel, Pinecone } from "@pinecone-database/pinecone";
import { env } from "./config";
import { delay } from "./utils";

let pineconeClientInstance: Pinecone | null = null;

async function createIndex(client: Pinecone, indexName: string) {
    try {
        await client.createIndex({
            name: indexName,
            dimension: 1536,
            metric: "cosine",
            spec: {}
         })
     
         console.log(
             `Waiting for ${env.INDEX_INIT_TIMEOUT} s for index initialization to complete`
         );
         
         await delay(env.INDEX_INIT_TIMEOUT);
         console.log("Index created!")
    } catch (err) {
        console.error("error", err);
        throw new Error("Index creation failed")
    }
}

async function initPineconeClient() {
    const pineconeClient = new Pinecone({
        apiKey: env.PINECONE_API_KEY,
    });

    const indexName: string = env.PINECONE_INDEX_NAME;

    try {
        const existingIndexes: IndexList = await pineconeClient.listIndexes();

        const indexExists: IndexModel | undefined = existingIndexes.indexes?.find(
            (index: IndexModel) => index.name === indexName)
        
        if(!indexExists) {
            // create index
        } else  {
            console.log("Index exists!");
        }
        return pineconeClient;
    } catch (err) {
        console.log("err", err);
        throw new Error("Failed to initialize Pinecone client");
    }
}

export async function getPineconeClient() {
    if (!pineconeClientInstance) {
        pineconeClientInstance = await initPineconeClient();
    }
    return pineconeClientInstance;
}
