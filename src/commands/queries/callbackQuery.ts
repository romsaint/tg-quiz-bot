import TelegramBot from "node-telegram-bot-api"
import { bot, scoreState, taskState } from "../.."
import { categorize } from "../components/categorize/categorize"

export async function onCallbackQuery(query: TelegramBot.CallbackQuery) {
    try {
        const userId = query.from.id
        const lvl = query.data?.split('-')[1]
        let taskNum = query.data?.split('-')[2]
        const answer = query.data?.split('-')[3]
   
        if (query.message?.message_id && taskState[userId] !== undefined) {
            if (lvl && !taskNum) {
                await categorize(lvl, query.message?.message_id, taskState[userId], userId)
                taskState[userId] += 1
            }
            if (lvl && taskNum) {

                if (answer === '1') {
                    scoreState[userId] += 1
                }

                if (taskNum === '1') {
                    await bot.editMessageText(`Вы прошли тест на уровне сложности ${lvl}!\n ${scoreState[userId]} из 2 правильных ответов`, {
                        chat_id: userId,
                        message_id: query.message.message_id
                    })

                    taskState[userId] = 0
                    scoreState[userId] = 0

                    return
                }
                await categorize(lvl, query.message?.message_id, taskState[userId], userId)
            }
        }
    } catch (e) {
        if (e instanceof Error) console.log(e.message)
    }
}