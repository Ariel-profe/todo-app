import './styles.css';

import { Todo, TodoList } from './classes';
import { createTodoHtml } from './js/componentes';

export const todoList = new TodoList();

todoList.todos.map(todo => createTodoHtml(todo))


// const tarea = new Todo('Aprender React!!');

// todoList.createTodo(tarea);

// createTodoHtml(tarea)


