import React from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: "",
            password: "",
            name: "",
            month: "",
            year: "",
            day: "",
            gender: "",
            confirmEmail: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    handleChange(type){
        return e => this.setState({ [type]: e.currentTarget.value })
    }

    handleSubmit(e){
        e.preventDefault()
        let birthdate = this.state.month + this.state.day + this.state.year;
        let userSubmit={
            email: this.state.email,
            password: this.state.password,
            name: this.state.name,
            birthdate,
            gender: this.state.gender,
        }
        this.props.processForm(userSubmit)
            .then(() => this.props.history.push("/"));
    }
    render(){
        let errorItems = this.props.errors.map(error => {
            return <li class="error">{error}</li>
        })

        return(
            <div>
                <h4>Ooify</h4>
                <h2>Sign up for free to start listening.</h2>
                <h5>Sign up with your email address</h5>
                <br/>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        What's your email?
                        <br/>
                        <input 
                            type="text"
                            value={this.state.email}
                            onChange={this.handleChange("email")}
                        />
                        {errorItems[1]}
                    </label>
                    <br/>
                    <label>
                        Confirm Your Email
                        <br/>
                        <input 
                            type="text"
                            value={this.state.confirmEmail}
                            onChange={this.handleChange("confirmEmail")}
                        />
                    </label>
                    <br/>
                    <label>
                        Create a password
                        <br/>
                        <input 
                            type="password"
                            value={this.state.password}
                            onChange={this.handleChange("password")}
                        />
                        {errorItems[2]}
                    </label>
                    <br/>
                    <label>
                        What should we call you?
                        <br/>
                        <input
                            type="text"
                            value={this.state.name}
                            onChange={this.handleChange("name")}
                        />
                    </label>
                    {errorItems[0]}
                    <br/>
                    <label>
                        Month
                        <select name="month" onChange={this.handleChange("month")}>
                            <option value="1">January</option>
                            <option value="2">February</option>
                            <option value="3">March</option>
                            <option value="4">April</option>
                            <option value="5">May</option>
                            <option value="6">June</option>
                            <option value="7">July</option>
                            <option value="8">August</option>
                            <option value="9">September</option>
                            <option value="10">October</option>
                            <option value="11">November</option>
                            <option value="12">December</option>
                        </select>
                    </label>
                    <label>
                        Day
                        <input 
                            type="text"
                            value={this.state.day}
                            onChange={this.handleChange("day")}
                            maxLength="2"
                        />
                    </label>
                    <label>
                        Year
                        <input 
                            type="text"
                            value={this.state.year}
                            onChange={this.handleChange("year")}
                            maxLength="4"
                        />
                    </label>
                    {errorItems[3]}
                    <br/>
                    <label>
                        What's your gender?
                        <label>Male
                            <input type="radio" value="M"/>
                        </label>
                        <label>Female
                            <input type="radio" value="F" />
                        </label>
                        <label>Non-binary
                            <input type="radio" value="NB" />
                        </label>
                    </label>
                    {errorItems[4]}
                    <br/>
                    <button type="submit">SIGN UP</button>
                </form>
                <p>Have an account?</p>
                <br/>
                <Link to='/login'>Log in</Link>
            </div>
        )
    }
}

export default SignupForm;