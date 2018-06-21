import React from 'react';
import {Button, ControlLabel, Form, FormControl, FormGroup, Modal} from 'react-bootstrap';
import PropTypes from "prop-types";
import {executeTransfer} from '../../actions/accountActions';
import {connect} from "react-redux";
import {EXECUTE_TRANSFER} from "../../actions/actionTypes";

class TransferForm extends React.Component {

    initialState = {
        sourceAccountId: '',
        destinationAccountId: '',
        amount: 0,
        result: {
            error: false,
            message: '',
            display: false
        }
    };

    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleHide = this.handleHide.bind(this);
    }

    static propTypes = {
        afterSubmit: PropTypes.func
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.actionType === EXECUTE_TRANSFER) {
            let result = nextProps.transferResult;
            let state = {};
            if (result.error) {
                state = Object.assign(this.state, {
                    result: {
                        error: result.error,
                        message: result.message,
                        display: true
                    }
                });
                this.setState(state);
            } else {
                state = Object.assign(this.initialState, {result: {display: true, message: 'Transfer completed'}});
                this.setState(state);
                this.props.afterSubmit();
            }
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

    handleHide() {
        this.setState({result: {display: false}});
    }

    render() {
        return (
            <div>
                <h4>Transfer between accounts:</h4>
                <Form>
                    <FormGroup>
                        <ControlLabel>Source Account ID:</ControlLabel>{' '}
                        <FormControl name="sourceAccountId" type="text" value={this.state.sourceAccountId}
                                     onChange={this.handleChange.bind(this)}
                                     placeholder="Enter an account ID"/>
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Destination Account ID:</ControlLabel>{' '}
                        <FormControl name="destinationAccountId" type="text" value={this.state.destinationAccountId}
                                     onChange={this.handleChange.bind(this)}
                                     placeholder="Enter an account ID"/>
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Amount to transfer:</ControlLabel>{' '}
                        <FormControl name="amount" type="number" value={this.state.amount}
                                     onChange={this.handleChange.bind(this)}
                                     placeholder="S/."/>
                    </FormGroup>
                    <Button onClick={this.handleSubmit}>Transfer Now</Button>
                </Form>
                <Modal bsSize="small" show={this.state.result.display}>
                    <Modal.Body>
                        <h4>{this.state.result.error ? 'Error!' : 'Done!'}</h4>
                        <p>
                            {this.state.result.message}
                        </p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleHide}>Close</Button>
                    </Modal.Footer>
                </Modal>
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