"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.B = exports.A = void 0;
var A;
(function (A) {
    var Dog = /** @class */ (function () {
        function Dog(theName) {
            this.name = name;
        }
        Dog.prototype.eat = function () {
            console.log(this.name + '吃狗粮');
        };
        return Dog;
    }());
    A.Dog = Dog;
    var Cat = /** @class */ (function () {
        function Cat(theName) {
            this.name = name;
        }
        Cat.prototype.eat = function () {
            console.log(this.name + '吃老鼠');
        };
        return Cat;
    }());
    A.Cat = Cat;
})(A = exports.A || (exports.A = {}));
var B;
(function (B) {
    var Dog = /** @class */ (function () {
        function Dog(theName) {
            this.name = name;
        }
        Dog.prototype.eat = function () {
            console.log(this.name + '吃狗粮');
        };
        return Dog;
    }());
    B.Dog = Dog;
    var Cat = /** @class */ (function () {
        function Cat(theName) {
            this.name = name;
        }
        Cat.prototype.eat = function () {
            console.log(this.name + '吃老鼠');
        };
        return Cat;
    }());
    B.Cat = Cat;
})(B = exports.B || (exports.B = {}));
