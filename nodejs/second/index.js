import add from "./math.js"; // default import
import { subt, multi, div } from "./math.js"; // named import 

const res = add(2, 36);
console.log(res);

const res1 = subt(100, 40);
console.log(res1);

const res2 = multi(10, 2);
console.log(res2);

const res3 = div(20, 4);
console.log(res3);