// ==UserScript==
// @name         百度文库简陋破解
// @namespace    http://tampermonkey.net/
// @version      1
// @description  little tool
// @author       Bubu
// @match        https://wenku.baidu.com/view/*
// @icon         https://edu-wenku.bdimg.com/v1/pc/2020新首页/wenku-header-icon.ico
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';

    let myData;
    Object.defineProperty(window, "pageData", {
        set(webData) {
            myData = webData;
        },
        get() {
            if ('vipInfo' in myData) {
                myData.vipInfo.isVip = 1;
            }
            return myData;
        }
    });

    document.body.addEventListener("keydown", (e) => {
        if (e.ctrlKey && e.keyCode == '67') {
            let primary = document.querySelector(".to-search-wrap .link").innerText;
            let selectText = primary.split("查看全部包含“")[1].split("”的文档")[0];
            let target = selectText.replace(/\s/g, '\n');
            let input = document.createElement("input");
            input.setAttribute("value", target);
            document.body.appendChild(input);
            input.select();
            document.execCommand("copy");
            console.log(target);

        }
    });

})();

