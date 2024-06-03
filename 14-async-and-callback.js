// callback 처리
function logicA() {
  console.log("begin logic A");

  // 비동기
  setTimeout(() => {
    console.log("\tcallbackA called");
    console.log("\tbegin logic B");

    // 비동기
    setTimeout(() => {
      console.log("\t\tcallbackB called");
    }, 2000);

    console.log("\tend logic B");
  }, 2000);

  console.log("end logic A");
}
// logicA();
//------------------------------------------------------------------------------------------------

// 비동기처리를 동기방식처럼 호출하기위해서 마련된 객체 > Promise객체
// Pendding상태 (대기), Fullfill(이행), Reject(실패)
function logicPromise() {
  console.log("begin logicPromise");

  // Promise 객체를 리턴
  return new Promise((resolve, reject) => {
    // Resolve 함수 > 현재 Promise를 Fullfill 상태로 이전시키는 역할
    // Reject 함수 > Reject 상태로 이전시키는 역할
    console.log("begin logicPromise");
    // 비동기
    setTimeout(() => {
      // 내부 로직 수행
      // resolve("RESOLVE");
      reject("REJECTED");
    }, 3000);

    console.log("end logicPromise");
  });
}

function testLogicPromise() {
  console.log("Test Logic Promise");

  logicPromise() // Promise를 반환하는 함수(객체)
    .then((value) => {
      // Promise 내부에서 resolve 함수로 전달해준 값(Fullfill 상태로)
      console.log("Promise resolve: ", value);
    })
    .catch((reason) => {
      // Promise 내부에서 reject 함수로 전달해 준 값 (reject 상태로)
      console.log("Promise reject: ", reason);
    });
}
// testLogicPromise();

//------------------------------------------------------------------------------------------------
// async / await
// > Promise를 손쉽게 사용하기 위한 키워드
// async 함수는 비동기 처리를 위해 Promise를 생성한다
async function f() {
  console.log("aync function");
  return 1;
}

// console.log(f());

// 가상 시나리오
// 네트워크 통신을 통해 데이터를 가져온다는 가정
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("서버로부터 가져온 데이터");
    }, 2000);
  });
}

async function processData() {
  console.log("데이터를 가져오는중...");
  try {
    // await 키워드: Promise가 해결될 때 까지 코드를 일시 중지
    //              > Promise가 해결되면 Promise의 결과값을 반환해 준다
    // await 키워드 함수를 사용을 위해 반드시 async가 붙어있어야한다
    const data = await fetchData();
    console.log("가져온 데이터: ", data);
  } catch (error) {
    console.error(error);
  }
}
processData();
