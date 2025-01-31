import { bot } from "../..";

export async function textOnStat(userId: number): Promise<undefined> {
    await bot.sendMessage(userId, 'Выбери уровень сложности:', {
        // reply_markup: {
        //     inline_keyboard: [
        //         [{text: 'keyboardStart[0]'}],
        //         [{text: 'keyboardStart[1]'}],
        //         [{text: 'keyboardStart[2]'}],
        //     ]
        // }
    })
}