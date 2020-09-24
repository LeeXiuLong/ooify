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
                        <Link to="/stillWorking">Download</Link>
                    </div>
                    <SplashAuthContainer />
                </div>
                
            </div>
        )
    }
}

export default SplashNavBar;