import TelegramBot from "node-telegram-bot-api";
import { bot, lvls, scoreState, taskState } from "..";

export async function onStart(msg: TelegramBot.Message) {

    const userId = msg.from?.id
    try {
        if (userId) {
            taskState[userId] = 0
            scoreState[userId] = 0

            await bot.sendMessage(userId, 'Выбери уровень сложности:', {
                reply_markup: {
                    inline_keyboard: [
                        [{ text: lvls[0], callback_data: `${lvls[0]}` }],
                        [{ text: lvls[1], callback_data: `${lvls[1]}` }],
                        [{ text: lvls[2], callback_data: `${lvls[2]}` }],
                    ]
                }
            });
        }
    } catch (e) {
        if (e instanceof Error) console.log(e.message)
    }

}