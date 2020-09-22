import React from 'react';
import { Route } from 'react-router-dom';
import StillWorking from './still_working';
import SplashPage from './splash/splash_page';
import LoginFormContainer from './sessionAuth/login_form_container';
import SignUpFormContainer from '../components/sessionAuth/signup_form_container'

const App = () => {
    return (
        <div>
            <Route path="/stillWorking" component={StillWorking}/>
            <Route exact path ="/" component={SplashPage}/>
            <Route path = "/login" component={LoginFormContainer} />
            <Route path="/signup" component={SignUpFormContainer} />
        </div>
    )
}

export default App;