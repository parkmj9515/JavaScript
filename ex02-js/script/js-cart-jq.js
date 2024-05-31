function addItem() {
  //  ul#list 에 child li를 추가하는 함수
  // input#item의 value > 정제 
  let item = $("#item").val().trim();
  console.log(item);
  
  if(item.length > 0) {
  // 요소 만들기 > 콘텐츠 설정 > 속성 설정 > DOM 추가(부모에게 자식으로 추가)

  // li element생성 > 콘텐츠 설정
  let itemNode = $("<li>");   // > document.createElement 와 같다
      itemNode.text(item);    // > .inner.text 와 같음
  // toolbar(삭제버튼 포함)
  let toolbar = $("<div>");
  toolbar.css({display:"inline",
                 float: "right"}); // 여러 스타일 속성을 변경하려면 ES객체로 전달
  itemNode.append(toolbar);
  
  // 삭제 버튼 추가
  let delBtn = $("<button>"); // 요소 생성
  delBtn.text("삭제") // 콘텐츠 설정
  toolbar.append(delBtn);
  delBtn.on("click",evt => {
      let removeItem = $(evt.target.parentNode.parentNode);
      // JQuery는 부모를 몰라도 삭제 가능
      removeItem.remove();
  })
  
  // ul#list에 child로 추가
  $("#list").append(itemNode);

  // 입력내용을 비우고 focus를 부여
  $("#item").val("").focus();
  }
}
// 초기화
$(document).ready(evt =>{
  // 목록 비우기
  $("#list > li").remove();

  // 강사님 버전 목록비우기
  /* let cartItems = $("#list > li");

  for (let i = 0; i < cartItems.length; i++) {
      cartItems[i].remove(); */

  // 추가 버튼에 이벤트리스너 연결
  $("#btn-add").on("click", addItem);
})