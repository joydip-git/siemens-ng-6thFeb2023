import { fnType } from "./types";
//rest operator
export function invoke(callback: fnType, ...args: number[]) {
    console.log(callback(args[0], args[1]))
}