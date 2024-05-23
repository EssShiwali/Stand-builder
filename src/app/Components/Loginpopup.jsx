'use client';

import { useState } from 'react';
// import { Button, Dialog, DialogTrigger, Heading, Modal } from 'react-aria-components';
import './Navbar.css'
import './Loginpopup.css'
import { Input, Modal } from 'antd';


const Loginpopup = () => {
    const [currState, setCurrState] = useState("Login");
    const [password, setPassword] = useState("");
    const [reEnteredPassword, setReEnteredPassword] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [passwordsMatch, setPasswordsMatch] = useState(true);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [modal2Open, setModal2Open] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (currState === "Sign Up" && password !== reEnteredPassword) {
            setPasswordsMatch(false);
            return;
        }
        setPasswordsMatch(true);

        const user = { name, email, password };

        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(user),
            });

            // Set the status based on the response from the API route
            if (response.status === 200) {
                setName("");
                setEmail("");
                setPassword("");
                setReEnteredPassword("");
                setSuccessMessage("Your account has been created!");
                setErrorMessage("");
            } else {
                setSuccessMessage("");
                setErrorMessage("There was an error. Please try again.")
            }
        } catch (e) {
            console.log(e);
            setSuccessMessage("");
            setErrorMessage("There was an error. Please try again.");
        }
    };

    return (
        <>
            {/* <DialogTrigger>
                <Button className='sign-in'>Sign up</Button>

                <Modal>
                    <Dialog>
                        {({ close }) => (
                            <>
                                <form onSubmit={handleSubmit}>
                                    <Heading slot="title">{currState}</Heading>
                                    <div className='login_popup_inputs'>
                                        {currState === "Login" ? null : (
                                            <input
                                                type="text"
                                                placeholder='Your name'
                                                required
                                                value={name}
                                                onChange={event => setName(event.target.value)}
                                            />
                                        )}
                                        <input
                                            type="email"
                                            placeholder='Your Email'
                                            required
                                            value={email}
                                            onChange={event => setEmail(event.target.value)}
                                        />



                                        <Input.Password
                                            placeholder="Password"
                                            required
                                            value={password}
                                            onChange={event => setPassword(event.target.value)}
                                            className='password-input'
                                        />

                                        {currState === "Sign Up" && (
                                            <>
                                                <Input.Password
                                                    placeholder="Re-enter password"
                                                    required
                                                    value={reEnteredPassword}
                                                    onChange={event => setReEnteredPassword(event.target.value)}
                                                    className='password-input'
                                                />
                                                {!passwordsMatch && <p className='error-message'>Passwords do not match!</p>}
                                            </>
                                        )}
                                    </div>


                                    {successMessage && <p className='success-message'>{successMessage}</p>}
                                    {errorMessage && <p className='error-message'>{errorMessage}</p>}

                                    <button type="submit">{currState === "Sign Up" ? "Create Account" : "Login"}</button>

                                    {currState === "Sign Up" && (
                                        <div className='login_popup_condition'>
                                            <input type="checkbox" required />
                                            <p>By continuing, I agree to the terms of use and privacy policy.</p>
                                        </div>
                                    )}

                                    {currState === "Login" ?
                                        <p>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p> :
                                        <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
                                    }
                                </form>
                                <Button onPress={close}>Close</Button>
                            </>
                        )}
                    </Dialog>
                </Modal>
            </DialogTrigger> */}



            <button className='sign-in' onClick={() => setModal2Open(true)}> Sign in</button>

            <Modal
                title={currState}
                centered
                open={modal2Open}
                onOk={() => setModal2Open(false)}
                onCancel={() => setModal2Open(false)}
            >
                <form onSubmit={handleSubmit}>

                    <div className='login_popup_inputs'>
                        {currState === "Login" ? null : (

                            <Input
                                placeholder="Your name"
                                required
                                value={name}
                                onChange={event => setName(event.target.value)}
                            />

                        )}

                        <Input
                            type="email"
                            placeholder='Your Email'
                            required
                            value={email}
                            onChange={event => setEmail(event.target.value)}
                        />


                        <Input.Password
                            placeholder="Password"
                            required
                            value={password}
                            onChange={event => setPassword(event.target.value)}
                            className='password-input'
                        />

                        {currState === "Sign Up" && (
                            <>
                                <Input.Password
                                    placeholder="Re-enter password"
                                    required
                                    value={reEnteredPassword}
                                    onChange={event => setReEnteredPassword(event.target.value)}
                                    className='password-input'
                                />
                                {!passwordsMatch && <p className='error-message'>Passwords do not match!</p>}
                            </>
                        )}
                    </div>


                    {successMessage && <p className='success-message'>{successMessage}</p>}
                    {errorMessage && <p className='error-message'>{errorMessage}</p>}
                    <div className="button-align">
                        <button type="submit" className='sign-in'>{currState === "Sign Up" ? "Sign up" : "Login"}</button>
                    </div>
                    {currState === "Sign Up" && (
                        <div className='login_popup_condition'>
                            <input type="checkbox" required />
                            <p>By continuing, I agree to the terms of use and privacy policy.</p>
                        </div>
                    )}

                    {currState === "Login" ?
                        <p>Create a new account? <span className='login-type' onClick={() => setCurrState("Sign Up")}>Click here</span></p> :
                        <p>Already have an account? <span className='login-type' onClick={() => setCurrState("Login")}>Login here</span></p>
                    }
                </form>
            </Modal>
        </>


    );
}

export default Loginpopup;



