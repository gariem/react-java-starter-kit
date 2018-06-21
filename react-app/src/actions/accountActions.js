import {EXECUTE_TRANSFER, VIEW_BALANCE_LIST} from './actionTypes';

export function fetchAccountList() {
    return function (dispatch, getState) {
        fetch("http://localhost:8080/api/bankAccounts")
            .then(response => response.json())
            .then(jsonData => {
                dispatch(setAccountList(jsonData._embedded.bankAccounts))
            })
    };
}

function setAccountList(bankAccounts) {
    return {
        type: VIEW_BALANCE_LIST,
        accountList: bankAccounts
    }
}

export function executeTransfer(request) {
    return function (dispatch, getState) {
        fetch('http://localhost:8080/api/operations/transferRequests', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(request)
        })
            .then(async response => {
                return Object.assign({}, {error: !response.ok}, await response.json());
            })
            .then(jsonData => {
                dispatch(setExecuteTransfer(jsonData))
            })
    };
}

export function setExecuteTransfer(transferResult) {
    return {
        type: EXECUTE_TRANSFER,
        transferResult
    }
}