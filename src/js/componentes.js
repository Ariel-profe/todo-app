
import { todoList } from "..";
import { Todo } from "../classes";

//Referencias HTML
const divTodoList = document.querySelector('.todo-list');
const divFilters = document.querySelector('.filters');
const btnRemove = document.querySelector('.clear-completed');
const txtInput = document.querySelector('.new-todo');
const anchorFilters = document.querySelectorAll('.filtro');

export const createTodoHtml = ( todo ) => {
        const htmlTodo = `
                    <li class="${todo.completed ? "completed" : ''}" data-id="${todo.id}">
						<div class="view">
							<input class="toggle" type="checkbox" ${todo.completed ? 'checked' : ''} >
							<label>${todo.todo}</label>
							<button class="destroy"></button>
						</div>
						<input class="edit" value="Create a TodoMVC template">
					</li>`;

        const div = document.createElement('div');    
        div.innerHTML = htmlTodo;
        
        divTodoList.append(div.firstElementChild);

        return div.firstElementChild;
};

//Eventos 

txtInput.addEventListener('keyup', ( event ) => {

	if( event.keyCode === 13 && txtInput.value.length > 3){
		
		const newTodo = new Todo( txtInput.value);
		
		todoList.createTodo(newTodo);

		createTodoHtml(newTodo);

		txtInput.value = '';
	}
});

divTodoList.addEventListener('click', (event) => {
	const elementName = event.target.localName;
	const todoElement = event.target.parentElement.parentElement;
	const todoId = +todoElement.getAttribute('data-id');

	if(elementName === 'input'){
		todoList.toggleTodo(todoId);
		todoElement.classList.toggle('completed')
	};

	if(elementName === 'button'){
		todoList.deleteTodo(todoId);
		divTodoList.removeChild(todoElement)
	};
});

divFilters.addEventListener( 'click', (event) => {
	const filter = event.target.text;
	if(!filter) return;

	anchorFilters.forEach( elem => elem.classList.remove('selected'));
	event.target.classList.add('selected');

	for(const element of divTodoList.children){
		element.classList.remove('hidden');
		const completed = element.classList.contains('completed');

		switch (filter) {
			case 'Pendientes':
				completed ? element.classList.add('hidden') : null
				break;

			case 'Completados':
				!completed ? element.classList.add('hidden') : null
				break;
		
			default:
				break;
		}
	}

	
});

btnRemove.addEventListener( 'click', () => {

	todoList.deleteCompleted();

	for(let i = divTodoList.children.length - 1; i >= 0; i -- ){

		const element = divTodoList.children[i]
		
		element.classList.contains('completed') ? divTodoList.removeChild(element) : null
	};
});