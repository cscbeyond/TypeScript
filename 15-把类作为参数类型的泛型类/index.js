"use strict";
/*
    定义一个User类，这个类的作用就是映射数据库字段
    然后定义一个MysqDb的类，这个类用于操作数据库
    然后把User类作为参数传入到MysqlDb中
*/
// var user = new User({
//     username: '张三',
//     password: '123456'
// })
// var Db = new MysqlDb();
// Db.add(user);
/*
class User {
    username: string | undefined;
    password: string | undefined;
}

class MysqlDb {
    add(user: User): boolean {
        return true;
    }
}

var u = new User();
u.username = '张三';
u.password = '123456';

var DB = new MysqlDb();
DB.add(u);
*/
/*
class ArticleCate {
    title: string | undefined;
    desc: string | undefined;
    status: number | undefined;
}

class MysqlDb {
    add(info:ArticleCate):boolean {
        console.log(info);
        return true;
    }
}
var a = new ArticleCate();
a.title = '国内';
a.desc = '国内新闻';
a.status = 1;

var Db = new MysqlDb();
Db.add(a);
*/
// 操作数据库的泛型类
var MysqlDb = /** @class */ (function () {
    function MysqlDb() {
    }
    MysqlDb.prototype.add = function (info) {
        console.log(info);
        return true;
    };
    MysqlDb.prototype.update = function (info, id) {
        console.log(info);
        console.log(id);
        return true;
    };
    return MysqlDb;
}());
// 想给User表增加数据
//1.定义一个User类和数据库进行映射
// class User{
//     username: string | undefined;
//     password:string | undefined;
// }
// var u = new User();
// u.username = '张三';
// u.password = '123456';
// var Db = new MysqlDb();
// Db.add(u);
//2.定义一个文章分类的类 和数据库进行映射
var ArticleCate = /** @class */ (function () {
    function ArticleCate(params) {
        this.title = params.title;
        this.desc = params.desc;
        this.status = params.status;
    }
    return ArticleCate;
}());
var a = new ArticleCate({
    title: '分类',
    desc: '1111'
});
//类当做参数的泛型类
var Db = new MysqlDb();
Db.add(a);
a.status = 0;
Db.update(a, 12);
