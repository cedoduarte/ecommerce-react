import "./DeleteAccount.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { PasswordTextField } from "../PasswordTextField/PasswordTextField";
import { useState } from "react";

export const DeleteAccount = () => {
    const [usernameOrEmail, setUsernameOrEmail] = useState("");
    const [currentPassword, setCurrentPassword] = useState("");
    const [confirmedPassword, setConfirmedPassword] = useState("");

    const usernameChanged = (event) => {
        setUsernameOrEmail(event.target.value);
    }

    const currentPasswordChanged = (event) => {
        setCurrentPassword(event.target.value);
    }

    const confirmedPasswordChanged = (event) => {
        setConfirmedPassword(event.target.value);
    }

    return (
        <>
            <form className="delete-account-form">
                <h3 className="delete-account-title">Delete account</h3>
                <TextField
                    className="delete-account-field"
                    variant="outlined" 
                    placeholder="Username or email" 
                    onInput={usernameChanged} /><br /><br />
                <PasswordTextField 
                    passwordLabel="Current password"
                    handlePassword={currentPasswordChanged} /><br /><br />
                <PasswordTextField 
                    passwordLabel="Confirmed password"
                    handlePassword={confirmedPasswordChanged} /><br /><br />
                <Button className="delete-account-delete-button">
                    <i className="material-symbols-outlined">person_remove</i>Delete
                </Button>
            </form>
        </>
    );
}