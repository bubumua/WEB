const fs = require('fs');
const SrcPathPrefix = '/src';
const PagePathPrefix = '/pages';
const CssPathPrefix = '/css';
const JsPathPrefix = '/js';
// fs.readFile('文件路径',文件解析方式，回调函数)
// fs.readFile('pages/index.html', 'utf-8', (err, data) => {
//     //response.writeHead(响应状态码,'配置解析方法，告诉浏览器这个文件你要解析成啥样')
//     res.writeHead(200, { 'Content-Type': 'Text/Html;Chartset=utf-8' });
//     //response.write(你的文件对象)
//     res.write(data);
//     //结束响应信息，必须写在函数块内
//     res.end('');
// })
module.exports = {
    sendHtml(url, res) {
        fs.readFile(`${SrcPathPrefix}${url}`, 'utf-8', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'Text/Html;Chartset=utf-8' });
            res.write(data);
            res.end();
        })
    },
    sendCss(url, res) {
        fs.readFile(`.${SrcPathPrefix}${url}.css`, 'utf-8', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/css; charset=utf-8' });
            res.write(data);
            res.end();
        })
    },
    sendJs(url, res) {
        fs.readFile(`.${SrcPathPrefix}${url}.js`, 'utf-8', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'Text/javascript;Chartset=utf-8' });
            res.write(data);
            res.end();
        })
    },
    sendImg(url, res) {
        fs.readFile(`.${SrcPathPrefix}${url}`, (err, data) => {
            res.writeHead(200, { 'Content-Type': 'Text/javascript;Chartset=utf-8' });
            res.write(data);
            res.end();
        })
    },
    sendDefault(url, res) {
        fs.readFile(`.${SrcPathPrefix}${PagePathPrefix}/index.html`, 'utf-8', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'Text/Html;Chartset=utf-8' });
            res.write(data);
            res.end();
        })
    }
}
