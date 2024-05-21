'use client';

import { useState } from 'react';
import { Button, Dialog, DialogTrigger, Heading, Modal } from 'react-aria-components';
import { LuEye, LuEyeOff } from "react-icons/lu";
import './Navbar.css'
import './Loginpopup.css'


const Loginpopup = () => {
    const [currState, setCurrState] = useState("Login");
    const [password, setPassword] = useState("");
    const [reEnteredPassword, setReEnteredPassword] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [reEnteredPasswordVisible, setReEnteredPasswordVisible] = useState(false);
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [passwordsMatch, setPasswordsMatch] = useState(true); // New state for password match

    const handleSubmit = (event) => {
        event.preventDefault();

        // Check if passwords match
        if (currState === "Sign Up" && password !== reEnteredPassword) {
            setPasswordsMatch(false);
            return;
        }

        // Reset passwords match state
        setPasswordsMatch(true);

        // Proceed with form submission logic
        // For now, just console log the form data
        console.log("Form submitted with data:", { email, name, password });

        // Close the modal
        // Implement modal closing logic as needed
    };

    return (
        <>
            <DialogTrigger>
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
                                        <div className="password-field">
                                            <input
                                                className='relative-pass'
                                                name="password"
                                                placeholder="Enter Password"
                                                type={passwordVisible ? "text" : "password"}
                                                value={password}
                                                required
                                                onChange={event => setPassword(event.target.value)}
                                            />
                                            <div
                                                className="toggle-password"
                                                onClick={() => setPasswordVisible(!passwordVisible)}
                                            >
                                                {passwordVisible ? <LuEyeOff /> : <LuEye />}
                                            </div>
                                        </div>
                                   
                                    {currState === "Sign Up" && (
                                        <>
                                            <div className="password-field">
                                                <input
                                                    className='relative-pass'
                                                    name="reEnteredPassword"
                                                    placeholder="Re-enter Password"
                                                    type={reEnteredPasswordVisible ? "text" : "password"}
                                                    value={reEnteredPassword}
                                                    required
                                                    onChange={event => setReEnteredPassword(event.target.value)}
                                                />
                                                <div
                                                    className="toggle-password "
                                                    onClick={() => setReEnteredPasswordVisible(!reEnteredPasswordVisible)}
                                                >
                                                    {reEnteredPasswordVisible ? <LuEyeOff /> : <LuEye />}
                                                </div>
                                            </div>

                                           

                                            {!passwordsMatch && <p>Passwords do not match!</p>}
                                        </>
                                    )}
                                     </div>
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
            </DialogTrigger>
        </>
    );
}

export default Loginpopup;



