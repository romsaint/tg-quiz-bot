import { bot, lvls, statisticsState } from "../../.."

export async function highLvl(msgId: number, taskNum: number, userId: number) {
    const text = `🚀 Уровень Advanced\n\n`

    if (taskNum === 0) {
        const question = `Что выведет console.log(new Date(0))`
        const correct = "1970-01-01T00:00:00.000Z"
        await bot.editMessageText(`${text}${question}`, {
            reply_markup: {
                inline_keyboard: [
                    [{ text: correct, callback_data: `${lvls[2]}-${taskNum}-1-${correct}` }],
                    [{ text: 'Текущая дата', callback_data: `${lvls[2]}-${taskNum}-0-Текущая дата` }],
                    [{ text: 'Ошибка', callback_data: `${lvls[2]}-${taskNum}-0-Ошибка` }],
                    [{ text: 'undefined', callback_data: `${lvls[2]}-${taskNum}-0-undefined` }],
                ]
            },
            chat_id: userId,
            message_id: msgId
        })
        statisticsState[taskNum] = {text: question, correctAns: correct, yourAns: null}
    }
    if (taskNum === 1) {
        const question = `Что такое Event Loop?`
        const correct = "Цикл обработки событий"
        await bot.editMessageText(`${text}${question}`, {
            reply_markup: {
                inline_keyboard: [
                    [{ text: correct, callback_data: `${lvls[2]}-${taskNum}-1-${correct}`}],
                    [{ text: 'Тип данных', callback_data: `${lvls[2]}-${taskNum}-0-Тип данных`}],
                    [{ text: 'Метод анимации', callback_data: `${lvls[2]}-${taskNum}-0-Метод анимации`}],
                    [{ text: 'Синтаксис ES6', callback_data: `${lvls[2]}-${taskNum}-0-Синтаксис ES6`}],
                ]
            },
            chat_id: userId,
            message_id: msgId
        })
        statisticsState[taskNum] = {text: question, correctAns: correct, yourAns: null}
    }
}