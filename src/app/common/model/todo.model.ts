// export interface ITodo {
//     id: number;
//     text: string;
//     isCompleted: boolean;
// };
export class TodoModel {
    id: number;
    text: string;
    isCompleted: boolean;
    constructor(text?: string) {
        this.text = text || '';
        this.isCompleted = false;
        this.id = Math.random();
    }
};
export interface ITodoAction {
    type: string;
    todo: TodoModel;
}

