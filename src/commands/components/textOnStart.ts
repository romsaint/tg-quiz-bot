import { bot } from "../..";

export async function textOnStat(userId: number): Promise<undefined> {
    await bot.sendMessage(userId, 'Выбери уровень сложности:')
}