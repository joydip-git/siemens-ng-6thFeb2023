import { myType } from "./types";

export class Operations {
    add(a: number, b: number): myType {
        return (a + b)
    }
    subtract(a: number, b: number): myType {
        return a - b
    }
}
