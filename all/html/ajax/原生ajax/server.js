/*
 * @Author: xiuxiu
 * @Date: 2021-11-20 22:13:39
 * @LastEditTime: 2021-11-20 23:43:56
 * @FilePath: \all\html\ajax\原生ajax\server.js
 */
// 1、引入express
const express = require('express')

// 2、创建应用对象
const app = express()

// 3、创建路由规则
// request 是对请求报文的封装
// response 是对响应报文的封装
app.get('/server', (request, response) => {
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')

    // 设置响应体
    response.send("HELLO AJAX -22")
})
app.all('/server', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*')

    // 响应头
    response.setHeader('Access-Control-Allow-Headers', '*')

    response.send("HELLO AJAX POST")

})
app.all('/json-server', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*')

    // 响应头
    response.setHeader('Access-Control-Allow-Headers', '*')

    // 响应一个数据
    const data = {
        name: 'jack',
    }

    // 对对象进行转换
    let str = JSON.stringify(data)

    response.send(str)

})

// 针对 ie 缓存
app.get('/ie', (request, response) => {
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')

    // 设置响应体
    response.send("HELLO ie -1")
})

// 4、监听端口服务
app.listen(8000, () => {
    console.log('服务已启动，8000 端口监听中.....');
})