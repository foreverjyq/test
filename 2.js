// a和b交换数据
var a = 10;
var b= 20;
var temp = a;
a = b;
b = temp;
console.log(a,b)
//  c和d交换数据
var c = 10;
var d = 20;
c = c+d;
d = c - d;
c = c - d;
console.log(c,d)
//e 和f 交换数据
var e = 10;
var f = 20;
[e,f] = [f,e];
console.log(e,f)
