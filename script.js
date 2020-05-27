var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];

function renderTodos() {
    todoList.innerHTML = "";
    todoCountSpan.textContent = todos.length;
    for (var i=0; i<todos.length; i++){
        var li = document.createElement('li');
        li.innerText = todos[i];
        li.setAttribute("data-index", i);

        var button = document.createElement("button");
        button.innerText = "Complete";
        li.appendChild(button);
        button.addEventListener('click', function(event) {
            var todoIndex = parseInt(event.target.parentElement.getAttribute('data-index'));
            todos.splice(todoIndex, 1);
            renderTodos();

        });









        todoList.appendChild(li);
    }
};
renderTodos()


todoForm.addEventListener('submit', function (event){
    event.preventDefault();
    var newTodoText = todoInput.value;

    if(todoInput.value === ""){
        return
    }
    todos.push(todoInput.value);
    console.log(todoInput.value);

    todoInput.value = "";
    renderTodos()
});



// * Modify your `renderTodos()` function:

//   * When a new todo is created, add a `data-index` for each `li`.

//   * Generate a button that says "Complete" and append it to your `li`.

// * Add an event listener so that when a user clicks the Complete button, it accesses the `data-index` value and removes that todo element from the list.

// ## Hint

// * You can use `setAttribute` for `data-index` and `splice` to remove your todo from the list.
