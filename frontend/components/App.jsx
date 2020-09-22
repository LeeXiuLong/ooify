import React from 'react';
import { Route } from 'react-router-dom';
import StillWorking from './still_working';
import SplashPage from './splash/splash_page'

const App = () => {
    return (
        <div>
            <Route path="/stillWorking" component={StillWorking}/>
            <Route exact path ="/" component={SplashPage}/>
        </div>
    )
}

export default App;