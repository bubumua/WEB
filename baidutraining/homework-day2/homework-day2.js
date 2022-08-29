const arr = ["11", ["12"], "22", "33", ["44", "55", ["66", ["67"], "77"]], "88"];
console.log(arr);
function getHtmlFromArray(arr) {
    let result = "";
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result += getHtmlFromArray(arr[i]);
        } else {
            result += `<li>${arr[i]}</li>`;
        }
    }
    return `<ul>${result}</ul>`;
}
document.getElementById("g").innerHTML = getHtmlFromArray(arr);