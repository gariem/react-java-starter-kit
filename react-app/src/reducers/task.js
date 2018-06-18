import {VIEW_TASK_LIST} from "../actions/actionTypes";

export default function data(state = {}, action) {
    switch (action.type) {
        case VIEW_TASK_LIST:
            return Object.assign({}, state, {
                actionType: action.type,
                todoList: action.taskList,
                error: false
            });

        default:
            return state;
    }
}