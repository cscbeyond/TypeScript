"use strict";
// 接口的扩展      接口可以继承接口
/*
interface Animal {
    eat(): void;
}

interface Person extends Animal {
    work(): void;

}

class Web implements Person {
    public name: string;
    constructor(name: string) {
        this.name = name;
    }
    eat() {
        console.log(this.name + '喜欢吃馒头');
    }
    work() {
        console.log(this.name + '写代码');
    }
}
var w = new Web('小李');
w.work();
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Programmer = /** @class */ (function () {
    function Programmer(name) {
        this.name = name;
    }
    Programmer.prototype.coding = function (code) {
        console.log(this.name + code);
    };
    return Programmer;
}());
var Web = /** @class */ (function (_super) {
    __extends(Web, _super);
    function Web(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        return _this;
    }
    Web.prototype.eat = function () {
        console.log(this.name + '喜欢吃馒头');
    };
    Web.prototype.work = function () {
        console.log(this.name + '写代码');
    };
    return Web;
}(Programmer));
var w = new Web('小李');
w.work();
w.coding('写ts代码');
