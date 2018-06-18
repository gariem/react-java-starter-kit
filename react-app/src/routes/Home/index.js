import React from 'react';
import Layout from '../../components/Layout';
import Dashboard from '../../components/Dashboard';

class Home extends React.Component {
    render(){
        return(
            <Layout>
                <Dashboard />
            </Layout>
        )
    }
}

export default Home;