import TelegramBot from 'node-telegram-bot-api'
import dotenv from 'dotenv';
import { onText } from './commands/onText';
import { categorize } from './commands/components/categorize/categorize';


dotenv.config();

const token = process.env.API_KEY_BOT;
if (!token) {
    throw new Error('TOKEN is not defined!');
}

export const bot = new TelegramBot(token, { polling: true });

export const commands = [
    { command: 'start', description: 'Запуск бота' }
]
export const lvls: string[] = ["Новичок", "Продвинутый", "Эксперт"]
export const taskState: { [key: number]: number } = {}
export const scoreState: { [key: number]: number } = {}

bot.setMyCommands(commands);

bot.onText(/\/start/, async msg => {
    const userId = msg.from?.id
    try {
        if (userId) {
            taskState[userId] = 0
            scoreState[userId] = 0

            await bot.sendMessage(userId, 'Выбери уровень сложности:', {
                reply_markup: {
                    inline_keyboard: [
                        [{ text: lvls[0], callback_data: `${userId}-${lvls[0]}` }],
                        [{ text: lvls[1], callback_data: `${userId}-${lvls[1]}` }],
                        [{ text: lvls[2], callback_data: `${userId}-${lvls[2]}` }],
                    ]
                }
            });
        }
    } catch (e) {
        if (e instanceof Error) console.log(e.message)
    }
})
bot.on('text', onText)

bot.on('callback_query', async query => {
    try {
        const userId = query.from.id
        const lvl = query.data?.split('-')[1]
        let taskNum = query.data?.split('-')[2]
        const answer = query.data?.split('-')[3]

        if (query.message?.message_id && taskState[userId] !== undefined) {
            if (lvl === lvls[0] && !taskNum) {

                await categorize(lvl, query.message?.message_id, taskState[userId], userId)
                taskState[userId] += 1
            }
            if (lvl === lvls[0] && taskNum) {
              
                if (answer === '1') {
                    scoreState[userId] += 1
                }

                if (taskNum === '1') {
                    await bot.editMessageText(`Вы прошли тест! ${scoreState[userId]} из 2 правильных ответов`, {
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
})