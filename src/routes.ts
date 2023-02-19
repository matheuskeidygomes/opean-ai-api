import { Router, Request, Response } from 'express';
import { callTextModelAI } from './openAI';

export const routes = Router();

routes.get("/", (req: Request, res: Response) => {
    return res.json({ welcome: "Hello! Welcome to OpenAI API!" });
});

routes.post('/ai/text', async (req: Request, res: Response) => {
    const { userMessage } = req.body;
    try {
        const responseMessageAI = await callTextModelAI(userMessage);
        return res.json({ robot: responseMessageAI });
    } catch (error: any) {
        console.log({ error: error.message });
    }
});