import OpenAI from "openai";
import { OPENAI_SECRET_KEY } from "./Constants";

// const openai = new OpenAI({
//   apiKey: process.env[OPENAI_SECRET_KEY], // This is the default and can be omitted
// });

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_SECRET_KEY, // Directly reference the environment variable
// });

const openai = new OpenAI({
  apiKey:
    "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",
  dangerouslyAllowBrowser: true,
});

export default openai;
