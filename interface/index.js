"use strict";
// 属性接口 对json的约束
// ts中定义方法
/** function printLabel():void{
    console.log(`printLabel`);
}
printLabel();
*/
function getName(name) {
    console.log(name);
}
// 参数顺序可以不一样  类型必须对 参数必须要有
getName({
    // secondName: 'secondName',    //可选属性 在接口的参数中加个'?'
    firstName: 'firstName'
});
