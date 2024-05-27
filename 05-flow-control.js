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




// 강사님 버전 연습문제

console.log("\n========== 구구단 for 버전");
for (let dan = 2; dan <= 9; dan ++) {
    console.log(dan + "단");
    for (let num = 1; num <= 9; num ++) {
        console.log(dan + " * " + num + " = " + dan * num);
    }
    console.log();
}

// console.log("\n========== 구구단 while 버전");
// let dan = 2;
// while(dan <= 9) 
// {
//     let num = 1;
//     console.log(dan + "단");
//     while (num <= 9) {
//         console.log(dan + " * " + num + " = " + dan * num);
//         num ++;
//     }
//     console.log();
//     dan++;
// }

//  연습문제2.
/*

*****
****
***
**
*

*/
//  - for문 버전 (*)
//  - while문 버전

// console.log("\n========== 역삼각형 for 버전");
// for (let count = 5; count > 0; count --) {
//     let stars = "";
//     for (let col = 1; col <= count; col ++) {
//         stars += "*";
//     }
//     console.log(stars);
// }

// console.log("\n========== 역삼각형 while 버전");
// let count = 5;
// while(count > 0) {
//     let stars = "";
//     let col = 1;

//     while (col <= count) {
//         stars += "*";
//         col ++;
//     }
//     console.log(stars);
//     count --;
// }
