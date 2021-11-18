/*
 * @Author: xiuxiu
 * @Date: 2021-11-18 22:14:59
 * @LastEditTime: 2021-11-18 23:05:42
 * @FilePath: \all\html\DOM\封装dom库\src\main.js
 */
// const div = dom.create('<div><span>222</span></div>')
const test = document.querySelector('#test')
console.log(test);
const div = dom.create('<div>newDiv</div>')
dom.after(test, div)
console.log(div);