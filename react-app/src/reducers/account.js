import {EXECUTE_TRANSFER, VIEW_BALANCE_LIST} from '../actions/actionTypes';

export default function account(state = {}, action) {
    switch (action.type) {
        case VIEW_BALANCE_LIST:
            return Object.assign({}, state, {
                actionType: action.type,
                accountList: action.accountList,
                error: false
            });

        case EXECUTE_TRANSFER:
            return Object.assign({}, state, {
                actionType: action.type,
                transferResult: action.transferResult,
                error: false
            });

        default:
            return state;
    }
}