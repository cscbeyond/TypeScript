"use strict";
// 函数类型接口：对方法传入的参数及返回值进行约束   批量约束
var md5 = function (key, val) {
    // 模拟操作
    return key + val;
};
console.log(md5('name', 'zhangsan'));
var sha1 = function (key, val) {
    return key + '---' + val;
};
console.log(sha1('name', 'lisi'));
