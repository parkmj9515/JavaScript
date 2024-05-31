 // 페이지 초기화
        // window.addEventListener("load",callback) 
        $(document).ready(event => {
            // console.log(document);
            // console.log($(document)); // => jQuery Wrapper객체

        function testAttribute() {
                // main-image 요소 선택
            let mainImage = $("#main-image");
            console.log(mainImage);

            // 속성 목록 확인 : getAttributeNames
            // JQuery 포장 Urwrapping
            console.log(mainImage[0].getAttributeNames());

            // title 속성 조회
            console.log("title:",mainImage.attr("title"));
            // title 속성 변경
            mainImage.attr("title",`제품: ${mainImage.attr("title")}`);

            // 프로덕츠 타이틀 속성 변경
            let subs = $(".sub-image");
            console.log(subs);
            for(let i=0; i < subs.length; i++) {
                $(subs[i]).attr("title","제품: " + $(subs[i]).attr("title"));
            }
        }
        // testAttribute();

            // JQuery 이벤트
            // #main-image에 클릭 이벤트 처리기 연결
            // 메서드를 이용한 이벤트 연결
            // $("#main-image").click(function(evt) {
                $("#main-image").click(evt => {
                // console.log(evt);
                // 자바스크립트 함수의 this는 해당 함수를 호출한 객체
                // let mainImage = this; // JQuery 이벤트 핸들러의 this = 
                let mainImage = evt.target;
                console.log(mainImage);

                alert("메인이미지 클릭");
            });

            let products = $(".sub-image");
            console.log(products);

            // 집합 객체도 루프를 돌리지않고 이벤트를 연결하면 하위요소 들에게
            // 공통적으로 연결된다

            // 가장 추천하는 이벤트 연결방법 : on
            products.on("click",evt => { 
                let obj = $(evt.target); // 이벤트 발생 객체
                // 클릭한 객체 (event.target)의 title과 src 속성을
                // #main-image로 복사
                $("#main-image").attr({
                    src: obj.attr("src"),
                    title: obj.attr("title")
                });

                $("#products-info > h2").text(obj.attr("title"));
                
            })
            $("#keyword").on("keypress",evt => {
                console.log(evt.keyCode);
                $("#btn-search").text($(evt.target).val()+" 검색");
            })
            
        });