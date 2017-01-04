import { Component, OnInit } from '@angular/core';
import { TodoStore } from '../../common/store/todo.store';
// import { TodoModel, ITodoAction } from '../../common/model/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  // todo: TodoModel;
  constructor(private store: TodoStore) {
    // this.todo = new TodoModel();
  }

  ngOnInit() {
  }

}
