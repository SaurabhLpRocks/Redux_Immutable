// export interface ITodo {
//     id: number;
//     text: string;
//     isCompleted: boolean;
// };
export class TodoModel {
    id: number;
    text: string;
    isCompleted: boolean;
};
export interface ITodoAction {
    type: string;
    todo: ITodo;
}

