import { OpenAIApi, Configuration } from 'openai';

export async function callTextModelAI(message: string) {
    const configurationAI = new Configuration({ apiKey: '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' });   // API Key
    const openAI = new OpenAIApi(configurationAI);
    const responseAI = await openAI.createCompletion({          // Create completion
        model: "text-davinci-003",                              // Model to use completion
        prompt: message,                                        // User message
        temperature: 1,                                         // 0.0 to 1.0 (0.0 = no variation, 1.0 = most variation) 
        max_tokens: 100,                                        // Number of tokens to generate (tokens = words)
        //n: 2,                                                 // Number of results to return
    });
    //console.log(responseAI.data);
    const responseMessageAI = responseAI.data.choices[0].text?.trim();  // Get the AI response in text format
    return responseMessageAI;
}
