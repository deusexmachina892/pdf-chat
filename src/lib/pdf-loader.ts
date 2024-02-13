import { PDFLoader } from "langchain/document_loaders/fs/pdf";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { env } from "./config"

export async function getChunkedDocsFromPDF() {
    try {
        const loader = new PDFLoader(env.PDF_PATH);
        const docs = await loader.load();
    } catch (err) {

    }
}