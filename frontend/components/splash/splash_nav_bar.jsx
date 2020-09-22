import React from 'react';
import { Link } from 'react-router-dom';
import SplashAuthContainer from '../splashAuth/splash_auth_container'

class SplashNavBar extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                Ooify
                <Link to="/stillWorking">Premium</Link>
                <Link to="/stillWorking">Help</Link>
                <Link to="/stillWorking">Download</Link>
                <SplashAuthContainer />
            </div>
        )
    }
}

export default SplashNavBar;