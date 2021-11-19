/*
 * @Author: xiuxiu
 * @Date: 2021-11-18 22:30:50
 * @LastEditTime: 2021-11-20 02:27:03
 * @FilePath: \all\html\DOM\封装dom库\src\dom.js
 */
window.dom = {
    /* 增 */
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
    append(parent, node) {
        parent.appendChild(node)
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

    /* 删 */
    //删除后代
    empty(node) {
        // const { childNodes } = node
        const arr = []
        let x = node.firstChild
        while (x) {
            dom.remove(node.firstChild)
            arr.push(node.firstChild)
            x = node.firstChild
        }
        return arr
    },

    /* 改 */
    // 如果参数有三个，则为设置节点属性的属性值；如果参数有两个，则为读取节点属性的属性值
    // 叫做重载
    attr(node, name, value) {
        if (arguments.length === 3) {
            node.setAttribute(name, value)
        } else if (arguments.length === 2) {
            return node.getAttribute(name)
        }
    },
    //修改元素内容
    // 叫做适配
    text(node, string) {
        if (arguments.length === 2) {
            if ('innerText' in node) {
                node.innerText = string //ie
            } else {
                node.textContent = string // firefox/chrome
            }
        } else if (arguments.length === 1) {
            if ('innerText' in node) {
                return node.innerText //ie
            } else {
                return node.textContent // firefox/chrome
            }
        }
    },
    html(node, string) {
        if (arguments.length === 2) {
            console.log(string);
            node.innerHTML = string
        } else if (arguments.length === 1) {
            return node.innerHTML
        }
    }
}