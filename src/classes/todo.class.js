

export class Todo {

    static fromJson({id, todo, completed, createdAt}){
        const tempTodo = new Todo( todo );

        tempTodo.id        = id;
        tempTodo.completed = completed;
        tempTodo.createdAt = createdAt;

        return tempTodo;
    }

    constructor( todo ){

        this.todo = todo;
        this.id         = new Date().getTime();
        this.completed  = false;
        this.createdAt  = new Date();
    }

}