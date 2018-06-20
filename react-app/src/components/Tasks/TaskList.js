import React from 'react';
import PropTypes from "prop-types";

class TaskList extends React.Component {

    constructor(props) {
        super(props);

        this.renderList = this.renderList.bind(this);
    }

    static propTypes = {
        taskList: PropTypes.array.isRequired
    };

    render() {
        let renderFunction =
            this.props.taskList &&
            this.props.taskList.length ?
                this.renderList : this.renderEmpty;

        return (
            renderFunction()
        )
    }

    renderList() {
        return (
            <div>
                <h4>Current tasks: </h4>
                <ul>
                    {this.props.taskList.map((item, index) => (
                        <li key={index}>{item.description}</li>
                    ))}
                </ul>
            </div>
        )
    }

    renderEmpty() {
        return (
            <div>No items found...</div>
        )
    }
}

export default TaskList;