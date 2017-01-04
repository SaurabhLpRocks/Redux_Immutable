import { Component, OnInit, Input, ChangeDetectionStrategy, Inject } from '@angular/core';
import { TodoStore } from '../../common/store/todo.store';
import { TodoModel, ITodoAction } from '../../common/model/todo.model';
import { removeTodo } from '../../common/action/todo.action';
@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListTodoComponent implements OnInit {
  @Input() todos;
  constructor( @Inject(TodoStore) private store: TodoStore) { }

  ngOnInit() {
  }
  private removeTodo(todo) {
    this.store.dispatch(removeTodo(todo));
  }
}
