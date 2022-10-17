import { Todo } from "./todo.class";


export class TodoList {


    constructor(){
        // this.todos = [];
        this.loadLocalStorage();
    }

    createTodo( todo ){
        this.todos.push(todo);
        this.saveLocalStorage();
    };

    deleteTodo( id ){
        this.todos = this.todos.filter( todo => todo.id != id);
        this.saveLocalStorage();
    };

    toggleTodo( id ){
        this.todos.map( todo => {
           if(todo.id === +id){
            todo.completed = !todo.completed;
            this.saveLocalStorage();
           }
        });
    };

    deleteCompleted(){
        // this.todos = this.todos.filter(todo => todo.completed === false);
        this.todos = this.todos.filter(todo => !todo.completed);
        this.saveLocalStorage();
    };

    saveLocalStorage(){
        localStorage.setItem('todos', JSON.stringify(this.todos));
    };

    loadLocalStorage(){
        this.todos = (localStorage.getItem('todos') )
            ? JSON.parse(localStorage.getItem('todos')) 
            : [];

            // this.todos = this.todos.map( obj => Todo.fromJson(obj) )
            this.todos = this.todos.map( Todo.fromJson );
        };

}