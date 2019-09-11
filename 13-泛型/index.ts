
/*
// 只能返回sting类型的数据
function getData(value: string): string {
    return value;
}
*/

/*
// 同时返回string类型和number类型 (代码冗余)
function getData1(value: string): string {
    return value;
}
function getData2(value: number): number {
    return value;
}
*/

/*
// 同时返回string类型和number类型   any可以解决这个问题
function getData(value: any): any {
    return value;
}
getData(123);
getData('Chen');
// any放弃了类型检查，传入什么，返回什么。比如传入number类型，必须返回number类型。传入string类型，必须返回sting类型。
*/

// 传入的参数类型和返回的参数类型可以不一致
// function getData(value: any): any {
//     return value;
// }


/* 
// 泛型：可以支持不特定的数据类型   要求，传入的参数和返回的参数一致
// <T>表示泛型，具体是什么类型，是调用这个方法的时候决定的。

function getData<T>(value: T): T{
   return value;
}
getData<number>(123);
getData<string>('aaa');
// getData<number>('123'); -----> 错误写法
*/
/*
function getData<T>(value: T): any {
    return value;
}
getData<number>(123);   //参数必须number
getData<string>('123');   //参数必须string
*/


// 泛型类：比如有个最小堆算法，需要同时支持返回数字和字符串两种类型。   通过类的泛型来实现
/*
class MinClass {
    public list: number[] = [];
    add(num: number) {
        this.list.push(num)
    }
    min(): number {
        var minNum = this.list[0];
        for (var i = 0; i < this.list.length; i++) {
            if (minNum > this.list[i]) {
                minNum = this.list[i];
            }
        }
        return minNum;
    }
}

var m = new MinClass();
m.add(2);
m.add(22);
m.add(23);
m.add(24);
m.add(3);
alert(m.min());
*/

// 类的泛型
/*
class minClass<T> {
    public list: T[] = [];
    add(value: T): void {
        this.list.push(value);
    }
    min(): T {
        var minNum = this.list[0];
        for (var i = 0; i < this.list.length; i++) {
            if (minNum > this.list[i]) {
                minNum = this.list[i];
            }
        }
        return minNum;
    }
}
var m1 = new minClass<number>(); // 实例化类，并且制定了类的T代表的类型是number
m1.add(1);
m1.add(3);
m1.add(2);
alert(m1.min());
var m2 = new minClass<string>(); // 实例化类，并且制定了类的T代表的类型是string
m2.add('a');
m2.add('c');
m2.add('b');
alert(m2.min());
*/

function getData<T>(value: T): T {
    return value;
}
getData(123);
getData<number>(123);


