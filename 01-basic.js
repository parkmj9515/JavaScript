// 한 줄 주석
/* 여러줄 주석
    주석의 사용 방법은 c와 동일 */
// console 객체 : 출력 장치에 로그 레벨 별로 로그를 출력하는 객체
// FATAL(심각한 에러) - ERROR(error) - WARN(warn) - NORMAL(log,info 두가지),DEBUG(debug)
console.info("정보 메세지 출력");
console.debug("디버그 메시지 출력");
console.log("일반 메세지");

console.warn("경고 메세지"); // 잠재적에러
console.error("에러 메세지");

// 출력할 내용들을 , 로 구분해서 나열
console.log("String",2024,true);

console.log("process,version.platform");

// ES는 객체기반 언어 
// 객체는 여러개의 데이터 + 데이터를 다를수있는 기능(메서드) . 으로 내부 속성과 메서드에 접근할수 있다
console.log(Math.PI);
console.log(Math.max(1,3,2,4,6));

console.log("--------------------------------------");
// var: es6 이전 > 변수의 범위 등 일관성이 없음
// let(가변 데이터 : mutable),const(불변데이터 : immutable , 상수 )
var testvar;
testvar= "var";
let testlet;
testlet = "let";
// const testconst;
// testconst = "const"; // const는 불변데이터 > 선언과 동시에 데이터 할당해야
const testconst = "const";
console.log("var,let,const:",testvar,testlet,testconst);

// 데이터 재할당
testvar = "var changed";
testlet = "let changed";
// testconst = "const changed"; // const는 재할당 불가

// ES는 Dynamic Type Language > 데이터 할당시 타입이 결정
                            //   > 타입과 무관하게 어떤 객체든 할당가능

// 특정 연산 작업 수행 이전에 데이터 타입을 체크 해야할 필요 있을수 있다
// > typeof 연산자
let v = "This is String";
console.log(v,">",typeof v);
v = 2024;
console.log(v,">",typeof v);
v= 10>8;
console.log("10>8?",v,">",typeof v);

/* let n1 = 5; // Literal
let n2 = Number(5); // Number 객체
console.log(typeof n1, typeof n2);

console.log(Math.round(Math.PI));
console.log(Math.min(7, 3, 5, 2, 9, 13), Math.max(7, 3, 5, 2, 9, 13));
console.log(Math.round(3.578), Math.floor(3.578)); */

