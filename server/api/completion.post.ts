import { Configuration, OpenAIApi } from "openai";

// it's an async function now!
export default defineEventHandler(async (event) => {
    const body: { prompt: string} = await readBody(event);

    // setup the configuration
    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
    });

    // instantiate the openaiClient
    const openaiClient = new OpenAIApi(configuration);

    // Make the call to the moderation endpoint
    // const res = await openaiClient.createCompletion({
    //   model: "text-davinci-003",
    //   prompt: body.prompt,
    //   temperature: 0.6,
    //   max_tokens: 1500,
    // });

    // return the result
    // return res.data;
});