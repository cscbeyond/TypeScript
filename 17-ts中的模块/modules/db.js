"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.save = exports.getData = exports.dbUrl = void 0;
var dbUrl = 'sssss';
exports.dbUrl = dbUrl;
function getData() {
    console.log('获取数据库的数据');
    return [
        {
            title: '123'
        },
        {
            title: '456'
        }
    ];
}
exports.getData = getData;
function save() {
    console.log('保存数据成功');
}
exports.save = save;
/*
    export default在一个模块里只能使用一次，export可以使用多次
    引入时候 直接import fn from '../fn
    ----------------------------------------
    暴露类和暴露方法是一样的，可以在class之前加上export
*/ 
