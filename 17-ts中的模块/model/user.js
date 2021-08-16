"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = exports.UserClass = void 0;
var MysqlDb_1 = require("./modules/MysqlDb");
var UserClass = /** @class */ (function () {
    function UserClass() {
    }
    return UserClass;
}());
exports.UserClass = UserClass;
var UserModel = new MysqlDb_1.MysqlDb();
exports.UserModel = UserModel;
