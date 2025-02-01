import { bot, lvls, statisticsState } from "../../..";

export async function easyLvl(msgId: number, taskNum: number, userId: number) {
    const text = `🚀 Уровень Beginner\n\n`
    if (taskNum === 0) {
        const question = `Как объявить переменную с блочной областью видимости?`
        const correct = 'let'
        await bot.editMessageText(`${text}${question}`, {
            reply_markup: {
                inline_keyboard: [
                    [{ text: "var", callback_data: `${lvls[0]}-${taskNum}-0-var` }],
                    [{ text: correct, callback_data: `${lvls[0]}-${taskNum}-1-${correct}` }],
                    [{ text: 'const', callback_data: `${lvls[0]}-${taskNum}-0-const` }],
                    [{ text: 'function', callback_data: `${lvls[0]}-${taskNum}-0-function` }],
                ]
            },
            chat_id: userId,
            message_id: msgId
        })
        statisticsState[taskNum] = {text: question, correctAns: correct, yourAns: null}
    }
    if (taskNum === 1) {
        const question = `Что выведет console.log(typeof NaN)?`
        const correct = "number"
        await bot.editMessageText(`${text}${question}`, {
            reply_markup: {
                inline_keyboard: [
                    [{ text: correct, callback_data: `${lvls[0]}-${taskNum}-1-${correct}` }],
                    [{ text: 'string', callback_data: `${lvls[0]}-${taskNum}-0-string` }],
                    [{ text: 'undefined', callback_data: `${lvls[0]}-${taskNum}-0-undefined` }],
                    [{ text: 'NaN', callback_data: `${lvls[0]}-${taskNum}-0-NaN` }],
                ]
            },
            chat_id: userId,
            message_id: msgId
        })
        statisticsState[taskNum] = {text: question, correctAns: correct, yourAns: null}
    }

}
