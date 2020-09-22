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
    }

    handleChange(type){
        return e => this.setState({ [type]: e.currentTarget.value})
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.processForm(this.state)
            .then(()=> this.props.history.push("/"))
    }

    render(){
        let errorItems = this.props.errors.map(error=>{
        return <li>{error}</li>
        })
        return(
            <div>
                <h1>Ooify</h1>
                <form onSubmit={this.handleSubmit}>
                    <p>To continue, log in to Ooify.</p>
                    <ul>
                        {errorItems}
                    </ul>
                    <label>
                        Email address or username
                        <br/>
                        <input 
                            type="text"
                            value={this.state.email}
                            onChange={this.handleChange("email")}
                        />
                    </label>
                    <br/>
                    <label>
                        Password
                        <br/>
                        <input 
                            type="password"
                            value={this.state.password}
                            onChange={this.handleChange("password")}
                        />
                    </label>
                    <br/>
                    <a href="/login">Forgot your password?</a>
                    <br/>
                    <button type="submit">LOG IN</button>
                </form>
                <p>Don't have an account?</p>
                <Link to="/signup">SIGN UP FOR OOIFY</Link>
            </div>
        )
    }
}

export default LoginForm;