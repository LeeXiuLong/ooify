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
                <img src={window.white_logo} />
                <div>
                    <div className="nonAuthLinks">
                        <a href="https://github.com/LeeXiuLong/">GitHub</a>
                        <a href="https://www.linkedin.com/in/jourdan-ooi/">LinkedIn</a>
                        <a href="https://docs.google.com/document/d/1gavjNXqdXnFg-yQLHhO-P1cHD0XEqvVLsIXPkuG0MJ8/edit?usp=sharing">Resume</a>
                    </div>
                    <SplashAuthContainer />
                </div>
                
            </div>
        )
    }
}

export default SplashNavBar;