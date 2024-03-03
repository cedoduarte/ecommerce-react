import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { PasswordTextField } from "../../components/PasswordTextField/PasswordTextField";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { AUTHORIZATION_TOKEN, URL_USER_SIGNIN } from "../../shared/constants";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { changeUser } from "../../store/userSlice";

export const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSignin = async () => {
        await fetchSignin();
    }

    const fetchSignin = async () => {
        await fetch(URL_USER_SIGNIN, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": AUTHORIZATION_TOKEN
            },
            body: JSON.stringify({
                usernameOrEmail: username,
                password
            })
        }).then(response => {
            if (!response.ok) {
                return response.text().then(errorText => {
                    throw new Error(errorText);
                });
            }
            return response.json();
        }).then(data => {
            dispatch(changeUser({
                loggedin: true,
                user: data
            }));
            navigate("/");
        }).catch(errorObject => {
            toast.error(errorObject.message.substring(18, errorObject.message.indexOf("!") + 1));
        });
    }

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
                <Button className="login-signin-button" onClick={handleSignin}>
                    <i className="material-symbols-outlined">login</i>Sign in
                </Button>
            </form>
            <Toaster />
        </>
    );
}