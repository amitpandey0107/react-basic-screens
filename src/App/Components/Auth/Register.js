import React, { Component } from 'react'

class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div className="loginwrap registerwrap">
                <h1>Sign Up</h1>
                <div className="formwrap">
                    <form name="loginform" id="loginform" autoComplete="off">

                        <div className="formfield">
                            <label htmlFor="fullname">Fullname</label>
                            <input
                            type="text"
                            name="fullname"
                            id="fullname"
                            className="formcontrol"
                            autoComplete="fullname" 
                            />
                        </div>

                        <div className="formfield">
                            <label htmlFor="emailaddress">Email Address</label>
                            <input
                            type="text"
                            name="emailaddress"
                            id="emailaddress"
                            className="formcontrol"
                            autoComplete="emailaddress" 
                            />
                        </div>

                        <div className="formfield">
                            <label htmlFor="phone">Phone Number</label>
                            <input
                            type="text"
                            name="phone"
                            id="phone"
                            className="formcontrol"
                            autoComplete="phone" 
                            />
                        </div>

                        <div className="formfield">
                            <label htmlFor="password">Password</label>
                            <input
                            type="password"
                            name="password"
                            id="password"
                            className="formcontrol"
                            autoComplete="password" 
                            />                            
                        </div>

                        <div className="formfield">
                            <div className="checkwrap">
                                <input
                                type="checkbox"
                                id="agreeterms"
                                className="fcheck"
                                />
                                <span className="checklbl"></span>
                            </div>
                            <div className="checktxt">By creating your account, you agree to our <a href="">Terms of Use</a> &amp; <a href="">Privacy Policy</a></div>
                        </div>

                        <div className="formfield btnwrp">
                            <button
                            className="loginbutton"
                            id="loginbutton"
                            >Submit</button>                            
                        </div>

                        <div className="formfield mb0">
                            <div className="supporttxt">
                                Already have an account? <a href="">Login here</a>.
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        )
    }
}

export default Register
