# chemjs

#chemistry
所需环境版本nodejs，依赖lzstring 

let p = require('./chem.ele');

主要methods:

1.根据原子序数或者英文元素缩写创建一个元素对象：

p.e(number||string)： return object;

let h = p.e(1);

//let h = p.e('h');

//let h = p.e('H')

=>{
    symbol:'H',
    cname:'氢',
    cnamespell:'qing'
    ...
}

元素对象自带一个方法,获取元素的属性，中文或者英文全称:

h.get(string)： return string|number;

eg:

h.get('原子序数')   => 1

2.获取某个系的元素：

p.getAll(string): return array

eg:

p.getAll('錒系') =>[{...},{...}]
