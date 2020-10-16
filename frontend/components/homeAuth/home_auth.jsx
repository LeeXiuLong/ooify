import React from 'react';
import { Link } from 'react-router-dom'

class HomeAuth extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            < div className = "authLinks" >
            <div className="dropdown-trigger">
                <button className="dropdown-button">Profile</button>
                <ul className="dropdown-logout">
                    <div className="triangle"></div>
                    <li className="logout-list">
                        <Link className="account" to={`/home/${this.props.currentUser.id}`}>Home Page</Link>
                        <button onClick={this.props.logout}>Logout</button>
                    </li>
                </ul>
            </div>
            </div >
        )
    }
}

export default HomeAuth;