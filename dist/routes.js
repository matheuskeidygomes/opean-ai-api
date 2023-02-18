"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const openai_1 = require("openai");
exports.routes = (0, express_1.Router)();
exports.routes.get("/", (req, res) => {
    return res.json({ welcome: "Hello! Welcome to OpenAI API!" });
});
exports.routes.post('/gpt', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { userMessage } = req.body;
    const configurationAI = new openai_1.Configuration({ apiKey: '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' }); // API Key
    const openAI = new openai_1.OpenAIApi(configurationAI);
    try {
        const responseAI = yield openAI.createCompletion({
            model: "text-davinci-003",
            prompt: userMessage,
            temperature: 1,
            max_tokens: 100, // Number of tokens to generate (tokens = words)
            //n: 2,                                                 // Number of results to return
        });
        //console.log(responseAI.data);
        const messageAI = (_a = responseAI.data.choices[0].text) === null || _a === void 0 ? void 0 : _a.trim(); // Get the AI response in text format
        return res.json({ robot: messageAI });
    }
    catch (error) {
        console.log({ error: error.message });
    }
}));
