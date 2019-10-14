/*
命名空间和模块的区别：
    命名空间： 内部模块，主要用于组织代码，避免命名冲突
    模块：    ts的外部模块的简称，侧重代码的复用，一个模块里可能会有多个命名空间
*/
import { A, B } from './modules/a';


var d = new A.Dog('狼狗');
d.eat();



var c = new B.Cat('小花');
c.eat();
