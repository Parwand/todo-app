import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {

  @Output() onAddTodo: EventEmitter<Todo> = new EventEmitter();

  onSubmit(add: NgForm) {
    this.onAddTodo.emit(add.value)
  }
}
