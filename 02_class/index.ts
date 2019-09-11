var flag: boolean = true;
// flag = 123; 错误写法
flag = false; //正确写法
console.log(flag);


var num: number = 123;
num = 456;
// num = '123'; -->错误写法
console.log(num);


// var str: string = 'this is ts';
// // str  = 123; -->错误写法
// // str = true; -->错误写法
// str = 'hahahha';

// var arr = ['1', '2'];

// var arr: number[] = [11, 22, 33];  //-->数组里面都是number类型

// var arr: Array<number> = [11, 22, 33];

// let arr: [number, string] = [1111,'2222']; //也是元祖类型的一种
// let arr: [number, string] = [1111,'2222']; //也是元祖类型的一种

// let an: any = true;
// an = '123';
// function run(): void {
//     console.log('run');
//     return 'aaa'; 
// 报错，已经声明返回void ，就不要返回正常的值
// }
// var a: undefined;
// a = null;
// a = never;  error

// var b : never;
// b  = undefined;

function getInfo(name: string): string;
function getInfo(age: number): number;
// function getInfo(str: any): any {
//     if (typeof str == 'string') {
//         return `我叫：${str}`;
//     } else {
//         // return str + 10;
//         return `我的年龄是：${str}`;
//     }
// }
function getInfo(str: any): any {
    return str;
}

setTimeout(() => {
    console.log('run');
}, 200);