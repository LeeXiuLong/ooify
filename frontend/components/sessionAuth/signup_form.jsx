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
            emailError:"",
            confirmEmailError:"",
            passwordError: "",
            nameError:"",
            monthError: "",
            dayError:"",
            yearError:"",

        }
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    handleChange(type){
        return e => {
            let d = new Date();
            let currentValue = e.currentTarget.value;
            if(type === "email"){
                if (currentValue.length === 0) {
                    this.setState({ emailError: "You need to enter your email." })
                } else if (!currentValue.includes("@")) {
                    this.setState({ emailError: "This email is invalid. Make sure it's written like example@email.com" })
                } else {
                    this.setState({ emailError: "" })
                }
            } else if (type === "confirmEmail"){
                if (currentValue.length === 0) {
                    this.setState({ confirmEmailError: "You need to confirm your email." })
                } else if (currentValue !== this.state.email) {
                    this.setState({ confirmEmailError: "The email addresses don't match." })
                } else {
                    this.setState({ confirmEmailError: ""})
                }
            } else if (type === "password"){
                if (currentValue.length === 0) {
                    this.setState({ passwordError: "You need to enter a password." })
                } else if (currentValue.length < 6) {
                    this.setState({ passwordError: "Your password is too short." })
                } else{
                    this.setState({ passwordError: "" })
                }
            } else if (type === "name"){
                if (currentValue.length === 0) {
                    this.setState({ nameError: "Enter a name for your profile." })
                }else{
                    this.setState({ nameError: "" })
                }
            } else if (type === "month"){
                if (currentValue === 0) {
                    this.setState({ monthError: "Select your birth month." })
                }else{
                    this.setState({ monthError: "" })
                }
            } else if (type === "day"){
                if (currentValue.length === 0 || !parseInt(currentValue) || !parseInt(currentValue) > 31) {
                    this.setState({ dayError: "Enter a valid day of the month." })
                }else{
                    this.setState({ dayError: "" })
                }
            } else if (type === "year"){
                if (currentValue.length < 4 || parseInt(currentValue) < 1900 || !parseInt(currentValue)) {
                    this.setState({ yearError: "Enter a valid year." })
                } else if (d.getFullYear() - parseInt(currentValue) < 13) {
                    this.setState({ yearError: "Sorry, you don't meet Spotify's age requirements." })
                } else{
                    this.setState({ yearError: "" })
                }
            }    
            return this.setState({ [type]: e.currentTarget.value })
        }
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
            return <li className="error">{error}</li>
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
                        <br/>
                        <br/>
                        {this.state.emailError}
                        <br/>
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
                    <br/>
                    {this.state.confirmEmailError}
                    <br/>
                    <label>
                        Create a password
                        <br/>
                        <input 
                            type="password"
                            value={this.state.password}
                            onChange={this.handleChange("password")}
                        />
                        <br />
                        <br />
                        {this.state.passwordError}
                        <br/>
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
                    <br />
                    <br />
                    {this.state.nameError}
                    <br/>
                    <label>
                        Month
                        <select name="month" onChange={this.handleChange("month")}>
                            <option value="0" disabled defaultValue>Month</option>
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
                    <br />
                    <br />
                    {this.state.monthError}
                    <br/>
                    {this.state.dayError}
                    <br/>
                    {this.state.yearError}
                    <br/>
                    <label>
                        What's your gender?
                        <br/>
                        <label>Male
                            <input type="radio" value="M" name="genderAnswer"/>
                        </label>
                        <label>Female
                            <input type="radio" value="F" name="genderAnswer"/>
                        </label>
                        <label>Non-binary
                            <input type="radio" value="NB" name="genderAnswer"/>
                        </label>
                    </label>
                    <br />
                    <br />
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