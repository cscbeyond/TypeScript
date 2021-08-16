"use strict";
// 把类作为参数来约束数据传入的类型
/*
class User {
    username: string | undefined;
    password: string | undefined;
}

class MysqlDb1 {
    add(user: User): boolean {

        console.log(user);
        return true;
    }
}

var u = new User();
u.username = '张三';
u.password = '123456';

var Db = new MysqlDb1();
Db.add(u);
*/
/*
class ArticleCate {
    title: string | undefined;
    desc: string | undefined;
    status: number | undefined;
}

class MysqlDb1 {
    add(info: ArticleCate): boolean {
        console.log(info.title);
        return true;
    }
}

var a = new ArticleCate();
a.title = '国内';
a.desc = '国内新闻';
a.status = 1;

var Db = new MysqlDb1();
Db.add(a);
*/
// 以上两段代码：每使用一次MysqlDb1，就得重新写一遍，导致代码重复
// 使用泛型 可以避免代码重复问题
/*
// 操作数据库的泛型类
class MysqlDb1<T>{
    add(info: T): boolean {
        console.log(info);
        return true;
    }
}

// 想给User表增加数据
// 1.定义一个User类，和数据库进行映射

class User {
    username: string | undefined;
    password: string | undefined;
}

var u = new User();
u.username = '张三';
u.password = '123456';

var Db = new MysqlDb1();

Db.add(u);

*/
// 2.定义一个ArticleCate类，和数据库进行映射
var ArticleCate = /** @class */ (function () {
    function ArticleCate(params) {
        this.title = params.title;
        this.desc = params.desc;
        this.status = params.status;
    }
    return ArticleCate;
}());
var MysqlDb1 = /** @class */ (function () {
    function MysqlDb1() {
    }
    MysqlDb1.prototype.add = function (info) {
        console.log(info);
        return true;
    };
    MysqlDb1.prototype.update = function (info, id) {
        console.log(info);
        console.log(id);
        return true;
    };
    return MysqlDb1;
}());
// 增加
// var a = new ArticleCate({
//     title: '分类',
//     desc: '123'
// });
// var Db = new MysqlDb1<ArticleCate>();
// Db.add(a);
//更新
var a = new ArticleCate({
    title: '分类111',
    desc: '456'
});
a.status = 0;
var Db = new MysqlDb1();
Db.update(a, 12);
