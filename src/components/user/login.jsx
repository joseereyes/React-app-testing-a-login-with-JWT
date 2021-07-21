import React, { useState } from "react";
import { Link, useHistory, Redirect } from "react-router-dom";
import axios from "axios";
import localStorage from "../../auth/localStorage";



function Login() {

    const history = useHistory();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [logError, setlogError] = useState("");


    if (localStorage.getToken("token")) {
        window.location.href = "/";
    }


    const login = async (e) => {
        e.preventDefault();

        if (validateInputs() === true) {

            const user = { email, password }

            try {

                const response = await axios.post(process.env.REACT_APP_LOG_USER, user);
                const token = response.data;
                localStorage.storeToken(token);
                clearInputs();
                window.location.href = '/';

            } catch (error) {

                if (error.response) {

                    setlogError(error.response.data);
                    setTimeout(() => {
                        setlogError("");
                    }, 5000);

                }
            }
        }
    }

    const validateInputs = () => {

        if (!email.trim()) {
            setlogError("Email is empty.");
            setTimeout(() => {
                setlogError("");
            }, 5000);

        } else {

            if (!password.trim()) {
                setlogError("Password is empty.");
                setTimeout(() => {
                    setlogError("");
                }, 5000);

            } else {
                return true;
            }
        }
    }

    const clearInputs = () => {

        const inputs = document.getElementById('inputsLogin').getElementsByTagName('input');

        for (var i = 0; i < inputs.length; i++) {
            inputs[i].value = "";
        }

        setEmail("");
        setPassword("");

    }

    return (

        <div className="home-right-con">

            <div className="content-home-right">

                <h1 className="bold-light">Welcome back!</h1>

                <form className="form-login" onSubmit={login} id="inputsLogin" >

                    <label className="label-Inputs bold-light" htmlFor="email">Email</label>
                    <input onChange={(e) => { setEmail(e.target.value) }} className="login-input" type="text" placeholder="Youremail@address.com" />

                    <div>
                        <label className="label-Inputs bold-light mt-24" htmlFor="email">Password</label>
                        <a href="/" className="href-forgotpss">¿Forgot password?</a>
                    </div>


                    <input onChange={(e) => { setPassword(e.target.value) }} className="login-input" type="password" placeholder="Your password" />
                    <button type="submit" className="btn btn-primary w-100 btn-login">Log In</button>

                    {
                        logError ? (<span className="inputValidation-message">{logError}</span>) : (<span></span>)
                    }

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