'use strict';

// const fetch = require('node-fetch');
const request = require('request');
request.get('http://httpbin.org/get', (error, response, body) => {
    if (error) {
        console.error('Oh shoot. Something went wrong:');
        console.error(error.message);
        return;
    }

    console.log('Request done. Response status code: %d', response.statusCode);
});

var http = require('http');

http.createServer(function (request, response) {

    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200, { 'Content-Type': 'text/plain' });

    // 发送响应数据 "Hello World"
    response.end('Hello World\n');
}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');
