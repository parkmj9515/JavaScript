// 연습문제 1
// 구구단 2~9단까지 출력
// for문 버전 , while문 버전

// for문
/*for(let i = 2; i <= 9; i++) { 
        console.log(i + '단'); 
  for(let j = 1; j <= 9; j++) { 
        console.log(i + ' * ' + j + ' = ' + (i*j));  
    }
}  

// while문
var i = 2;
    while(i <= 9){
      var j = 1;
      while(j <= 9){
       console.log(i + "X" + j + "=" + i*j);
        j++;
      }
      i++;
    } */

// 연습문제 2
// * 삼각형만들기
// for문
// for (var i = 5; i >= 1; i--){
//     console.log("*".repeat(i));
//  }

// while 문
let i = 5;
while (i >= 1) {
    console.log('*'.repeat(i));
    i--;
}