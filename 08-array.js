// 배열 생성 방법1: new 키워드
const v1 = new Array(10);   // 10개짜리 배열
const v2 = new Array();     // 빈 배열
const v3 = new Array(2024,"String",true); // 초기값이 있을 때 어떤 객체들 다 들어간다(함수포함)

console.log(v1,v1.length, typeof v1);   //  type = object
console.log(v2,v2.length, typeof v2);   
console.log(v3,v3.length, typeof v3);

// 배열 생성 방법2: 리터럴로 생성 > 추천
const v4 = [];
const v5 = ["red","green","blue","yellow"];
console.log(v4,v4.length);
console.log(v5,v5.length);

// ES특성상 변수가 참조하는 객체의 type 체크가 필요
console.log(typeof v5);

// 주로 Array 판별 함수를 이용, 배열 여부를 판단
console.log("is V5 Array?", Array.isArray(v5));

// ES의 경우 객체 속성도 배열(맵) 처럼 사용 가능
const person = {
    name :"홍길동",
    age: 28
};
console.log(person.name,person.age);
console.log(person[`name`],person[`age`]);  // 객체의 속성을 배열처럼

// ES 배열은 인덱스 범위를 엄격하게 체크하지않음
// 인덱스 범위를 벗어난 접근도 허용

const v6 = [];
console.log(v6,v6.length);
v6[10] = 2024;

console.log(v6,v6.length); // 10개의 빈 아이템 인덱스 /총길이 11

console.log("------------------------------- 주요 메서드");
// 합치기 : concat
const veges = ["무","배추","쪽파"];
console.log(veges,veges.length);
const sources = ["소금","고추가룻","새우젓"];
console.log(sources,sources.length);

const ingr = veges.concat(sources);
console.log(ingr,ingr.length);

// JOIN : 배열 내부에 요소(아이템)를 한 문장으로 합친다
console.log(ingr,"> 김장재료:",ingr.join(", "));
