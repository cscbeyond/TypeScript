"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MysqlDb = void 0;
// 定义一个操作mysql数据库的类         注意：要实现泛型接口    这个类也应该是一个泛型类
var MysqlDb = /** @class */ (function () {
    function MysqlDb() {
    }
    MysqlDb.prototype.add = function (info) {
        console.log(info);
        return true;
    };
    MysqlDb.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    MysqlDb.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    MysqlDb.prototype.get = function (id) {
        var list = [
            {
                title: 'xxx',
                desc: 'cc'
            }
        ];
        return list;
    };
    return MysqlDb;
}());
exports.MysqlDb = MysqlDb;
