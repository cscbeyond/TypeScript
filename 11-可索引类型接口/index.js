"use strict";
// 可索引接口，数组、对象（不常用）的约束
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
/*
    var arr = [1,2,3,4,'5'];
    // 在ts中，定义数组的方式
    var arr:number[] = [1,2,3,4,5];
    var arr1: Array<string> = ['1','2'];
*/
/*
    可索引接口：对数组的约束
interface UserArr{
    [index:number]:string;
}
var arr:UserArr = ['a','b'];
console.log(arr[0]);
*/
/*
可索引接口：对对象的约束
interface UserObj {
    [index:string]:string;
}
// var arr:UserObj = ['11','22'];-->error
var objL:UserObj = {
    name: 'chenshicheng',
    age:'21'        //如果改成number 会报错
}
*/
/*
    类类型接口：对类的约束 和 抽象类 有点相似

interface Animal {
    name: string;
    eat(str: string): void;
}
class Dog implements Animal {
    name: string;
    constructor(name: string) {
        this.name = name
    };
    eat() {
        console.log(this.name + '吃粮食');
    }
}
var d = new Dog('小黑');
d.eat();


*/
""(__makeTemplateObject(["bash\ninterface Animal {\n    name: string;\n    eat(str: string): void;\n}\nclass Dog implements Animal {\n    name: string;\n    constructor(name: string) {\n        this.name = name\n    };\n    eat() {\n        console.log(this.name + '\u5403\u7CAE\u98DF');\n    }\n}\nvar d = new Dog('\u5C0F\u9ED1');\nd.eat();\n\nclass Cat implements Animal {\n    name: string;\n    constructor(name: string) {\n        this.name = name\n    };\n    eat(food: string) {\n        console.log(this.name + food);\n    }\n}\nvar c = new Cat('\u5C0F\u82B1');\nc.eat('\u8001\u9F20');\n\n"], ["bash\ninterface Animal {\n    name: string;\n    eat(str: string): void;\n}\nclass Dog implements Animal {\n    name: string;\n    constructor(name: string) {\n        this.name = name\n    };\n    eat() {\n        console.log(this.name + '\u5403\u7CAE\u98DF');\n    }\n}\nvar d = new Dog('\u5C0F\u9ED1');\nd.eat();\n\nclass Cat implements Animal {\n    name: string;\n    constructor(name: string) {\n        this.name = name\n    };\n    eat(food: string) {\n        console.log(this.name + food);\n    }\n}\nvar c = new Cat('\u5C0F\u82B1');\nc.eat('\u8001\u9F20');\n\n"]))(__makeTemplateObject([""], [""]));
