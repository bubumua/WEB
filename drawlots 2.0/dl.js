function addLot() {
    let box = document.getElementById("lotsbox");
    // clone the first node of lotsbox and insert it before the last node("+")
    let newLot = document.getElementById("lot-0").cloneNode(true);
    box.insertBefore(newLot, box.lastChild);
    // console.log(box.childNodes);
    console.log("add a lot");
    // sort lots
    numberLots();
}

function deleteLot(obj) {
    if (getId(obj.parentNode) > 0) {
        obj.parentNode.parentNode.removeChild(obj.parentNode);
        console.log("delete a lot");
        // sort lots
        numberLots();
    } else {
        console.log("只剩一个啦");
    }
}

function drag() {
    console.log("something dragged?");
}

function box() {
    console.log("box trigged");
}

function removeWhiteNode(node) {
    for (let i = 0; i < node.childNodes.length; i++) {
        if (node.childNodes[i].nodeType === 3) {
            node.childNodes[i].parentNode.removeChild(node.childNodes[i]);
        }
    }
    return node;
}

function traverse(fatherNode) {
    for (let i = 0; i < fatherNode.childNodes.length; i++) {
        const element = fatherNode.childNodes[i];
        console.log(element);
    }
}

function getId(node) {
    let tempArr = node.id.split("-");
    return tempArr[tempArr.length - 1];
}

function numberLots() {
    let box = document.getElementById("lotsbox");
    for (let i = 0; i < box.childNodes.length - 1; i++) {
        box.childNodes.item(i).id = "lot-" + i;
    }
}

function ok(obj) {
    console.log(obj);
}

removeWhiteNode(document.getElementById("lotsbox"));
