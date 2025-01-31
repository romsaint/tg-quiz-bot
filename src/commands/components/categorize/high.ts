import { bot, lvls } from "../../.."

export async function highLvl(msgId: number, taskNum: number, userId: number) {
    const text = `🚀 Уровень Advanced\n\n`

    if (taskNum === 0) {
        await bot.editMessageText(`${text}Что выведет console.log(new Date(0))`, {
            reply_markup: {
                inline_keyboard: [
                    [{ text: "1970-01-01T00:00:00.000Z", callback_data: `${userId}-${lvls[2]}-${taskNum}-1` }],
                    [{ text: 'Текущая дата', callback_data: `${userId}-${lvls[2]}-${taskNum}-0` }],
                    [{ text: 'Ошибка', callback_data: `${userId}-${lvls[2]}-${taskNum}-0` }],
                    [{ text: 'undefined', callback_data: `${userId}-${lvls[2]}-${taskNum}-0` }],
                ]
            },
            chat_id: userId,
            message_id: msgId
        })
    }
    if (taskNum === 1) {
        await bot.editMessageText(`${text}Что такое Event Loop?`, {
            reply_markup: {
                inline_keyboard: [
                    [{ text: "Цикл обработки событий", callback_data: `${userId}-${lvls[2]}-${taskNum}-1` }],
                    [{ text: 'Тип данных', callback_data: `${userId}-${lvls[2]}-${taskNum}-0` }],
                    [{ text: 'Метод анимации', callback_data: `${userId}-${lvls[2]}-${taskNum}-0` }],
                    [{ text: 'Синтаксис ES6', callback_data: `${userId}-${lvls[2]}-${taskNum}-0` }],
                ]
            },
            chat_id: userId,
            message_id: msgId
        })
    }
}