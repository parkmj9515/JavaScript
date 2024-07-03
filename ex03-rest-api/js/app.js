document.addEventListener("DOMContentLoaded", function () {
    const apiUrl = "http://localhost:8080/myportal/api/todos"; // API URL
    const todoList = document.getElementById("todo-list"); // TODO list element: ul#todo-list
    const newTodoInput = document.getElementById("new-todo"); // New TODO input element: input#new-todo
    const addTodoButton = document.getElementById("add-todo"); // Add TODO button element: button#add-todo

    // Add TODO to DOM
    //  새로운 todo item을 ul#todo-list에 추가하는 함수
    function addTodoToDOM(todo) {
        // li 노드 생성 > ul#todo-list 하위 노드로 추가
        const li = document.createElement("li");
        li.className = "todo-item";
        li.innerHTML = `
            <span>${todo.title}</span>
            <button onClick="deleteTodo(${todo.id})">Delete</button>
        `;
        todoList.appendChild(li);
    }

    // Fetch and display existing TODOs
    // GET /api/todos
    //  API로부터 todo list를 가져와서 화면에 표시하는 함수
    function fetchTodos() {
        //
        fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            //  리스트 비우기
            todoList.innerHTML = "";
            
            // 받아온 데이터를 li로 추가
            data.forEach(todo => {
                addTodoToDOM(todo);
            });        
            console.log(data)
        })
            .catch(error => console.error(error));
        }

    // Add new TODO
    //  새로운 todo를 추가하는 이벤트 핸들러 연결
    addTodoButton.addEventListener("click", () => {
        const title = newTodoInput.value.trim();
        if (title) { // 입력된 타이틀이 있다.
            // save API 호출
            fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title: title,
                    completed: false
                })
            })
            .then(response => response.json())
            .then(todo => {
                addTodoToDOM(todo);
                newTodoInput.value = ""; // 입력 필드 초기화
            })
            .catch(error => console.error('Error:', error));
        }
    });

    // Delete TODO
    //  특정 todo를 삭제하는 함수 (삭제 버튼의 클릭 이벤트 핸들러로 사용됨)
    window.deleteTodo = function (id) {
        // DELETE /api/todos/:id
        fetch(`${apiUrl}/${id}`, {
            method: "DELETE"
        })
        .then(() => {
            fetchTodos();
        })
        .catch(error => console.error(error));
    };

    // Initial fetch
    //  초기 로드 시 todo list를 가져옴
    fetchTodos();
});
