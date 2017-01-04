import { TodoModel, ITodoAction } from '../model/todo.model';



export function addTodo(todo: TodoModel): ITodoAction {
    return {
        type: 'ADD_TODO',
        todo
    };
}

export function removeTodo(todo: TodoModel): ITodoAction {
    return {
        type: 'REMOVE_TODO',
        todo
    };
}


export function completeTodo(todo: TodoModel): ITodoAction {
    return {
        type: 'TOGGLE_TODO',
        todo
    };
}
