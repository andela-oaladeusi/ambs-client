import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router'; 
import routes from './routes';
import storeConfig from './js/stores/config';

const store = storeConfig();

ReactDOM.render(
    <Provider store={store} >
        <Router history={browserHistory} routes={routes}  />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
