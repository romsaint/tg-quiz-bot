import { bot, lvls } from "../../.."

export async function midLvl(msgId: number, taskNum: number, userId: number) {
    const text = `🚀 Уровень Intermediate\n\n`

    if (taskNum === 0) {
        await bot.editMessageText(`${text}Что выведет console.log(1 < 2 < 3 > 0)?`, {
            reply_markup: {
                inline_keyboard: [
                    [{ text: "true", callback_data: `${userId}-${lvls[1]}-${taskNum}-1` }],
                    [{ text: 'false', callback_data: `${userId}-${lvls[1]}-${taskNum}-0` }],
                    [{ text: 'Ошибка', callback_data: `${userId}-${lvls[1]}-${taskNum}-0` }],
                    [{ text: 'NaN', callback_data: `${userId}-${lvls[1]}-${taskNum}-0` }],
                ]
            },
            chat_id: userId,
            message_id: msgId
        })
    }
    if (taskNum === 1) {
        await bot.editMessageText(`${text}Какой метод преобразует JSON в объект?`, {
            reply_markup: {
                inline_keyboard: [
                    [{ text: "JSON.parse()", callback_data: `${userId}-${lvls[1]}-${taskNum}-1` }],
                    [{ text: 'JSON.stringify()', callback_data: `${userId}-${lvls[1]}-${taskNum}-0` }],
                    [{ text: 'JSON.encode()', callback_data: `${userId}-${lvls[1]}-${taskNum}-0` }],
                    [{ text: 'JSON.decode()', callback_data: `${userId}-${lvls[1]}-${taskNum}-0` }],
                ]
            },
            chat_id: userId,
            message_id: msgId
        })
    }
}