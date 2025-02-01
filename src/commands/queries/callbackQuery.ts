import TelegramBot from "node-telegram-bot-api"
import { bot, scoreState, statisticsState, taskState } from "../.."
import { categorize } from "../components/categorize/categorize"

export async function onCallbackQuery(query: TelegramBot.CallbackQuery) {
    try {
        const userId = query.from.id
        const lvl = query.data?.split('-')[0]
        let taskNum = query.data?.split('-')[1]
        const answer = query.data?.split('-')[2]
        
        if (query.message?.message_id && taskState[userId] !== undefined) {
            if (lvl && !taskNum) {
                await categorize(lvl, query.message?.message_id, taskState[userId], userId)
                taskState[userId] += 1
            }
            if (lvl && taskNum && answer) {
                const length = lvl?.length + taskNum?.length + answer?.length
                const textAnswer = query.data?.split('').splice(length + 3, 100).join('') as string

                if(statisticsState[parseInt(taskNum)]) statisticsState[parseInt(taskNum)].yourAns = textAnswer

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
                    for(const i of (Object.keys(statisticsState).map(Number))) {
                        let stat = statisticsState[i]
                        let text = `${stat.text}\n${stat.yourAns === stat.correctAns ? '✅' : '❌'} Ваш ответ - ${stat.yourAns}\n${'✅'} Правильный - ${stat.correctAns}`
                        await bot.sendMessage(userId, text)
                    }

                    return
                }
                await categorize(lvl, query.message?.message_id, taskState[userId], userId)
            }
        }
    } catch (e) {
        if (e instanceof Error) console.log(e.message)
    }
}