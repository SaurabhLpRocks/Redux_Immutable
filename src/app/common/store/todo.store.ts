import { List } from 'immutable';
import { createStore } from 'redux';
import { ITodoAction, TodoModel } from '../model/todo.model';
import { todoReducer } from '../reducer/todo.reducer';
import { Injectable } from '@angular/core';

@Injectable()
export class TodoStore {
   private store = createStore(todoReducer);

    get todos(): Array<TodoModel> {
        return this.store.getState().toJS();
    }

    dispatch(action: ITodoAction) {
        this.store.dispatch(action);
    }
}


