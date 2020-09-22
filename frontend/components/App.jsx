import React from 'react';
import { Link, Route } from 'react-router-dom';
import NavBar from './NavBar';
import StillWorking from './still_working';

const App = () => {
    return (
        <div>
            <NavBar />
            <Route path="/stillWorking" component={StillWorking}/>
        </div>
    )
}

export default App;