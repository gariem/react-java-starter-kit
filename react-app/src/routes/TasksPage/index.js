import React from 'react';
import Tasks from "../../components/Tasks";
import Layout from '../../components/Layout';

class TasksPage extends React.Component {

    render() {
        return (
            <Layout>
                <Tasks/>
            </Layout>
        )
    }
}

export default TasksPage;