import { getChunkedDocsFromPDF } from "@/lib/pdf-loader";
import { emberAndStoreDocs } from "@/lib/vector-store";
import { getPineconeClient } from "@/lib/pinecone-client";

(async () => {
    try {
        const pineconeClient = await getPineconeClient();
        console.log("Preparing chunks from PDF file");
        const docs = await getChunkedDocsFromPDF();
        console.log(`Loading ${docs?.length} chunks into pinecone...`);
        if (docs) {
            await emberAndStoreDocs(pineconeClient, docs);
            console.log("Data embedded and stored in pine-cone index");
        }

    } catch (err) {
        console.log("Init client script failed", err);
    }
})();