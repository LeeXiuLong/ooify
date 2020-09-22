import React from 'react';

class LoginForm extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: "",
            password: "",
        }
    }

    handleChange(type){
        e => this.setState({ [type]: e.currentTarget.value})
    }

    handleSubmit(e){
        e.preventDefault();
        
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <p>To continue, log in to Spotify.</p>
                    <label>
                        Email address or username
                        <input 
                            type="text"
                            value={this.state.email}
                            onChange={this.handleChange("email")}
                        />
                    </label>
                    <label>
                        Password
                        <input 
                            type="password"
                            value={this.state.password}
                            onChange={this.handleChange("password")}
                        />
                    </label>
                    <button type="submit">LOG IN</button>
                </form>
                <p>Don't have an account?</p>
                <Link to="/signup">SIGN UP FOR SPOTIFY</Link>
            </div>
        )
    }
}

export default LoginForm;