// Number
let n1 = 2024; // Literal (소스에 직접 입력)]
let n2 = Number(2024);
console.log(n1,n2);
console.log(typeof n1,typeof n2);

// 수치데이터 입력하는 방법
const hex = 0xff0000; // 16진수 > 0x
const oct = 0o10; // 8진수 > 0o
const bin = 0b1101; // 2진수 > 0b

console.log(hex,oct,bin);

// Math 객체
console.log(Math.round(Math.PI)); // round : 반올림
console.log(Math.min(1,5,3,2,6,7),Math.max(1,5,3,2,6,7));   // 최소값,최대값
console.log(Math.round(3.567),Math.trunc(3.5567),Math.floor(3.567));    // 반올림, 버림,버림

console.log("-----------------------");
// casting
// ES 주로 문자열로 전달되는 파라미터를 숫자 형태로 변환해야 하는 경우가 많음
// 데이터 형 변환이 필요 > parser 계열 함수

console.log(parseInt("011"),">",typeof("011"));
console.log(parseInt("011",2)); // 011을 2진수 정수형으로 분석
console.log(parseInt("ff0000",16)); // ff0000을 16진수 정수형으로 분석
console.log(parseInt("1101",8)) // 1101을 8진수 정수형으로 분석

console.log(parseInt("123.456"),parseInt(123.456));   // 123.456 > 정수형 123으로 분석
console.log(parseFloat("123.456")); // 123.456 > 실수형태이므로 그대로 출력


let v = parseInt("a123.456");   // 변환할수 없는 형태의 데이터 변환 > NaN(Not a Number)
console.log(v,">",typeof v);
console.log(v+2024); // NaN가 산술연산에 포함 > NaN > 변수 혹은 연산 결과 NaN인지 확인 필요
console.log(isNaN(v+2024));
