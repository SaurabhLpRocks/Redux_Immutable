import { List } from 'immutable';
import { createStore } from 'redux';
import { ITodoAction, TodoModel } from '../model/todo.model';
import { todoReducer } from '../reducer/todo.reducer';

export class TodoStore {
    store = createStore(todoReducer, List<TodoModel>());

    get todos(): Array<TodoModel> {
        return this.store.getState().toJS();
    }

    dispatch(action: ITodoAction) {
        this.store.dispatch(action);
    }
}