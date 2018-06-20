import React from 'react';
import {Button, ControlLabel, Form, FormControl, FormGroup} from 'react-bootstrap';
import PropTypes from "prop-types";
import {executeTransfer} from '../../actions/accountActions';
import {connect} from "react-redux";

class TransferForm extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    static propTypes = {
        afterSubmit: PropTypes.func
    };

    componentWillReceiveProps(nextProps) {
        console.log("nextProps: ", nextProps);
    }


    handleSubmit() {
        this.props.executeTransfer({});
    }

    render() {
        return (
            <div>
                <h4>Transfer between accounts:</h4>
                <Form>
                    <FormGroup controlId="source">
                        <ControlLabel>Source Account ID:</ControlLabel>{' '}
                        <FormControl type="text" placeholder="Enter an account ID"/>
                    </FormGroup>
                    <FormGroup controlId="destination">
                        <ControlLabel>Destination Account ID:</ControlLabel>{' '}
                        <FormControl type="text" placeholder="Enter an account ID"/>
                    </FormGroup>
                    <FormGroup controlId="amount">
                        <ControlLabel>Amount to transfer:</ControlLabel>{' '}
                        <FormControl type="number" placeholder="S/."/>
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