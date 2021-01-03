import React, { useState }from "react";
import { authService } from "../fbase";

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(false);
    const [error, setError] = useState("");
    const onChange = (event) => {
        //const { name, value } = event.target;
        const { target: { name, value } } = event;
        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        }
    }
    
    const onSubmit = async (event) => {
        try {
            let data;
            event.preventDefault();
            if (newAccount) {
                data = await authService.createUserWithEmailAndPassword(email, password);
            } else {
                data = await authService.signInWithEmailAndPassword(email, password);
            }
        } catch (error) {
            setError(error.message);
        }
    };

    const toggleAccount = () => setNewAccount(prev => !prev);
    return (
        <div>
            <form onSubmit={onSubmit} >
                <input name="email"
                    type="text"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={onChange}
                />
                <input name="password"
                    type="password"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={onChange}
                />
                <input
                    type="submit"
                    value={newAccount ? "Create Account" : "Log In"}
                />
            </form>
            {error}
            <span onClick={toggleAccount}>{newAccount ? "Log in":"Create Account"}</span>
            <div>
                <button>LogIn with Google</button>
                <button>Login with Github</button>
            </div>
        </div>
        
    );
}
export default Auth;