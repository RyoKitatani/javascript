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

// while文　繰り返す
while (num < max) {
    num = num * 2
    count = count + 1;
}

alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');


// for ( 初期値; 条件式; 増減値 ){
//   繰り返し処理
// }

var i;
var num = 0;

for (i = 1; i < 11; i++) {
    num = num + i ;
}

alert('1から10まで足し算した結果は' + num  + 'です');

var addString;
var alertString = addString("WebCamp");

alert(alertString);

function addString(strA){
    var addStr = "Hello" + strA;
    return addStr;
}




