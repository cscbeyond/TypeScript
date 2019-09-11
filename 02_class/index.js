"use strict";
var flag = true;
// flag = 123; 错误写法
flag = false; //正确写法
console.log(flag);
var num = 123;
num = 456;
// num = '123'; -->错误写法
console.log(num);
// function getInfo(str: any): any {
//     if (typeof str == 'string') {
//         return `我叫：${str}`;
//     } else {
//         // return str + 10;
//         return `我的年龄是：${str}`;
//     }
// }
function getInfo(str) {
    return str;
}
setTimeout(function () {
    console.log('run');
}, 200);
