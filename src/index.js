import React from 'react';
import { render } from 'react-dom'
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

render((
    <Router>
        <App />
    </Router>
)
, document.getElementById('root'));
registerServiceWorker();
