import React from 'react';
import {Button, Form, FormControl, FormGroup} from 'react-bootstrap';

class TaskForm extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        console.log("ola ke ase");
    }

    render() {
        return (
            <div>
                <h4>Add task: </h4>
                <Form inline>
                    <FormGroup controlId="taskDescription">
                        <FormControl placeholder="Enter description..."/>
                    </FormGroup>{' '}
                    <Button type="submit">Add</Button>
                </Form>
            </div>
        )
    }
}

export default TaskForm;