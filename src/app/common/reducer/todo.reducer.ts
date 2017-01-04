import { List } from 'immutable';
import { TodoModel, ITodoAction } from '../model/todo.model';

export const todoReducer = (state: List<TodoModel>, action: ITodoAction) => {
    switch (action.type) {
        case 'ADD_TODO':
            return state.push(action.todo);
        case 'REMOVE_TODO':
            return state.delete(findIndexById());
        case 'UPDATE_TODO':
            return state.update(findIndexById(), (todo) => {
                return {
                    id: todo.id,
                    text: todo.text,
                    isCompleted: todo.isCompleted
                };
            });
        case 'TOGGLE_TODO':
            return state.update(findIndexById(), (todo) => {
                return {
                    id: todo.id,
                    text: todo.text,
                    isCompleted: !todo.isCompleted
                };
            });
        default:
            return state;
    }
    function findIndexById() {
        return state.findIndex((todo) => todo.id === action.todo.id);
    }
};
