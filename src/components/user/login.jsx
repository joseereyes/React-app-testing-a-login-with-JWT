import React from "react";
import { Link } from "react-router-dom";



function Login() {



    return (

        <div className="home-right-con">


            <div className="content-home-right">

                <h1 className="bold-light">Welcome back!</h1>

                <form className="form-login" >

                    <label className="label-Inputs bold-light" htmlFor="email">Email</label>
                    <input className="login-input" type="text" placeholder="Youremail@address.com" required="required" />

                    <div>
                        <label className="label-Inputs bold-light mt-24" htmlFor="email">Password</label>
                        <a href="/" className="href-forgotpss">¿Forgot password?</a>
                    </div>

            
                    <input className="login-input" type="password" placeholder="Your password" required="required" />
                    <button type="submit" className="btn btn-primary w-100 btn-login">Log In</button>
                </form>

                <div className="p-after-bttn">
                    <p>
                        <span className="textafterlogin">Don't have an account </span><Link className="bold-light href" to="/user/register">Create one now</Link>
                    </p>
                </div>


            </div>
        </div>

    );


}

export default Login;