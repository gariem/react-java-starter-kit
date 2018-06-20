import {VIEW_BALANCE_LIST} from '../actions/actionTypes';

export default function account(state = {}, action) {
    switch (action.type) {
        case VIEW_BALANCE_LIST:
            return Object.assign({}, state, {
                actionType: action.type,
                todoList: action.accountList,
                error: false
            });

        default:
            return state;
    }
}