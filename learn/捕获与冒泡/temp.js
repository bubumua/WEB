const father = document.getElementById('father');
const son = document.getElementById('son');
const console = document.getElementById('console');

for (let elem of document.querySelectorAll('*')) {
    elem.addEventListener("click", e => alert(`Capturing: ${elem.tagName}`), true);
    elem.addEventListener("click", e => alert(`Bubbling: ${elem.tagName}`));
}