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
const zhangsan = {
    name: 'zhangsan',
    age: 18,
    introduceself: function () {
        console.log(`my name is ${this.name}, I am ${this.age} years old`);
    }
};
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
let colors = ["red", "green", "blue"];
let news = colors.concat("sd", 1);
print(colors);
print(news);
zhangsan.introduceself();