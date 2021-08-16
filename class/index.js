"use strict";
// es5中的类
// function Person(name) {
//     this.name = name;
//     this.run = function () {
//         console.log(this.name)
//     }
// }
// var p = new Person('张三');
// p.run();
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// ts中定义类
// class Person {
//     name: string;   //定义属性  前面省略了public
//     constructor(n: string) {  //构造函数  实例化类的时候 触发的方法
//         this.name = n;
//     }
//     getName(): string {
//         return this.name;
//     }
//     setName(name): void {
//         this.name = name;
//     }
// }
// var p = new Person('张三')
// console.log(p.getName());
// p.setName('李四');
// console.log(this.getName());
// 2.ts中实现继承 extends、super
// class Person {
//     name: string;
//     constructor(name: string) {
//         this.name = name;
//     }
//     run(): string {
//         return `${this.name}在运动`
//     }
// }
// // var p = new Person('王五');
// // p.run();
// class Web extends Person {
//     constructor(name: string) {
//         super(name);
//     }
// }
// var w = new Web('李四');
// w.run();
// ts中继承的探讨  父类的方法和子类的方法一致
// class Person {
//     name: string;
//     constructor(name: string) {
//         this.name = name;
//     }
//     run(): string {
//         return `${this.name}在运动`
//     }
// }
// // var p = new Person('王五');
// // p.run();
// class Web extends Person {
//     constructor(name: string) {
//         super(name);
//     }
//     work() {
//         alert(`${this.name}在工作`);
//     }
//     run(): string {
//         return `${this.name}在运动--子类`
//     }
// }
// var w = new Web('李四');
// w.run(); 子父类属性重名，执行子类自己的方法。继承中的原型链
// w.work();
// 3.类里面的修饰符 ts中，定义属性时，给我们提供了三种修饰符
/**
 * public       公有       在当前类里面、子类、类外部 都可以访问
 * protected    保护类型    在当前类里面、子类里面可以访问，在类外部不能方法
 * private      私有       在当前类里面可以访问，在子类和类外面没法访问
 *
 * 属性不加修饰符，默认公有，public
 */
// class Person {
//     public name: string;            //公有属性
//     constructor(name: string) {
//         this.name = name;
//     }
//     run(): string {
//         return `${this.name}在运动`
//     }
// }
// // var p = new Person('王五');
// // p.run();
// class Web extends Person {
//     constructor(name: string) {
//         super(name);
//     }
//     work() {
//         alert(`${this.name}在工作`);
//     }
//     run(): string {
//         return `${this.name}在运动--子类`
//     }
// }
// var w = new Web('李四');
// w.work();
// // 类外部访问公有属性
// var p = new Person('哈哈哈');
// p.name;
// protected    保护类型    在类里面、子类里面可以访问，在类外部不能方法
// 在类外部，没法访问保护类型的属性
// class Person {
//     protected name: string;            //公有属性
//     constructor(name: string) {
//         this.name = name;
//     }
//     run(): string {
//         return `${this.name}在运动`
//     }
// }
// // var p = new Person('王五');
// // p.run();
// class Web extends Person {
//     constructor(name: string) {
//         super(name);
//     }
//     work() {
//         alert(`${this.name}在工作`);
//     }
//     run(): string {
//         return `${this.name}在运动--子类`
//     }
// }
// var w = new Web('李四');
// w.work();
// w.run();
// var p = new Person('哈哈哈');
// private      私有       在类里面可以访问，在子类和类外面没法访问
// class Person {
//     private name: string;            //公有属性
//     constructor(name: string) {
//         this.name = name;
//     }
//     run(): string {
//         return `${this.name}在运动`
//     }
// }
// var p = new Person('哈哈哈');
// p.run();
// function Person(){
//     this.run1 = function(){  /* 实例方法*/
//     }
// }
// Person.name = '哈哈哈';
// Person.run2 = function(){    /* 静态方法 */
// }
// var p = new Person();
// Person.run2();
// 静态属性和静态方法
// class Person {
//     public name: string;
//     public age: number = 20;
//     static sex = '男';
//     constructor(name: string) {
//         this.name = name;
//     }
//     run() { /*  实例方法 */
//         alert(`${this.name}在运动`)
//     }
//     work() {
//         alert(`${this.name}在工作`)
//     }
//     static print(): void{   /* 静态方法里没法直接调用类内部的属性 */
//         // alert(`print方法${this.age}`)  --->error
//         alert(`${this.sex}`);
//     }
// }
// // var p = new Person('张三');
// Person.print();
// Person.sex;
// 多态： 父类定义一个方法不去实现，让继承他的子类去实现，每一个子类有不同的表现
// 多态也是继承的一种表现
// class Animal {
//     name: string;    //默认public
//     constructor(name: string) {
//         this.name = name;
//     }
//     eat() { //具体吃什么 不知道 具体吃什么，让继承他的子类去实现 每一个子类的表现不一样
//         console.log(`吃的方法`);
//     }
// }
// class Dog extends Animal {
//     constructor(name) {
//         super(name);
//     }
//     eat() {
//         return this.name + '吃肉';
//     }
// }
// class Cat extends Animal {
//     constructor(name: string) {
//         super(name)
//     }
//     eat() {
//         return this.name + '老鼠';
//     }
// }
// ts中的抽象类，他是提供其他类继承的基类，不能直接被实例化
// 用abstract关键字定义抽象类和方法，抽象类中的抽象方法不包含具体实现，并且必须在派生类中实现
// abstract抽象方法只能放在抽象类里面
// 抽象类和抽象方法 用来定义标准 ，标准：Animal这个类要求他的子类必须包含eat方法
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.run = function () {
        console.log('其他方法可以不实现');
    };
    return Animal;
}());
// var a = new Animal();  ---->错误写法 无法直接实例化
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    // 抽象类的子类 必须实现抽象类里面的抽象方法
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.eat = function () {
        console.log(this.name + '吃粮食');
    };
    return Dog;
}(Animal));
var d = new Dog('小黑');
d.eat();
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    // 抽象类的子类 必须实现抽象类里面的抽象方法
    function Cat(name) {
        return _super.call(this, name) || this;
    }
    return Cat;
}(Animal));
// var c = new Cat('小花猫'); --->报错 因为未实现eat方法
