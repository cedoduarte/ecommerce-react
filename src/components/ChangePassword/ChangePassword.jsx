import { PasswordTextField } from "../PasswordTextField/PasswordTextField";
import Button from "@mui/material/Button";
import "./ChangePassword.css";
import { useState } from "react";

export const ChangePassword = () => {
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmedPassword, setConfirmedPassword] = useState("");

    const currentPasswordChanged = (event) => {
        setCurrentPassword(event.target.value);
    }

    const newPasswordChanged = (event) => {
        setNewPassword(event.target.value);
    }

    const confirmedPasswordChanged = (event) => {
        setConfirmedPassword(event.target.value);
    }

    return (
        <>
            <form className="change-password-form">
                <h3 className="change-password-title">Change password</h3>
                <PasswordTextField
                    passwordLabel="Current password" 
                    handlePassword={currentPasswordChanged} /><br /><br />
                <PasswordTextField
                    passwordLabel="New password"
                    handlePassword={newPasswordChanged} /><br /><br />
                <PasswordTextField 
                    passwordLabel="Confirmed password"
                    handlePassword={confirmedPasswordChanged} /><br /><br />
                <Button className="change-password-save-button">
                    <i className="material-symbols-outlined">save</i>Save
                </Button>
            </form>            
        </>
    );
}