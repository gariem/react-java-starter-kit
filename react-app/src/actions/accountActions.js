import {VIEW_BALANCE_LIST} from './actionTypes';

export function fetchAccountList() {
    return function (dispatch, getState) {

        fetch("http://localhost:8080/api/bankAccounts")
            .then(response => response.json())
            .then(jsonData => {
                dispatch(setAccountList(jsonData._embedded.bankAccounts))
            })
    };
}

function setAccountList(accountList) {
    return {
        type: VIEW_BALANCE_LIST,
        accountList
    }
}