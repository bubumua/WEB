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
    if (obj.parentNode.parentNode.childNodes.length > 2) {
        obj.parentNode.parentNode.removeChild(obj.parentNode);
        console.log("delete a lot");
        // sort lots
        numberLots();
    } else {
        console.log("拒绝删除操作！");
    }

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

function openOrCloseSetting() {
    if (expanded) {
        document.getElementById("settings").style.height = "0px";
        expanded = false;
    } else {
        document.getElementById("settings").style.height = "auto";
        expanded = true;
    }
}

function selectText(element) {
    // 获取文本(节点)
    let text = element.getElementsByTagName("p")[0].firstChild;
    if (document.body.createTextRange) {
        let range = document.body.createTextRange();
        range.moveToElementText(text);
        range.select();
    } else if (window.getSelection) {
        let selection = window.getSelection();
        let range = document.createRange();
        range.selectNodeContents(text);
        selection.removeAllRanges();
        selection.addRange(range);
        /*if(selection.setBaseAndExtent){
            selection.setBaseAndExtent(text, 0, text, 1);
        }*/
    } else {
        alert("none");
    }
}

function selectLotContent(obj) {
    const selection = document.getSelection();
    const range = document.createRange();
    // 获取文本节点
    let rangeNode = obj.getElementsByTagName("p")[0].firstChild;
    range.selectNode(rangeNode);
    selection.removeAllRanges();
    selection.addRange(range);

}

function settingChange() {
    console.log('content changed');
    // document.getElementById("save").style.backgroundColor = "red";
}

function saveSetting() {
    console.log("save setting");
    recordLots();
    putback = document.getElementById("putback").checked;
}

function replay() {
    recordLots();
    console.log("One More Turn");
}

function recordLots() {
    let box = document.getElementById("lotsbox");
    for (let i = 0; i < box.childNodes.length - 1; i++) {
        lotList[i] = box.childNodes.item(i).getElementsByTagName("p")[0].innerText;
    }
    console.log(lotList);
}

function draw() {
    let lotsLeftNumber = lotList.length;
    if (lotsLeftNumber > 0) {
        let randomIndex = Math.floor(Math.random() * (lotsLeftNumber - 1));
        let reward = lotList.splice(randomIndex, 1 * Number(!putback));
        console.log(`${randomIndex}号签,${reward}`);
        console.log(`签筒内剩余：${lotList}`);
    } else {
        console.log("已抽完");
    }
}

let expanded = true;
let putback = false;
removeWhiteNode(document.getElementById("lotsbox"));
let lotList = [];


