import React from 'react';
import { Link } from 'react-router-dom';

class SplashAuth extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let auth;
        if(this.props.currentUser){
            auth = 
                <div className="authLinks">
                    <h1>|</h1>
                    <i class="far fa-user"></i>
                    <div className = "dropdown-trigger">
                        <button className="dropdown-button">Profile</button>
                        <div className = "placeholder"></div>
                        <ul className="dropdown-logout">
                            <div className="triangle"></div>
                            <li className="logout-list">
                                <Link className="account" to="/stillWorking">Account</Link>
                                <button onClick={this.props.logout}>Logout</button>
                            </li>
                        </ul>
                    </div>
                </div>
                    

        }else{
            auth = <div className="authLinks">
                <h1>|</h1>
                <Link to="/signUp">Sign up</Link>
                <Link to="/login">Log In</Link>
                </div>

        }
        return(
            <React.Fragment>
                {auth}
            </React.Fragment>
        )
    }
}

export default SplashAuth;