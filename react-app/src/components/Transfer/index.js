import React from 'react';
import BalanceList from "./BalanceList";
import TransferForm from "./TransferForm";
import {fetchAccountList} from '../../actions/accountActions';
import {connect} from "react-redux";

class Transfer extends React.Component {

    componentDidMount() {
        this.props.fetchAccountList();
    }

    render() {
        return (
            <div>
                <BalanceList accounts={this.props.accountList}/>
                <TransferForm afterSubmit={this.props.fetchAccountList}/>
            </div>
        )
    }
}

const mapState = state => {
    return {
        accountList: state.account.accountList || [],
        actionType: state.account.actionType
    }
};

const mapDispatch = {
    fetchAccountList
};

export default connect(mapState, mapDispatch)(Transfer);