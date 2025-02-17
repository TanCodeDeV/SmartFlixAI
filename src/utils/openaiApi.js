import OpenAI from "openai";

const client = new OpenAI({
  baseURL: "https://models.inference.ai.azure.com",
  apiKey: "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", // Use the token from .env
  dangerouslyAllowBrowser: true,
});

export default client;
