import { bot, lvls } from "../../..";

export async function easyLvl(msgId: number, taskNum: number, userId: number) {
    const text = `🚀 Уровень Beginner\n\n`
    if (taskNum === 0) {
        await bot.editMessageText(`${text}Как объявить переменную с блочной областью видимости?`, {
            reply_markup: {
                inline_keyboard: [
                    [{ text: "var", callback_data: `${userId}-${lvls[0]}-${taskNum}-0` }],
                    [{ text: 'let', callback_data: `${userId}-${lvls[0]}-${taskNum}-1` }],
                    [{ text: 'const', callback_data: `${userId}-${lvls[0]}-${taskNum}-1` }],
                    [{ text: 'function', callback_data: `${userId}-${lvls[0]}-${taskNum}-1` }],
                ]
            },
            chat_id: userId,
            message_id: msgId
        })
    }
    if (taskNum === 1) {
        await bot.editMessageText(`${text}Что выведет console.log(typeof NaN)?`, {
            reply_markup: {
                inline_keyboard: [
                    [{ text: "number", callback_data: `${userId}-${lvls[0]}-${taskNum}-1` }],
                    [{ text: 'string', callback_data: `${userId}-${lvls[0]}-${taskNum}-0` }],
                    [{ text: 'undefined', callback_data: `${userId}-${lvls[0]}-${taskNum}-0` }],
                    [{ text: 'NaN', callback_data: `${userId}-${lvls[0]}-${taskNum}-0` }],
                ]
            },
            chat_id: userId,
            message_id: msgId
        })
    }

}
