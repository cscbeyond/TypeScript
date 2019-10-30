/**
 *  方法装饰器  接收三个参数：
 *  1.对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
 *  2.成员的名字
 *  3.成员的属性描述符
 */

//方法装饰器 一
/*
function get(params: any) {
    return function (target: any, methodName: any, desc: any) {
        console.log(target);
        console.log(methodName);
        console.log(desc);
        target.apiUrl = 'xxxx';
        target.run = function () {
            console.log('run');

        }
    }
}


class HttpClient {
    public url: any | undefined;
    constructor() { }
    @get('https://chensc.club')
    getData() {
        console.log(this.url);
    }
}

var http: any = new HttpClient();

console.log(http.apiUrl);
*/
/**
 *  方法装饰器  接收三个参数：
 *  1.对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
 *  2.成员的名字
 *  3.成员的属性描述符
 */

/*
// 方法装饰器 二
function get(params: any) {
   return function (target: any, methodName: any, desc: any) {
       console.log(target);
       console.log(methodName);
       console.log(desc);

       // 修改装饰器的方法    把装饰器方法里面传入的所有参数改为string类型

       // 1.保存当前的方法
       var oMethods = desc.value;
       desc.value = function (...args: any[]) {
           args.map((value) => {
               return String(value);
           })
           console.log(args);
           oMethods.apply(this, args);

       }
   }
}


class HttpClient {
   public url: any | undefined;
   constructor() { }
   @get('https://chensc.club')
   getData(...args:any[]) {
       console.log(args);  // --> ['123','xxxx']
       
       console.log('我是getdata里面的方法');
   }
}

var http: any = new HttpClient();

http.getData(123, 'xxxx');
*/

/**
 * 方法参数装饰器：
 *  参数装饰表达式在运行时当做函数被调用，可以使用参数装饰器为类的原型增加一些元素数据，三个参数：
 *      1.对于静态成员来说 是类的构造函数   对于实例成员来说 是类的原型对象
 *      2.方法的名字
 *      3.参数在函数参数列表中的索引
 * */
/*

function logParams(params: any) {
    return function (target: any, paramsName: any, paramsIndex: any) {
        console.log(params);
        console.log(target);
        console.log(paramsName);
        console.log(paramsIndex);

        target.apiUrl = params;

    }
}

class HttpClient {
    public url: any | undefined;
    constructor() { }
    getData(@logParams('xxxx') uuid: any) {
        console.log('我是getdata里面的方法');
    }
}

var http: any = new HttpClient();
http.getData(123456);
console.log(http.apiUrl);  // --> xxxx
*/

/**
 * 装饰器的执行顺序：
 *  1.属性装饰器
 *  2.方法装饰器
 *  3.方法参数装饰器
 *  4.类装饰器
 * 
 * 如果有多个同样的装饰器，先执行后面的
 */

function logClass1(params: string) { }

function logClass2(params: string) { }

function logAttribute(params?: string) { }

function logMethod(params?: string) {
    return function (target: any, attrName: any, desc: any) {

    }
}

function logParams1(params?: string) {
    return function (target: any, attrName: any, desc: any) {
        console.log('方法参数装饰器1');
    }
}

function logParams2(params?: string) {
    return function (target: any, attrName: any, desc: any) {
        console.log('方法参数装饰器2');
    }
}

@logClass1('http://www.chensc.club')
@logClass2('xxxx')
class HttpClient {
    @logAttribute()
    public apiUrl: string | undefined;
    constructor() { }
    @logMethod()
    getData() {
        return true;
    }
    setData(@logParams1() attr1: any, @logParams2() attr2: any) { }
}


