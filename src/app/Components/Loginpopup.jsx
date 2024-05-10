'use client';
import { useState } from 'react';
import SlDialog from '@shoelace-style/shoelace/dist/react/dialog';
import './Navbar.css'
import SlInput from '@shoelace-style/shoelace/dist/react/input';
import styles from '@/app/Styles/loginPopup.module.css'

const Loginpopup = () => {
    const [open, setOpen] = useState(false);
    const [currState, setCurrState] = useState("Login");
    const [password, setPassword] = useState("");
    const [reEnteredPassword, setReEnteredPassword] = useState("");
    const [passwordsMatch, setPasswordsMatch] = useState(true);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (currState === "Sign Up" && password !== reEnteredPassword) {
            setPasswordsMatch(false);
            return;
        }
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
            <SlDialog label="Dialog" open={open} onSlAfterHide={() => setOpen(false)}>

                <form onSubmit={handleSubmit}> 
                    <div className={styles.login_popup_inputs}>
                        {currState === "Login" ? null :
                            <input
                                type="text"
                                placeholder='Your name'
                                required
                            />}
                        <input
                            type="email"
                            placeholder='Your Email'
                            required
                        />

                        <SlInput
                            type="password"
                            placeholder="Password"
                            password-toggle
                            className={styles.password}
                            value={password}
                            onInput={handlePasswordChange}
                            required
                        />
                        {currState === "Sign Up" && (
                            <>
                                <SlInput
                                    type="password"
                                    placeholder="Re-enter password"
                                    password-toggle
                                    className={styles.password}
                                    value={reEnteredPassword}
                                    onInput={handleReEnteredPasswordChange}
                                    required
                                />
                                {!passwordsMatch && <p>Passwords do not match!</p>}
                            </>
                        )}
                        <button type="submit">{currState === "Sign Up" ? "Create Account" : "Login"}</button> {/* Added type="submit" to the button */}
                    </div>
                    {currState === "Sign Up" &&
                        <div className={styles.login_popup_condition}>
                            <input type="checkbox" required />
                            <p>By continuing, I agree to the terms of use and privacy policy.</p>
                        </div>
                    }

                    {currState === "Login" ?
                        <p>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p> :
                        <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
                    }
                </form>

            </SlDialog>
            
            <button className='sign-in' onClick={() => setOpen(true)}>Sign in</button>
        </>
    );
};

export default Loginpopup;