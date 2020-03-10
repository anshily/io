var http = require('http');
var process = require('child_process');

http.createServer(function (request, response) {
    console.log(request);
    process.exec('git pull',function (error, stdout, stderr) {
        if (error !== null) {
          console.log('exec error: ' + error);
        }
        if (stdout !== null) {
            console.log('exec stdout: ' + stdout);
          }
    });
    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // 发送响应数据 "Hello World"
    response.end('Hello World\n');
}).listen(8888);
