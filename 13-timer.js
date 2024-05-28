// timer 관련 함수
// 특정 시간이 흐른 후에 특정기능을 수행
// settimeout(() => {}, milliseconds);

//   timerTest();
function timerTest() {
    console.log("3초후에 인사합니다");
    setTimeout(() =>{
        console.log("안녕하세요");
       },3000);   //3초
}

// 특정 시간간격마다 특정 함수 실행
// setInterval(()   => {}, 실행간격(milliseconds))
intervalTest();
function intervalTest(){
    let count = 10;
    console.log("10초 후에 타이머가 종료됩니다");
    let timer = setInterval(() => {
        console.log(count --);
    if(count <= 0) {
        console.log("타이머를 종료합니다");
        clearInterval(timer);     // 타이머 제거
    }
},1000);    
}

