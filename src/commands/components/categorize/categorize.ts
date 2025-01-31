import { lvls } from "../../.."
import { easyLvl } from "./easy"
import { highLvl } from "./high"
import { midLvl } from "./mid"

export async function categorize(text: string, msgId: number, taskNum: number, userId: number) {
    if(text === lvls[0]) {
        await easyLvl(msgId, taskNum, userId)
    }
    // if(text === keyboardStart[1]) {
    //     await midLvl(msgId, chatIid)
    // }
    // if(text === keyboardStart[2]) {
    //     await highLvl(msgId, chatIid)
    // }
}