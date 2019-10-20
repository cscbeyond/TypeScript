/*
    装饰器:装饰器是一种特殊类型的声明，它能够被附加到类声明，方法，属性或参数上，可以修改类的行为。

    通俗的讲装饰器就是一个方法，可以注入到类、方法、属性参数上来扩展类、属性、方法、参数的功能。

    常见的装饰器有：类装饰器、属性装饰器、方法装饰器、参数装饰器

    装饰器的写法：普通装饰器（无法传参） 、 装饰器工厂（可传参）

    装饰器是过去几年中js最大的成就之一，已是Es7的标准特性之一
*/

//装饰器:普通装饰器（无法传参）
/*
function logClass(params: any) {
    console.log(params); //---->HttpClient这个类
    params.prototype.apiUrl = 'xxx'; // 动态扩展的属性
    params.prototype.run = function (){
        console.log('我是run方法');
    }
}

@logClass
class HttpClient {
    constructor() {

    }
    getData() {

    }
}
var http: any = new HttpClient();
console.log(http.apiUrl);
http.run(); // ---> "我是run方法"

*/
//装饰器: 装饰器工厂（可传参）
/*
function logClass(params: any) {
    return function (target: any) {
        console.log(target); // --->HttpClient
        console.log(params); //--->hello
        target.prototype.apiUrl = params;
    }
}
@logClass('www.chensc.club/api')
class HttpClient {
    constructor() {

    }
    getData() {

    }
}
var http:any = new HttpClient();
console.log(http.apiUrl);
*/

/*
    1.类装饰器
        下面是一个重载构造函数的例子
        类装饰器表达式会再运行时当做函数被调用，类的构造函数作为其唯一的参数
        如果类装饰器返回一个值，他会使用提供的构造函数来替换类的声明
*/
/*
function logClass(target: any) {
    console.log(target); // --->HttpClient
    return class extends target {
        apiUrl: any = '我是修改后的数据';
        getData() {
            console.log(this.apiUrl + '-----');
        }
    }
}

@logClass
class HttpClient {
    public apiUrl: string | undefined;
    constructor() {
        this.apiUrl = '我是构造函数里的apiUrl';
    }
    getData() {
        console.log(this.apiUrl);
    }
}
var http: any = new HttpClient();
http.apiUrl();
*/

/* 
    2.属性装饰器：
        属性装饰器表达式会再运行时当做函数被调用，传入下列2个参数：
            1.对于静态成员来说，是类的构造函数，对于实例成员是类的原型对象。
            2.成员的名字。

*/
function logClass(params: string) {
    return function (target: any) {
        console.log(target);
        console.log(params);
    }
}
// 属性装饰器
function logProperty(params: any) {
    return function (target: any, attr: any) {
        console.log(target);
        console.log(attr);
        target[attr] = params;

    }
}
@logClass('xxxx')
class HttpClient {
    @logProperty('www.chensc.club')
    public url: string | undefined;
    constructor() {
    }
    getData() {
        console.log(this.url);
    }
}
var http = new HttpClient();
http.getData();