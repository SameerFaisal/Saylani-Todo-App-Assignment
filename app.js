var list = document.getElementById("list");

function addTodo() {

    var todo_item = document.getElementById("todo-item");

    var li = document.createElement('li');
    li.setAttribute("class", "lead todoLi");
    var liText = document.createTextNode(todo_item.value);

    li.appendChild(liText);
    list.appendChild(li);
    todo_item.value = "";

    var editBtn = document.createElement('i');
    editBtn.setAttribute("class", "fa fa-pencil-square-o fa-lg icon");
    editBtn.setAttribute("style", "color: #bfc0c0");
    editBtn.setAttribute("onclick", "editItem(this)");

    var delBtn = document.createElement('i');
    delBtn.setAttribute("class", "fa fa-trash fa-lg trash icon");
    delBtn.setAttribute("style", "color: #bfc0c0");
    delBtn.setAttribute("onclick", "deleteItem(this)");
    li.appendChild(delBtn)
    li.appendChild(editBtn)
}

function deleteItem(e) {
    e.parentNode.remove();
}

function editItem(e) {
    var editValue = prompt("Enter the new value for todo", e.parentNode.firstChild.nodeValue);
    e.parentNode.firstChild.nodeValue = editValue;
}

function deleteAll() {
    list.innerHTML = "";
}