import React from 'react';
import {Button, ControlLabel, Form, FormControl, FormGroup} from 'react-bootstrap';
import PropTypes from "prop-types";
import {executeTransfer} from '../../actions/accountActions';
import {connect} from "react-redux";
import {EXECUTE_TRANSFER} from "../../actions/actionTypes";

class TransferForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            sourceAccountId: '',
            destinationAccountId: '',
            amount: 0
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    static propTypes = {
        afterSubmit: PropTypes.func
    };

    componentWillReceiveProps(nextProps) {
        console.log("TransferForm.nextProps: ", nextProps);
        if (nextProps.actionType === EXECUTE_TRANSFER && nextProps.transferResult.operationResult) {
            this.props.afterSubmit();
            this.setState({sourceAccountId: '', destinationAccountId: '', amount: 0});
        }
    }

    handleChange(event) {
        let fieldName = event.target.name;
        let fieldValue = event.target.value;
        this.setState({...this.state, [fieldName]: fieldValue})
    }

    handleSubmit() {
        this.props.executeTransfer(this.state);
    }

    render() {
        return (
            <div>
                <h4>Transfer between accounts:</h4>
                <Form>
                    <FormGroup>
                        <ControlLabel>Source Account ID:</ControlLabel>{' '}
                        <FormControl name="sourceAccountId" type="text" defaultValue={this.state.origin}
                                     onChange={this.handleChange.bind(this)}
                                     placeholder="Enter an account ID"/>
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Destination Account ID:</ControlLabel>{' '}
                        <FormControl name="destinationAccountId" type="text" defaultValue={this.state.destination}
                                     onChange={this.handleChange.bind(this)}
                                     placeholder="Enter an account ID"/>
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Amount to transfer:</ControlLabel>{' '}
                        <FormControl name="amount" type="number" defaultValue={this.state.amount}
                                     onChange={this.handleChange.bind(this)}
                                     placeholder="S/."/>
                    </FormGroup>
                    <Button onClick={this.handleSubmit}>Transfer Now</Button>
                </Form>
            </div>
        )
    }
}

const mapState = state => {
    return {
        transferResult: state.account.transferResult || {},
        actionType: state.account.actionType
    }
};

const mapDispatch = {
    executeTransfer
};

export default connect(mapState, mapDispatch)(TransferForm);