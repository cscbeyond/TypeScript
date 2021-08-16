"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
命名空间和模块的区别：
    命名空间： 内部模块，主要用于组织代码，避免命名冲突
    模块：    ts的外部模块的简称，侧重代码的复用，一个模块里可能会有多个命名空间
*/
var animal_1 = require("./modules/animal");
var d = new animal_1.A.Dog('狼狗');
d.eat();
var c = new animal_1.B.Cat('小花');
c.eat();
