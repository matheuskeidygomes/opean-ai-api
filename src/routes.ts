import { Router, Request, Response } from 'express';
import { callTextModelAI } from './openAI';
import say from 'say';

export const routes = Router();

routes.get("/", (req: Request, res: Response) => {
    return res.json({ welcome: "Hello! Welcome to OpenAI API!" });
});

routes.post('/ai/text', async (req: Request, res: Response) => {
    const { userMessage } = req.body;
    try {
        const responseMessageAI = await callTextModelAI(userMessage);
        say.speak(responseMessageAI!, 'Karen', 1.5);                       // Speak the AI response ('txt', 'voice', 'speed')    
        return res.json({ Anne: responseMessageAI });
    } catch (error: any) {
        console.log({ error: error.message });
    }
});

