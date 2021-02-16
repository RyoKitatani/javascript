// // alert('Hellow World') ;

// var hello = "Hello, World!" ;
// alert(hello) ;

// var int1 = 1 ;
// var int2 = -10 ;
// var float1 = 3.14 ;
// var str1 = 'JavaScriptを覚えよう' ;

// // alert(int1)
// // alert(3 + 4);
// // alert(8 - 5);
// // alert(2 * 6);
// // alert(10 /2);
// // alert(10 % 3);

// // alert('Hello' + 'World');

// var str1 = 'Hello';
// var str2 = 'World';
// alert(str1 + str2);


// var orange = 100;
// var apple = 100;

// if (orange < apple){
//     alert("みかんの値段がりんごより安い");
// } else if (orange == apple){
//     alert('みかんとりんごが同じ値段');
// } else {
//     alert('みかんの値段がりんごより高い');
// }

// var max = 100;
// var num = 1;
// var count = 0;

// // while文　繰り返す
// while (num < max) {
//     num = num * 2
//     count = count + 1;
// }

// alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');


// // for ( 初期値; 条件式; 増減値 ){
// //   繰り返し処理
// // }

// var i;
// var num = 0;

// for (i = 1; i < 11; i++) {
//     num = num + i ;
// }

// alert('1から10まで足し算した結果は' + num  + 'です');

var addString;
var alertString = addString("WebCamp");

alert(alertString);

function addString(strA){
    var addStr = "Hello" + strA;
    return addStr;
}

var promptStr = prompt('何か好きな文字を入力してください。');
alert(promptStr);


var user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください');
var js_hand = getJhand();
var judge = winLose(user_hand, js_hand);
alert('あなたが選んだ手は'+ user_hand + 'です\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は、' + judge + 'です。');

function getJhand (){
    var js_hand_num = Math.floor( Math.random() * 3);    
    var hand_name;
    
    if (js_hand_num == 0 ){
        js_hand = "グー";
    } else if (js_hand_num == 1 ){
        js_hand = "チョキ";
    } else if (js_hand_num == 2 ){
        js_hand = "パー";
    }
    
    return js_hand;
}

function winLose(user, js){
    var winLoseStr;
    
    if (user == "グー"){
      if(js =="グー"){
          winLoseStr = "あいこ";
      } else if (js =="チョキ"){
          winLoseStr = "勝ち";
      } else if (js =="パー"){
          winLoseStr = "負け";
      }
    } else if (user == "チョキ"){
      if(js =="グー"){
          winLoseStr = "負け";
      } else if (js =="チョキ"){
          winLoseStr = "あいこ";
      } else if (js =="パー"){
          winLoseStr = "勝ち";
      }
    } else if (user == "パー"){
      if(js =="グー"){
          winLoseStr = "勝ち";
      } else if (js =="チョキ"){
          winLoseStr = "負け";
      } else if (js =="パー"){
          winLoseStr = "あいこ";
      }
    }
    
    return winLoseStr
}

 