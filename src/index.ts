import TelegramBot from 'node-telegram-bot-api'
import dotenv from 'dotenv';
import { categorize } from './commands/components/categorize/categorize';
import { onCallbackQuery } from './commands/queries/callbackQuery';
import { onStart } from './commands/onStart';


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
export const statisticsState: {[taskNum: number]: {text: string, correctAns: string, yourAns: string | null}} = {}

bot.setMyCommands(commands);


bot.onText(/\/start/, onStart)
bot.on('callback_query', onCallbackQuery)