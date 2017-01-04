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

/*import { Map, List } from 'immutable';
import { createStore } from 'redux';
import { GuideInfoAction, EntitiesAction } from './actions';
import { guideReducer } from './reducer';
import { Injectable } from '@angular/core';

@Injectable()
export class GuideStore {
    private store = createStore(guideReducer);

    get guide(): any {
        let state = this.store.getState();
        return {
            guideInfo: state.guideInfo.toJS(),
            entities: state.entities.toJS(),
            steps: state.steps,
            entityMap: state.entityMap,
            stepOptions: state.stepOptions
        };
    }
    public getStore(): any {
        return this.store;
    }

    public dispatch(action: GuideInfoAction|EntitiesAction) {
        this.store.dispatch(action);
    }
}*/

