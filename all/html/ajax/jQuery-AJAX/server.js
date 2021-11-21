/*
 * @Author: xiuxiu
 * @Date: 2021-11-21 12:54:18
 * @LastEditTime: 2021-11-21 12:58:57
 * @FilePath: \all\html\ajax\jQuery-AJAX\server.js
 */
const express = require('express')

const app = express()

app.get('/home', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/data', (request, response) => {
    response.send('用户数据')
})

app.listen(9000, () => {
    console.log('服务已经启动...');
})