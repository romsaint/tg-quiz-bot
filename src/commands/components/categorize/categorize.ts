import { lvls } from "../../.."
import { easyLvl } from "./easy"
import { highLvl } from "./high"
import { midLvl } from "./mid"

export async function categorize(text: string, msgId: number, taskNum: number, userId: number) {
    if(text === lvls[0]) {
        await easyLvl(msgId, taskNum, userId)
    }
    if(text === lvls[1]) {
        await midLvl(msgId, taskNum, userId)
    }
    if(text === lvls[2]) {
        await highLvl(msgId, taskNum, userId)
    }
}