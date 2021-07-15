import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


function CreateUser() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [passwordOne, setpasswordOne] = useState("");
    const [passwordTwo, setPasswordTwo] = useState("");
    const [regError, setregError] = useState("");
    const [registered, setRegistered] = useState("");
    useEffect(() => {



    }, [regError]);


    const postUser = async (e) => {
        e.preventDefault();

        if (validateInputs() === true) {

            if (passwordOne === passwordTwo) {

                const newUser = { name, email, password: passwordOne }

                try {

                    const response = await axios.post(process.env.REACT_APP_CREATE_USER, newUser);
                    if (response.status === 201) {

                        clearInputs();

                        setRegistered(response.data.message);

                        setTimeout(() => {

                            setRegistered("");

                        }, 10000);

                    } else {

                        setregError(response.data.message);
                        setTimeout(() => {
                            setregError("");
                        }, 5000);
                    }


                } catch (error) {

                    console.log(error + " Error: Something is bad with the endpoint.");
                }
            } else {

                setregError("Password does not match.");

                setTimeout(() => {
                    setregError("");
                }, 5000);

            }

        } else {

            // console.log("error inputValidation.");
        }
    }

    // true: no empty inputs, false: there must be one empty input.
    const validateInputs = () => {

        if (!name.trim()) {
            setregError("Name is empty.");
            setTimeout(() => {
                setregError("");
            }, 5000);
        } else {

            if (!email.trim()) {
                setregError("Email is empty.");
                setTimeout(() => {
                    setregError("");
                }, 5000);

            } else {

                if (!passwordOne.trim()) {
                    setregError("Passwor is empty.");
                    setTimeout(() => {
                        setregError("");
                    }, 5000);
                } else {

                    if (!passwordTwo.trim()) {
                        setregError("Password confirmation is empty.");
                        setTimeout(() => {
                            setregError("");
                        }, 5000);
                    } else {
                        return true;
                    }

                }

            }
        }
    }

    const clearInputs = () => {

        const inputs = document.getElementById('inputsRegister').getElementsByTagName('input');

        for (var i = 0; i < inputs.length; i++) {
            inputs[i].value = "";
        }

    }

    return (

        <div className="home-right-con">

            <div className="content-home-right ">

                <h1 className="bold-light">Take 10% off today.</h1>

                <form className="form-login" id="inputsRegister" onSubmit={postUser} >

                    {
                        registered ? (
                            <div className="alert alert-success" role="alert">
                                {registered}
                            </div>
                        ) :
                            (<span></span>)
                    }
                    <label className="label-Inputs bold-light" htmlFor="email">Name and Lastname</label>
                    <input className="login-input" type="text" onChange={(e) => { setName(e.target.value) }} placeholder="your name" autoFocus />

                    <label className="label-Inputs bold-light mt-24" htmlFor="email">Email</label>
                    <input className="login-input" type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Youremail@address.com" />

                    <div className="display-flex mt-24">
                        <div className="w-100">
                            <label className="label-Inputs bold-light " htmlFor="email">Password</label>
                            <div className="">
                                <input onChange={(e) => { setpasswordOne(e.target.value) }} className="register-input" type="password" placeholder="Your password" required="" />
                            </div>
                        </div>

                        <div className="w-100 inputs-space">
                            <label className="label-Inputs  bold-light" htmlFor="email">Password again</label>
                            <div className="">
                                <input onChange={(e) => { setPasswordTwo(e.target.value) }} className="register-input" type="password" placeholder="Your password" required="" />
                            </div>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary w-100 btn-login">Register</button>
                    {
                        regError ? (<span className="inputValidation-message">{regError}</span>) : (<span></span>)
                    }
                </form>

                <div className="p-after-bttn">
                    <p>
                        <span className="textafterlogin">Already have an account </span>
                        <Link className="bold-light href" to="/user/login">Log In</Link>
                    </p>
                </div>
            </div>
        </div>

    );


}

export default CreateUser;