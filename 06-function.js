// 함수 선언문
// 선언
function sum(a,b) { // 함수이름(매개변수 목록)
    return a+b;
}

// 호출
console.log(sum(10,20));

// 함수 표현식 > 익명함수
// 함수도 객체다  (1급 시민이다)
//              > 다른 객체들과 동등한 권리와 지위를 가진다
//              > 변수에 할당 될수있다
const asum = function(a, b) { 
     console.log(typeof a, typeof b);
     return a + b;
}

console.log(typeof asum);
console.log(asum(10,20));

// 함수의 매개변수의 이해
// ES의 함수는 선언부에 선언된 매개변수의 개수와 맞지 않게 호출 해도 괜찮다
console.log(asum());

// 전달된 매개변수 x
function getNumberTotal(){
    // ES 특성상 전달되는 모든 매개변수는 arguments 함수 객체에 모두 전달
    // console.log("arguments:",arguments);
    // 전달받은 매게변수 전체를 합산
    let result =0;
    
    for(let i=0; i<arguments.length;i++){
        if(typeof arguments[i] === "number") { // 매개변수의 타입이 숫자일 때만 합산
        result += arguments[i];
    }
    }
    return result;
}
console.log(getNumberTotal(1,2,3,4,5));
console.log(getNumberTotal(1,2,"3",4,5)); //  결과값 3345 : 문자열로 바뀌면서 붙어서 나옴

// 함수는 객체 > 변수에 할당되거나 다른 함수에 매개변수로 전달 될 수 있다
function calculator(a,b, func)  { // func > 계산식 함수
    if(typeof func === "function") {
        console.log(func(a, b));
    } else {
        console.log("어쩔티비");
    }
}

calculator(10, 20);
calculator(10,20, function(v1, v2) {
    return v1+v2;
});

// 함수 보충
console.log("---------------------------------- 화살표 표기법") // 매개변수 목록 => 구현 내용

const f1 = function() {
    return "hello";
}
// 매개변수 x 리턴0
console.log(f1());
const f1_arrow = () => "hello";
console.log(f1_arrow());

// 매개변수o 리턴o
const f2 = function(name) {
    return "Hello," + name;
}
console.log(f2("홍길동"));
const f2_arrow = name => "Hello," + name;   // 매개변수 하나일경우 () 필요없음
console.log(f2_arrow("홍길동"));

// 매개변수 n개 리턴o
const f3 = function(a,b) {
    return a+b;
}
console.log(f3(10,20));
const f3_arrow = (a,b) => {    
     // 여러개의 로직 수행할 때 > 블록{}을 잡을 수 있다
     // 블록이 잡히면 return 문을 생략 할수없다
    console.log("화살표 함수");
    return a + b;
};

// 콜백 함수에 화살표 함수로 계산식 정의
calculator(10,20,(v1,v2) => v1+v2);
calculator(10,20,(v1,v2) => v1*v2);

// 콜백 함수 활용 > Array 추가 강의

