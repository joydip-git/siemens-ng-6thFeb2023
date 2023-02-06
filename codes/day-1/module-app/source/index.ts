import { Operations } from "./operations";
import { invoke } from "./invoker";

const addOp = new Operations()
invoke(addOp.add, 10, 20)