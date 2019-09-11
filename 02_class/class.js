"use strict";
// 1.最简单的类
// function Person() {
//     this.name = 'zhangsan';
//     this.age = 20;
// }
// let p = new Person();
// console.log(p.name);
// console.log(p.age);
// 2.构造函数和原型链里面新添方法。
// 3.类里面的静态方法
// function Person() {
//     this.name = 'zhangsan'; /*属性*/
//     this.age = 20;
//     this.run = function () {  /*实例方法*/
//         alert(this.name + '在运动');
//     }
// }
// 静态方法
// Person.getInfo = function(){
//     console.log('我是一个静态方法');
// }
// let p = new Person();
// console.log(p.age);
// p.run();
// // 原型链上的属性会被多个实例共享，构造函数不会
// Person.prototype.sex = '男';
// Person.prototype.work = function () {
//     alert(this.name);
// }
// Person.getInfo();
// 4.es5里面的继承      原型链实现冒充继承
// function Person() {
//     this.name = 'zhangsan'; /*属性*/
//     this.age = 20;
//     this.run = function () {  /*实例方法*/
//         alert(this.name + '在运动');
//     }
// }
// Person.prototype.sex = '男';
// Person.prototype.work = function () {
//     alert(this.name);
// }
// // web类，继承Person类  原型链+对象冒充的组合继承模式
// function Web (){
//     Person.call(this);/*对象冒充实现继承*/
// }
// Web.prototype = new Person();   // 原型链实现继承
// // 原型链实现继承：可以继承构造函数里面的属性和方法，也可以继承原型链上面的属性和方法
// var w = new Web();
// w.run();
// w.work();
// 6.原型链继承的问题
// function Person(name,age) {
//     this.name = name; /*属性*/
//     this.age = age;
//     this.run = function () {  /*实例方法*/
//         alert(this.name + '在运动');
//     }
// }
// Person.prototype.sex = '男';
// Person.prototype.work = function () {
//     alert(this.name);
// }
// var p = new Person('lisi',20);
// p.run();
// function Web(name,age) {
// }
// Web.prototype = new Person();
// var w = new Web('zhaosi',20);   //实例化子类的时候，没法给父类传参
// w.run();
// 7.原型链+构造函数的组合继承模式
// function Person(name, age) {
//     this.name = name; /*属性*/
//     this.age = age;
//     this.run = function () {  /*实例方法*/
//         alert(this.name + '在运动');
//     }
// }
// Person.prototype.sex = '男';
// Person.prototype.work = function () {
//     alert(this.name);
// }
// var p = new Person('lisi', 20);
// p.run();
// function Web(name, age) {
//     Person.call(this, name, age);/* 对象冒充继承，实例化子类，可以给父类传承 */
// }
// Web.prototype = new Person();
// var w = new Web('zhaosi', 20);   //实例化子类的时候，没法给父类传参
// w.run();
// 8.原型链+对象冒充继承的另一种方式
function Person(name, age) {
    this.name = name; /*属性*/
    this.age = age;
    this.run = function () {
        alert(this.name + '在运动');
    };
}
Person.prototype.sex = '男';
Person.prototype.work = function () {
    alert(this.name);
};
var p = new Person('lisi', 20);
p.run();
function Web(name, age) {
    Person.call(this, name, age); /* 对象冒充继承，可以继承构造函数里面的实行和方法，实例化子类，可以给父类传承 */
}
Web.prototype = Person.prototype();
var w = new Web('zhaosi', 20); //实例化子类的时候，没法给父类传参
w.run();
w.work();
