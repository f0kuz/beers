import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './js/app/views/App';
import { Provider } from 'react-redux';
import { store } from './js/store/store';
import registerServiceWorker from './js/app/service/registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.css';
import 'normalize.css';
import './styles/index.css';
import './styles/App.css';


ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
