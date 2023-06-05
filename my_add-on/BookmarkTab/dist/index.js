function makeIndent(indentLength) {
    return "|_".repeat(indentLength);
}

function logItems(bookmarkItem, indent) {
    // if is a bookmark, then print
    if (bookmarkItem.url) {
        console.log(makeIndent(indent) + bookmarkItem.url.substr(0, 10));
    }
    // if is a folder, then print "folder" and indent
    else {
        console.log(`${makeIndent(indent)}Folder: ${bookmarkItem.title}`);
        indent++;
    }
    if (bookmarkItem.children) {
        for (child of bookmarkItem.children) {
            logItems(child, indent);
        }
    }
    indent--;
}

function logTree(bookmarkItems) {
    logItems(bookmarkItems[0], 0);
}

function onRejected(error) {
    console.log(`An error: ${error}`);
}

function poseBookmarks(node) {
    const viewer = document.getElementById('viewer');
    const viewerContent = document.createElement('div');
    viewerContent.className = "viewer-content";
    // add new viewer-content column
    viewer.appendChild(viewerContent);
    for (const child of node.children) {
        let block = document.createElement('div');
        block.className = 'viewer-content-item';
        viewerContent.appendChild(block);
        // if a bookmark
        if (child.url) {
            let link = document.createElement('a');
            link.href = child.url;
            link.textContent = child.title;
            block.appendChild(link);
        }
        // if a folder
        else {
            let title = document.createElement('span');
            title.innerText = child.title;
            block.appendChild(title);
            block.addEventListener('click', () => {
                // 删除VC后的所有兄弟div
                let nextSibling = block.parentElement.nextElementSibling;
                while (nextSibling) {
                    viewer.removeChild(nextSibling);
                    nextSibling = block.parentElement.nextElementSibling;
                    console.log(nextSibling);
                }
                poseBookmarks(child);
            });
        }
    }
}

function poseBaseNodes(rootTree) {
    let rootNode = rootTree[0];
    const roots = document.getElementById('roots');
    for (const child of rootNode.children) {
        if (!child.url) {
            // console.log(`fd: ${child.title}`);
            let block = document.createElement('div');
            block.className = 'roots-item';
            roots.appendChild(block);
            let title = document.createElement('span');
            title.innerText = child.title;
            block.appendChild(title);
            block.addEventListener('click', () => {
                // 删除VC中的所有div
                const viewer = document.getElementById('viewer');
                console.log(viewer.children);
                let fisrtChild = viewer.firstElementChild;
                while (fisrtChild) {
                    viewer.removeChild(fisrtChild);
                    fisrtChild = viewer.firstElementChild;
                }
                poseBookmarks(child);
            });
        }
        else {
            console.log(`bk: ${child.url}`);
        }
    }
}

let gettingTree = browser.bookmarks.getTree();
gettingTree.then(poseBaseNodes, onRejected);