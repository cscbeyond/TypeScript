
/*
函数类型接口
interface ConfigFn {
    (value1: string, value2: string): string;
}

var setData: ConfigFn = function (value1: string, value2: string): string {
    return value1 + value2;
}
setData('name','张三');
*/

// 1.泛型接口
/*
interface ConfigFn {
    <T>(value1: T): T;
}

var getData: ConfigFn = function <T>(value: T): T {
    return value;
}
getData<string>('张三');
*/
// getData<string>(123); -->错误写法


// 2.泛型接口
interface ConfigFn<T> {
   (value1: T): T;
}

function getData<T>(value: T): T {
    return value;
}
var myGetData: ConfigFn<string> = getData;

myGetData('22');
// myGetData(22);  --->错误














