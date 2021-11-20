/*
 * @Author: xiuxiu
 * @Date: 2021-11-20 16:04:11
 * @LastEditTime: 2021-11-20 17:46:06
 * @FilePath: \all\html\DOM\jQuery封装dom库\src\jquery.js
 */
window.jQuery = function(selectorOrArray) {
    let elements
    if (typeof selectorOrArray === "string") {
        elements = document.querySelectorAll(selectorOrArray)
    } else if (selectorOrArray instanceof Array) {
        elements = selectorOrArray
    }
    return {
        oldApi: selectorOrArray.oldApi,
        find(selector) {
            let arr = []
            for (let i = 0; i < elements.length; i++) {
                arr = arr.concat(Array.from(elements[i].querySelectorAll(selector)))
                    // console.log(arr instanceof Array);
            }
            arr.oldApi = this
            return jQuery(arr)
        },
        end() {
            return this.oldApi
        },
        addClass(className) {
            for (let i = 0; i < elements.length; i++) {
                elements[i].classList.add(className)
            }
            return this
        },
    }
}