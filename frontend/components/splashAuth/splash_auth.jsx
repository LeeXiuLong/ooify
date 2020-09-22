import React from 'react';
import { Link } from 'react-router-dom';

class SplashAuth extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let auth;
        if(this.props.currentUser){
            auth = <div>
                        <h6>{this.props.currentUser.name}</h6>
                        <Link to="/stillWorking">Account</Link>
                        <button onClick={this.props.logout}>Logout</button>
                    </div>
        }else{
            auth =  <div>
                        <Link to="/signUp">Sign up</Link>
                        <Link to="/login">Log In</Link>
                    </div>
        }
        return(
            <div>
                {auth}
            </div>
        )
    }
}

export default SplashAuth;