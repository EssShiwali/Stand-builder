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
    const [passwordsMatch, setPasswordsMatch] = useState(true);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [reEnteredPasswordVisible, setReEnteredPasswordVisible] = useState(false);

    const [email, setEmail] = useState();
    const [name, setName] = useState();



    const handleSubmit = (event) => {
        event.preventDefault();
        if (currState === "Sign Up") {
            if (password !== reEnteredPassword) {
                setPasswordsMatch(false);
                return;
            } else {
                // Reset passwordsMatch state if they match
                setPasswordsMatch(true);
                // Proceed with sign-up
            }
        } else {
            // Proceed with login
        }

        fetch('/api/register', {
            method: 'POST',
            body:JSON.stringify({email,name,password,reEnteredPassword})
        });
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        if (!passwordsMatch) {
            setPasswordsMatch(true);
        }
    };

    const handleReEnteredPasswordChange = (event) => {
        setReEnteredPassword(event.target.value);
        if (!passwordsMatch) {
            setPasswordsMatch(true);
        }
    };

    return (
        <>
            <DialogTrigger>
                <Button className='sign-in' >Sign up</Button>

                <Modal>
                    <Dialog>
                        {({ close }) => <>
                            <form>
                                <Heading slot="title">{currState}

                                    {/* <RxCross2 onPress={close} /> */}
                                </Heading>
                                <form onSubmit={handleSubmit}>
                                    <div className='login_popup_inputs'>
                                        {currState === "Login" ? null :
                                            <input
                                                type="text"
                                                placeholder='Your name'
                                                required
                                                value={name}
                                                onChange={event => setName(event.target.value)}
                                            />}
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
                                                onChange={handlePasswordChange}
                                                required
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
                                                        onChange={handleReEnteredPasswordChange}
                                                        required
                                                    />
                                                    <div
                                                        className="toggle-password"
                                                        onClick={() => setReEnteredPasswordVisible(!reEnteredPasswordVisible)}
                                                    >
                                                        {reEnteredPasswordVisible ? <LuEyeOff /> : <LuEye />}
                                                    </div>
                                                </div>
                                                {!passwordsMatch && <p>Passwords do not match!</p>}
                                            </>
                                        )}
                                        <button type="submit">{currState === "Sign Up" ? "Create Account" : "Login"}</button>
                                    </div>
                                    {currState === "Sign Up" &&
                                        <div className='login_popup_condition'>
                                            <input type="checkbox" required />
                                            <p>By continuing, I agree to the terms of use and privacy policy.</p>
                                        </div>
                                    }

                                    {currState === "Login" ?
                                        <p>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p> :
                                        <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
                                    }
                                </form>

                            </form>
                            <Button onPress={close}>Close</Button>
                        </>}

                    </Dialog>
                </Modal>
            </DialogTrigger>
        </>
    );
}


export default Loginpopup;




