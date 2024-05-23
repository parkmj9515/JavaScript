// boolean (true or false)
// - 비교연산의 결과
// - 논리연산의 결과
// - 논리 조합 : AND(&&), OR(||), NOT(!)
let v1; // undefined 상태
let v2 = null; // 객체
console.log(typeof v1, typeof v2);  // v1= undefined, v2= object
// undefined = 비어 있는것: 할당 자체가 되지 않은것 - 자바스크립트가 사용
// null = console.log((alse && "Test);비어 있는것: null이라는 객체가 할당된  ( - 개발자가 직접 할당한" ;
console.log(v2,typeof v2, v2 == null);  // null 체크: 객체 == null

v2 = undefined; // 개발자가 임의로 undefined 상태로 설정하기도 한다
console.log(v2,typeof v2,v2==undefined);    // undefined체크

// == : 타입과 상관없이 '값'만 비교
// === : 타입,값을 함께 비교

console.log(123 == "123");  // true 값비교
console.log(123 === "123"); // false > number,String 값과 타입을 함께 비교

// number,String의 값이 있으면 true 없으면 false를 반환
console.log(Boolean("JavaScript"),Boolean("")); // string
console.log(Boolean(2024),Boolean(0));  // number

// Short-Circuit 선택 기법
// 주로 Front-End 선택적 랜더링
console.log(true && "Test");    // Test
console.log (false && "Test");  // false

console.log(true || "Test");    // true
console.log(false || "Test");   // Test
