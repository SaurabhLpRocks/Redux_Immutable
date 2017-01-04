import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { TodoStore } from '../../common/store/todo.store';
import { TodoModel, ITodoAction } from '../../common/model/todo.model';
import { addTodo } from '../../common/action/todo.action';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent implements OnInit {
  todo: TodoModel;
  todos: Array<TodoModel>;
  id: number = 1;
  constructor( @Inject(TodoStore) private store: TodoStore) {
    this.todo = new TodoModel();
    this.todos = this.store.todos;
  }

  ngOnInit() {
  }
  private addTodo() {
    if (this.todo.text.length) {
      this.store.dispatch(addTodo(new TodoModel(this.todo.text)));
      this.todos = this.store.todos;
      this.todo.text = '';
      console.log(this.todos);
    }
  }
}

