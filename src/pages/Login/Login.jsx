import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { PasswordTextField } from "../../components/PasswordTextField/PasswordTextField";
import { useState } from "react";
import "./Login.css";

export const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const usernameChanged = (event) => {
        setUsername(event.target.value);
    }

    const passwordChanged = (event) => {
        setPassword(event.target.value);
    }

    return (
        <>
            <form className="login-form">
                <div className="login-title">
                    <h2><i className="material-symbols-outlined">shoppingmode</i>ECOMMERCE</h2>
                    <h3>Sign In</h3>
                    <i className="material-symbols-outlined">tv_signin</i>
                </div>
                <TextField 
                    className="login-field" 
                    variant="outlined" 
                    placeholder="Username"
                    onInput={usernameChanged}/><br /><br />
                <PasswordTextField 
                    passwordLabel="Password"
                    handlePassword={passwordChanged}/><br /><br />
                <Button className="login-signin-button">
                    <i className="material-symbols-outlined">login</i>Sign in
                </Button>
            </form>
        </>
    );
}