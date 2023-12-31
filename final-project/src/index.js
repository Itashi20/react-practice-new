import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import rootReducer from './redux/reducers';
import{createStore,compose, applyMiddleware} from  'redux'
import {Provider} from 'react-redux';
import thunk from 'redux-thunk'
import reportWebVitals from './reportWebVitals';
//detup for applying thunk to redux......
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const shopStore=createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={shopStore}>
    <App />
    </Provider>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
