import React from 'react';
import { Link } from 'react-router-dom';
import SplashAuthContainer from '../splashAuth/splash_auth_container'

class SplashNavBar extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="splashNav">
                <img src="assets/white_logo.png" alt=""/>
                <div>
                    <div className="nonAuthLinks">
                        <Link to="/stillWorking">Premium</Link>
                        <Link to="/stillWorking">Help</Link>
                        <Link to="/stillWorking">Download</Link>
                    </div>
                    <SplashAuthContainer />
                </div>
                
            </div>
        )
    }
}

export default SplashNavBar;