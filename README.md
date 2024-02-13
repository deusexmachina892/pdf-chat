## Personal PDF Chat

<img width="821" alt="Screenshot 2024-02-13 at 8 50 28 PM" src="https://github.com/deusexmachina892/pdf-chat/assets/27721589/5de33dde-d9f0-4700-b367-07ed7fa2742c">
<p style="text-align: center;">
Pic 1.1
</p>



<img width="811" alt="Screenshot 2024-02-13 at 8 46 31 PM" src="https://github.com/deusexmachina892/pdf-chat/assets/27721589/4241aa36-9d87-4f6c-babe-c9cdd5f41443">
<p style="text-align: center;">
Pic 1.1
</p>




First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Next Steps

To proceed, you would need the following:

```
# External tools
OPENAI_API_KEY=
PINECONE_API_KEY=

# For free pinecone, usually "us-west4-gcp-free"
PINECONE_ENVIRONMENT=

PINECONE_INDEX_NAME=

# To help pinecone where to look
PINECONE_NAMESPACE=

# Filepath
PDF_PATH=

# Pinecone index creation requires time, so we wait 3min
# https://app.pinecone.io/organizations
INDEX_INIT_TIMEOUT=240000
```
