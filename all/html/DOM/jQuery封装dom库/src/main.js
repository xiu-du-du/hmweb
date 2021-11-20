/*
 * @Author: xiuxiu
 * @Date: 2021-11-20 16:04:14
 * @LastEditTime: 2021-11-20 17:42:02
 * @FilePath: \all\html\DOM\jQuery封装dom库\src\main.js
 */
// jQuery(".test")
//     .addClass("red")
//     .addClass('blue')
//     .addClass('green')
//     .addClass('pink') // 链式操作

// console.log(jQuery('.test').find('.child'));

// const api = jQuery('.test1')
// api.addClass('red').addClass('pink')
// api.find('.child').addClass('red').addClass('blue')
// api.addClass('green')
jQuery('.test1')
    .find('.child')
    .addClass('blue')
    .addClass('pink')
    .end()
    .addClass('red')