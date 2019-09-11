// 属性接口 对json的约束
// ts中定义方法
/** function printLabel():void{
    console.log(`printLabel`);
}
printLabel();
*/

/** ts中定义方法，传入参数 
 * 
 * function printLabel(label:string):void{
    console.log(`printLabel`);
}
printLabel('hahaha');
 * */

/*
ts中自定义方法，传入参数，对json进行约束
function printLabel(labelInfo: { label: string }): void {
    console.log(`printLabel`);
}
printLabel({ label: '张三' });  // 正确
---------------------------------
function printLabel(labelInfo: { label: string }): void {
    console.log(`printLabel`);
}
printLabel({ name: 'ccc', label: '张三' }); //--->error
*/


// 对批量方法传入参数进行约束

// 就是传入对象的约束   属性接口
/*
interface FullName {
    firstName: string;   //注意分号结束
    secondName: string;
}
function printName(name: FullName) {
    // 必须传入对象 firstName secondName
    console.log(name.firstName + '----' + name.secondName);
}
printName({
    firstName: '陈',
    secondName: '士成',
});

----------------------------------------
interface FullName {
    firstName: string;   //注意分号结束
    secondName: string;
}
function printName(name: FullName) {
    // 必须传入对象 firstName secondName
    console.log(name.firstName + '----' + name.secondName);
}
var obj = {     //传入的参数必须包含 firstNmae secondName
    firstName: '陈',
    secondName: '士成',
    age:21
};
printName(obj);
----------------------------------------
interface FullName {
    firstName: string;   //注意分号结束
    secondName: string;
}
function printName(name: FullName) {
    // 必须传入对象 firstName secondName
    console.log(name.firstName + '----' + name.secondName);
}
printName({
    firstName: '陈',
    secondName: '士成',
    age:21
});     ---> 报错
*/

/*
接口：行为和动作的规范，对批量方法进行约束
interface FullName {
    firstName: string;
    secondName: string;
}

function printName(name: FullName) {
    console.log(name.firstName + '----' + name.secondName);
}

function printInfo(info: FullName) {
    console.log(info.firstName + '----' + info.secondName);
}

var obj = {
    firstName: '陈',
    secondName: '士成',
    age: 21
}
printName(obj);

var info = {
    firstName: '陈',
    secondName: '士成',
    age: 21
}
printInfo(info);
*/


/* 
接口：可选属性
*/
interface FullName {
    firstName: string;
    secondName?: string;
}
function getName(name: FullName) {
    console.log(name);
}
// 参数顺序可以不一样  类型必须对 参数必须要有
getName({
    // secondName: 'secondName',    //可选属性 在接口的参数中加个'?'
    firstName: 'firstName'
})









