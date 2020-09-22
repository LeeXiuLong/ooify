import React from 'react';
import ReactDOM from 'react-dom';
import { login, logout, signup } from './actions/session_actions';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", ()=>{
    const root = document.getElementById("root");
    const store = configureStore();

    //For Testing
    window.login = login;
    window.logout = logout;
    window.signup = signup;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    //EndTesting

    ReactDOM.render(<Root store={store} />, root);
})