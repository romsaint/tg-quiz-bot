import { bot, lvls, statisticsState } from "../../.."

export async function midLvl(msgId: number, taskNum: number, userId: number) {
    const text = `🚀 Уровень Intermediate\n\n`

    if (taskNum === 0) {
        const question = 'Что выведет console.log(1 < 2 < 3 > 0)?'
        const correct = "true"
        await bot.editMessageText(`${text}${question}`, {
            reply_markup: {
                inline_keyboard: [
                    [{ text: correct, callback_data: `${lvls[1]}-${taskNum}-1-${correct}` }],
                    [{ text: 'false', callback_data: `${lvls[1]}-${taskNum}-0-false` }],
                    [{ text: 'Ошибка', callback_data: `${lvls[1]}-${taskNum}-0-Ошибка` }],
                    [{ text: 'NaN', callback_data: `${lvls[1]}-${taskNum}-0-NaN` }],
                ]
            },
            chat_id: userId,
            message_id: msgId
        })
        statisticsState[taskNum] = {text: question, correctAns: correct, yourAns: null}
    }
    if (taskNum === 1) {
        const question = 'Какой метод преобразует JSON в объект?'
        const correct = "JSON.parse()"
        await bot.editMessageText(`${text}${question}`, {
            reply_markup: {
                inline_keyboard: [
                    [{ text: correct, callback_data: `${lvls[1]}-${taskNum}-1-${correct}` }],
                    [{ text: 'JSON.stringify()', callback_data: `${lvls[1]}-${taskNum}-0-JSON.stringify()` }],
                    [{ text: 'JSON.encode()', callback_data: `${lvls[1]}-${taskNum}-0-JSON.encode()` }],
                    [{ text: 'JSON.decode()', callback_data: `${lvls[1]}-${taskNum}-0-JSON.decode()` }],
                ]
            },
            chat_id: userId,
            message_id: msgId
        })
        statisticsState[taskNum] = {text: question, correctAns: correct, yourAns: null}
    }
}