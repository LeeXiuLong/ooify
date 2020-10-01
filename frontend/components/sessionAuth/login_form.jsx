import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: "",
            password: "",
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
    }

    componentWillUnmount(){
        this.props.clearErrors();
    }

    handleChange(type){
        return e => this.setState({ [type]: e.currentTarget.value})
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.processForm(this.state)
            .then(()=> this.props.history.push("/"))
    }

    handleDemoSubmit(e){
        e.preventDefault();
        let demoUser = {
            email: "brewner@brewner.com",
            password: "password"
        }
        this.props.processForm(demoUser)
            .then(()=> this.props.history.push("/"))
    }

    render(){
        let errorItems = this.props.errors.map(error=>{
        return <li className="errorLogin">{error}</li>
        })
        return(
            <div className = "loginForm">
                <img src={window.black_logo}/>
                <hr/>
                <form className="actualForm" onSubmit={this.handleSubmit}>
                    <p className="topFormParagraph">To continue, log in to Ooify.</p>
                    <ul>
                        {errorItems}
                    </ul>
                    <div className="demoUserButton" onClick={this.handleDemoSubmit}>CONTINUE AS DEMO USER</div>
                    <h5 className="formSeperator">
                        <span>
                            OR
                        </span>
                    </h5>
                    <label>
                        <p className="inputLabel">Email address</p>
                        <input 
                            type="text"
                            value={this.state.email}
                            onChange={this.handleChange("email")}
                        />
                    </label>
                    <label>
                        <p className="inputLabel">Password</p>
                        <input 
                            type="password"
                            value={this.state.password}
                            onChange={this.handleChange("password")}
                        />
                    </label>
                    <button className="submitButton" type="submit">LOG IN</button>
                </form>
                <hr className="endOfForm"/>
                <p className="dontHaveAccount">Don't have an account?</p>
                <Link className="signupRedirect" to="/signup">SIGN UP FOR OOIFY</Link>
            </div>
        )
    }
}

export default LoginForm;