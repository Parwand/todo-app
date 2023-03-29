import { Todo } from "../models/todo.model";

export class TodosService {
   
    constructor() {}
    
    todos:Todo [] = [
        new Todo("Spring Boot", new Date("12 Dec 2012"), true),
        new Todo("Spring Securtiy", new Date("12 May 2013"), true),
        new Todo("Amazone web services", new Date("12 Dec 2018"), true),
        new Todo("JavaScript", new Date("12 Sept 2016"), true),
        new Todo("Angular Framework", new Date("12 Dec 2023"), false),
        new Todo("HTML", new Date("12 Feb 2020"), true)
      ]
    
    getTodos(): Todo [] {
    return this.todos;
    }

    deleteTodo(todo: Todo) {
        this.todos = this.todos.filter( (item) => item != todo);
    }

    addTodo(newTodo: Todo) {
        this.todos.push(newTodo);
    }

    search(key: string): Todo[] {
        const result:Todo [] = [];

        for(const todo of this.todos) {

            if(todo.text.toLocaleLowerCase().indexOf(key.toLocaleLowerCase()) != -1) {
                result.push(todo)

            }
        }
        return result;
    }
}