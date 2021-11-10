/*
 * @Author: xiuxiu
 * @Date: 2021-11-10 10:05:47
 * @LastEditTime: 2021-11-10 10:59:33
 * @FilePath: \all\html\BOM\京东放大镜\js\detail.js
 */
window.addEventListener('load', function() {
    var preview_img = document.querySelector('.preview_img')
    var mask = document.querySelector('.mask')
    var big = document.querySelector('.big')
    var bigImg = document.querySelector('.bigImg')
    preview_img.addEventListener('mouseover', function() {
        mask.style.display = 'block'
        big.style.display = 'block'
    })
    preview_img.addEventListener('mouseout', function() {
        mask.style.display = 'none'
        big.style.display = 'none'
    })

    preview_img.addEventListener('mousemove', function(e) {
        var x = e.pageX - this.offsetLeft
        var y = e.pageY - this.offsetTop
        var maskX = x - mask.offsetWidth / 2
        var maskY = y - mask.offsetHeight / 2
        var maskMax = preview_img.offsetWidth - mask.offsetWidth
        var bigMax = big.offsetWidth - bigImg.offsetWidth
        if (maskX < 0) {
            maskX = 0
        } else if (maskX > maskMax) {
            maskX = maskMax
        }
        if (maskY <= 0) {
            maskY = 0
        } else if (maskY > maskMax) {
            maskY = maskMax
        }
        mask.style.left = maskX + 'px'
        mask.style.top = maskY + 'px'
        var bigX = maskX * bigMax / maskMax
        var bigY = maskY * bigMax / maskMax
        bigImg.style.left = bigX + 'px'
        bigImg.style.top = bigY + 'px'

    })
})