
var dbUrl = 'sssss';

function getData(): any {
    console.log('获取数据库的数据');
    return [
        {
            title: '123'
        },
        {
            title: '456'
        }
    ]
}

function save() {
    console.log('保存数据成功');
}
export {
    dbUrl, getData, save
}
/* 
    export default在一个模块里只能使用一次，export可以使用多次
    引入时候 直接import fn from '../fn
    ----------------------------------------
    暴露类和暴露方法是一样的，可以在class之前加上export
*/