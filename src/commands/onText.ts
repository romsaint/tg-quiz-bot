import TelegramBot from "node-telegram-bot-api";
import { bot } from "..";
import { textOnStat } from "./components/textOnStart";
import { categorize } from "./components/categorize/categorize";

export async function onText(msg: TelegramBot.Message) {
    const text = msg.text
    const userId = msg.from?.id

    if(text && userId) {
        // if(text === '/start') {
        //     await textOnStat(userId)
        // }
        // if(keyboardStart.includes(text)) {
        //     await categorize(text, msg.message_id, msg.chat.id)
        // }
    }
}