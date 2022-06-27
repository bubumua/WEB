/*先行定义 start*/
const intArray = [1, 2, 3, 4];
const obj0 = {
    name: 'zhangsan',
    age: 18
};
function print(args) {
    console.log(args);
}
function addTen(num) {
    num += 10;
    return num;
}
function addAgeByOne(obj) {
    if ("age" in obj) {
        obj.age++;
    } else {
        print("age is not in obj");
    }
}
/*先行定义 end*/

let originArray = [1, 2, 3, 4];
originArray.push(5, "6", "78", { name: "lisi", age: 18 });
print(originArray);
print("出栈元素为" + originArray.pop());
print(originArray);
console.log("log:" + originArray);
print(originArray.unshift(-1, 0));
print(originArray);

print(originArray.concat(intArray));
intArray[Symbol.isConcatSpreadable] = false;
console.log(originArray.concat(intArray));
print("断言函数搜索");
const people = [
    {
        name: "Matt",
        age: 27
    },
    {
        name: "Nicholas",
        age: 29
    }
];
print(people.find((element, index, array) => element.age < 28));
let a = [0.88, 0.798, 0.767, 0.728, 0.018, -0.262];
let b = [];
let c = 0;
for (let i = 0; i < a.length; i++) {
    c += a[i] * a[i];
}
for (let i = 0; i < a.length; i++) {
    b[i] = a[i] / Math.sqrt(c);
}
print(b);