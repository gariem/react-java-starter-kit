import React from 'react';
import BalanceList from "./BalanceList";
import TransferForm from "./TransferForm";
import {fetchAccountList} from '../../actions/accountActions';
import {connect} from "react-redux";
import {VIEW_BALANCE_LIST} from "../../actions/actionTypes";

class Transfer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            accounts: []
        }
    }

    componentDidMount() {
        this.props.fetchAccountList();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.actionType === VIEW_BALANCE_LIST) {
            this.setState({accounts: nextProps.accountList});
        }
    }

    render() {
        return (
            <div>
                <BalanceList accounts={this.state.accounts}/>
                <TransferForm afterSubmit={this.props.fetchAccountList}/>
            </div>
        )
    }
}

const mapState = state => {
    return {
        accountList: state.account.accountList ,
        actionType: state.account.actionType
    }
};

const mapDispatch = {
    fetchAccountList
};

export default connect(mapState, mapDispatch)(Transfer);