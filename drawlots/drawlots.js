function print() {
    let arr = [];
    for (let li of document.getElementById("lots-left").childNodes) {
        arr.push(li.textContent)

    }
    console.log(arr);
}
// below is test
let person = {
    name: 'Matt',
    age: 27
};
let { name: personName, personAge = 22 } = person;
console.log(personName); // Matt 
console.log(personAge); // 27


