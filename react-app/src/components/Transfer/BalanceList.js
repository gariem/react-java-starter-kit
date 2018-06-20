import React from 'react';
import {Table} from 'react-bootstrap';
import PropTypes from "prop-types";

class BalanceList extends React.Component {

    static propTypes = {
        accounts: PropTypes.array.isRequired
    };

    render() {
        return (
            <div>
                <h4>My Accounts: </h4>
                <Table responsive hover>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Account Name</th>
                        <th>Balance</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.accounts.map((account, index) => (
                        <tr key={index}>
                            <td>{account.accountId}</td>
                            <td>{account.accountName}</td>
                            <td>{account.balance}</td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default BalanceList;