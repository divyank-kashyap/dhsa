const z = require("zod");

const user = z.object({
    name: z.string(),
    age: z.number()
})

let name = "Divyank";
let age = 21;


const result = user.safeParse({name, age});
console.log(result);
