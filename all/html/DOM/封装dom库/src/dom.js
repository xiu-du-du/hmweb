/*
 * @Author: xiuxiu
 * @Date: 2021-11-18 22:30:50
 * @LastEditTime: 2021-11-19 11:50:17
 * @FilePath: \all\html\DOM\封装dom库\src\dom.js
 */
window.dom = {
    // 创建元素
    create(string) {
        const container = document.createElement("template");
        container.innerHTML = string.trim(); //去首尾空格
        return container.content.firstChild
    },
    // 在后面插入
    after(node, node2) {
        node.parentNode.insertBefore(node2, node.nextSibling)
    },
    // 在前面插入
    before(node, node2) {
        node.parentNode.insertBefore(node2, node)
    },
    // 添加一个儿子
    append(parent, child) {
        parent.appendChild(child)
    },
    // 添加一个父亲
    wrap(node, parent) {
        dom.before(node, parent)
        dom.append(parent, node)
    },
    // 删除节点
    remove(node) {
        // node.remove() 兼容不好
        node.parentNode.removeChild(node)
        return node
    },
    //删除后代
    empty(node) {
        // node.innerHTML=''  
        // const childNodes = node.childNodes
        // const { childNodes } = node //简写
        const arr = []
        let x = node.firstChild
        while (x) {
            arr.push(dom.remove(node.firstChild))
            x = node.firstChild
        }
        return arr
    }
}