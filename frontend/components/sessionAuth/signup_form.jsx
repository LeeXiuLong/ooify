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
            emailError: "",
            confirmEmailError: "",
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
        .then(() => this.props.history.push("/"))
        console.log(this.state);
    }
    render(){

        let errors = this.props.errors.map(error => {
            return <li className="signupError">{error.split(" ").slice(1).join(" ")}</li>
        })
        return(
            <div className="signupPage">
                <img src={window.black_logo} />
                <h2>Sign up for free to start listening.</h2>
                <form className="signupForm" onSubmit={this.handleSubmit}>
                    <h5>Sign up with your email address</h5>
                    <ul className="signupError">
                        {errors}
                    </ul>
                    <label htmlFor="email">
                        What's your email?
                    </label>
                    <input
                        id="email"
                        type="text"
                        value={this.state.email}
                        placeholder="Enter your email."
                        onChange={this.handleChange("email")}
                    />
                    <p className="signupError">{this.state.emailError}</p>
                    <label>
                        Confirm Your Email
                    </label>
                    <input
                        placeholder = "Enter your email again."
                        type="text"
                        value={this.state.confirmEmail}
                        onChange={this.handleChange("confirmEmail")}
                    />
                    <p className="signupError">{this.state.confirmEmailError}</p>
                    <label>
                        Create a password
                    </label>
                    <input
                        placeholder = "Create a password."
                        type="password"
                        value={this.state.password}
                        onChange={this.handleChange("password")}
                    />
                    <p className="signupError">{this.state.passwordError}</p>
                    <label>
                        What should we call you?
                    </label>
                    <input
                        placeholder="Enter a profile name."
                        type="text"
                        value={this.state.name}
                        onChange={this.handleChange("name")}
                    />
                    <p className="nameAppears">This appears on your profile.</p>
                    <p className="signupError">{this.state.nameError}</p>
                    <label className="dobLabel">What's your date of birth?</label>
                    <div className="dateContainer">
                        <div className="dobLabels">
                            <label className="monthLabel">
                                Month
                            </label>
                            <label>
                                Day
                            </label>
                            <label>
                                Year
                            </label>
                        </div>
                        <div className="dobInputs">
                            <select className="monthInput" id="month" name="month" onChange={this.handleChange("month")}>
                                <option value="0" disabled selected>Month</option>
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

                            <input
                                placeholder = "DD"
                                className= "dayInput"
                                type="text"
                                value={this.state.day}
                                onChange={this.handleChange("day")}
                                maxLength="2"
                            />

                            <input
                                placeholder = "YYYY"
                                className="yearInput"
                                type="text"
                                value={this.state.year}
                                onChange={this.handleChange("year")}
                                maxLength="4"
                            />
                        </div>
                    </div>
                    
                    <p className="signupError">{this.state.monthError}</p>
                    <p className="signupError">{this.state.dayError}</p>
                    <p className="signupError">{this.state.yearError}</p>
                    <label className="genderLabel">
                        What's your gender?
                    </label>
                    <div className="genderInputs">
                        <label>
                            <input type="radio" value="M" name="genderAnswer" onChange={this.handleChange("gender")} />
                            <p>Male</p>
                        </label>
                        <label>
                            <input type="radio" value="F" name="genderAnswer" onChange={this.handleChange("gender")}/>
                            <p>Female</p>
                        </label>
                        <label>
                            <input type="radio" value="NB" name="genderAnswer" onChange={this.handleChange("gender")}/>
                            <p>Non-binary</p>
                        </label>
                    </div>
                    <button type="submit">SIGN UP</button>
                </form>
                <div className="alreadyHaveAccount">
                    <p>Have an account? </p>
                    <Link to='/login'>Log in</Link>
                </div>
            </div>
        )
    }
}

export default SignupForm;