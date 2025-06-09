import { Component,OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  standalone:true,
  imports: [],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit{
  todos:Todo[] = []

  constructor(private todoService:TodoService){}

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(data => {
      this.todos = data.splice(0,100)
      console.log(this.todos)
    })
  }
}
