import React, { Component } from 'react'

export default class ResetPassword extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div className="loginwrap">
                <h1>Reset Password</h1>
                <div className="formwrap">
                    <form name="loginform" id="loginform" autoComplete="off">

                        <div className="formfield">
                            <label htmlFor="newpassword">New Password</label>
                            <input
                            type="password"
                            name="newpassword"
                            id="newpassword"
                            className="formcontrol"
                            autoComplete="newpassword" 
                            />
                        </div>

                        <div className="formfield">
                            <label htmlFor="confirmpassword">Confirm Password</label>
                            <input
                            type="password"
                            name="confirmpassword"
                            id="confirmpassword"
                            className="formcontrol"
                            autoComplete="confirmpassword" 
                            />
                        </div>

                        <div className="formfield btnwrplogin">
                            <button
                            className="loginbutton"
                            id="loginbutton"
                            >Reset</button>                            
                        </div>

                        <div className="formfield mb0">
                            <div className="supporttxt">
                                Go back <a href="">Login</a>.
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        )
    }
}
