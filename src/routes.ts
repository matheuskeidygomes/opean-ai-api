import { Router, Request, Response } from 'express';
import { callTextModelAI } from './openAI';
import say from 'say';

export const routes = Router();

routes.post('/', async (req: Request, res: Response) => {
    const { message } = req.body;
    try {
        const responseMessageAI = await callTextModelAI(message) as string;
        say.speak(responseMessageAI, 'Karen', 1.5);                                 // Speak the AI response ('txt', 'voice', 'speed')    
        return res.status(202).json({ Anne: responseMessageAI });
    } catch (error: any) {
        return res.status(403).json({ error: error.message });
    }
});

