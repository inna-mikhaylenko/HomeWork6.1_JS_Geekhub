var mainButton = document.getElementById('add-button');
mainButton.addEventListener('click', addNewTodo, false);

function delTodo() {
	var rowTodo = this.parentNode;
	var listTodo = rowTodo.parentNode;
	listTodo.removeChild(rowTodo);	
}

var todoList, newTodo, delButton;
function addNewTodo() {
    var mainTodoValue = document.getElementById('main-todo').value;
    if (mainTodoValue.length) {
		todoList = document.getElementById('todo-list');
		newTodo = document.createElement('li');
		newTodo.innerHTML = '<input type="checkbox" class="check-todo" /><p>' + mainTodoValue + '</p><input type="button" class="del-button" value="Delete" />';
		addEventListeners(newTodo);
		todoList.appendChild(newTodo);
		document.getElementById('main-todo').value = '';
	}
}

function addEventListeners(row) {
    Array.prototype.forEach.call(row.getElementsByClassName('del-button'), function(delButton) {
			delButton.addEventListener('click', delTodo, false);
	});
	Array.prototype.forEach.call(row.getElementsByClassName('check-todo'), function(checkBox) {
		checkBox.addEventListener('change', checkTodo, false);
	});
}

function checkTodo() {
    if (this.checked == true) {
	    this.nextSibling.style.textDecoration = 'line-through';
	} else {
	    this.nextSibling.style.textDecoration = 'none';
	}
}