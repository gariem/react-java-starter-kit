import React from 'react';
import {Form, FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';

class TaskForm extends React.Component {

    render(){
        return(
            <div>
                <h3>Add task: </h3>
                <Form inline>
                    <FormGroup controlId="taskDescription">
                        <ControlLabel>Description</ControlLabel>{' '}
                        <FormControl placeholder="Enter description..." />
                    </FormGroup>{' '}
                    <Button type="submit">Add</Button>
                </Form>
            </div>
        )
    }
}
export default TaskForm;