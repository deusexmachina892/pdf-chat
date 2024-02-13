## Personal PDF Chat

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