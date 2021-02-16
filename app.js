// alert('Hellow World') ;

var hello = "Hello, World!" ;
alert(hello) ;

var int1 = 1 ;
var int2 = -10 ;
var float1 = 3.14 ;
var str1 = 'JavaScriptを覚えよう' ;

// alert(int1)
// alert(3 + 4);
// alert(8 - 5);
// alert(2 * 6);
// alert(10 /2);
// alert(10 % 3);

// alert('Hello' + 'World');

var str1 = 'Hello';
var str2 = 'World';
alert(str1 + str2);


var orange = 100;
var apple = 100;

if (orange < apple){
    alert("みかんの値段がりんごより安い");
} else if (orange == apple){
    alert('みかんとりんごが同じ値段');
} else {
    alert('みかんの値段がりんごより高い');
}
var max = 100;
var num = 1;
var count = 0;

while (num < max) {
    num = num * 2
    count = count + 1;
}

alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');
