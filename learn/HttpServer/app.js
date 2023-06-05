const http = require('http'); //服务器-浏览器交互遵循http协议，导入http模块，此为node自带
const fs = require('fs');
const port = 3000; // 端口号
const localhost = '127.0.0.1'; //代理服务器主机名
const router = require('./indexRouter');

//通过http模块的createServer方法去创建服务，req为请求对象， res为响应对象
const httpServer = http.createServer((req, res) => {
    console.log(`req.url=${req.url}`);
    //设置响应头
    res.setHeader('Content-Type', 'text/plain');
    router.pageRoute(req, res);
})
//通过http的的listen方法去监听服务器运行
httpServer.listen(port, localhost, function () {
    console.log(`server is running at ${localhost}:${port}`);
})


