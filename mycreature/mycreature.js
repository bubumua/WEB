const m = new Map();
console.log(m.has(undefined));
m.set("name", 'John');
console.log(m.has(undefined));
console.log(m.has("name"));
const nd = new Map([[]]);
console.log(nd.has(undefined));
let str = "${m}";
console.log(str);
let a = 6;
let b = 9;
function zipTag(strings, ...expressions) { //表达式参数的数量可变时，通常使用剩余操作符（rest operator）将它们收集到一个数组中
    console.log(strings);
    return expressions.map((e, i) => `${e}${strings[i + 1]}`).join('');
}
let untaggedResult = `${a} + ${b} = ${a + b}`;
let taggedResult = zipTag(`${a} + ${b} = ${a + b}`);
console.log(untaggedResult); // "6 + 9 = 15" 
console.log(taggedResult); // "6 + 9 = 15" 