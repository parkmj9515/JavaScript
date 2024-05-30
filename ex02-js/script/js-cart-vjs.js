   // 초기화 코드
   window.addEventListener("load", evt => {
    // ul#list 로부터 자식 li모두 삭제
    let cartItems = document.querySelectorAll("#list > li");
 //    console.log(cartItems);
     
    /*
    let parent = document.getElementById("list");
    console.log(parent);
    // 자식 노드를 가지고 있는가
    console.log("자식을 가지고 있는가", parent.hasChildNodes());
    // 자식 목록 확인
    console.log("자식 목록: ",parent.children); */

     for(let i=0; i < cartItems.length; i++) {
         let parent = cartItems[i].parentNode;
         console.log(parent);

         parent.removeChild(cartItems[i]);  
     }

     // 추가 버튼(#btn-add)에 이벤트 처리함수 연결
     document.getElementById("btn-add").addEventListener("click", addItem);
     
 });

 function addItem() {
   // input#item 으로부터 value 속성 값 가져오기
   const itemInput = document.getElementById("item");
   const item = itemInput.value.trim();
   if(item.length > 0) {
     console.log("추가아이템: ",item);

     // 추가할 요소 생성(li생성)
     let itemNode = document.createElement("li");
     itemNode.innerText = item;  // 컨텐츠 추가
     let toolbar = document.createElement("div");
     toolbar.style.display = "inline";
     // toolbar.style.cssFloat = "right";
     let btnDel = document.createElement("button");
     btnDel.innerText = "삭제";
     btnDel.style.float = "right";
     
     toolbar.append(btnDel);
     itemNode.append(toolbar);

     // 부모찾기
     let container = document.getElementById("list");
     container.appendChild(itemNode); // 부모에 자식노드 추가

     // 입력된 데이터 삭제
     itemInput.value = "";
     // 입력창에 포커스맞추기
     itemInput.focus();
         // 아이템 항목 삭제
         btnDel.addEventListener("click", evt => {
             console.log(evt.target.parentNode.parentNode);
             let removeItem = evt.target.parentNode.parentNode;

             container.removeChild(removeItem);

         })
   }
 }