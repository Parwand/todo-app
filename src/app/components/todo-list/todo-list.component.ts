import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';
import { TodosService } from 'src/app/services/todo.service';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos:Todo [];

  constructor(private todosService: TodosService) {}
  

  onDeleteTodo(todo: Todo) {
    this.todosService.deleteTodo(todo);
    this.todos = this.todosService.getTodos();
  }

  onAddTodo(newTodo: Todo) {
    this.todosService.addTodo(newTodo);
  }

  ngOnInit(): void {
    this.todos = this.todosService.getTodos();
  }

  onSearch(key:string) {
    this.todos = this.todosService.search(key);
    
  }
}
