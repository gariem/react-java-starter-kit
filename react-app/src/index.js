import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './routes';
import {Provider} from 'react-redux';

import configureStore from './store/configureStore';

import 'bootstrap/dist/css/bootstrap.css';

import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Routes/>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
