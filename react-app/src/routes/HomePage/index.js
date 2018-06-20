import React from 'react';
import Layout from '../../components/Layout';
import Dashboard from '../../components/Dashboard';

class HomePage extends React.Component {
    render(){
        return(
            <Layout>
                <Dashboard />
            </Layout>
        )
    }
}

export default HomePage;