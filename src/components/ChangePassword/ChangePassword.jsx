import { PasswordTextField } from "../PasswordTextField/PasswordTextField";
import Button from "@mui/material/Button";
import "./ChangePassword.css";
import { useState, useEffect } from "react";
import { URL_USER_CHANGE_PASSWORD, AUTHORIZATION_TOKEN } from "../../shared/constants";
import toast, { Toaster } from "react-hot-toast";

export const ChangePassword = () => {
    const [changePasswordDto, setChangePasswordDto] = useState({
        usernameOrEmail: "",
        oldPassword: "",
        newPassword: "",
        confirmedPassword: ""
    });

    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem("user"));
        setChangePasswordDto({
            ...changePasswordDto,
            usernameOrEmail: currentUser.username
        });
    }, []);

    const currentPasswordChanged = (event) => {
        setChangePasswordDto({
            ...changePasswordDto,
            oldPassword: event.target.value
        });
    }

    const newPasswordChanged = (event) => {
        setChangePasswordDto({
            ...changePasswordDto,
            newPassword: event.target.value
        });
    }

    const confirmedPasswordChanged = (event) => {
        setChangePasswordDto({
            ...changePasswordDto,
            confirmedPassword: event.target.value
        });
    }

    const fetchUpdate = async () => {
        await fetch(URL_USER_CHANGE_PASSWORD, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": AUTHORIZATION_TOKEN
            },
            body: JSON.stringify(changePasswordDto)
        }).then(response => {
            if (!response.ok) {
                return response.text().then(errorText => {
                    throw new Error(errorText);
                });
            }
            return response.json();
        }).then(data => {
            toast.success("Password changed successfully!");
        }).catch(errorObject => {
            toast.error(errorObject.message.substring(18, errorObject.message.indexOf("!") + 1));
        });
    }

    const handleChangePassword = async () => {
        await fetchUpdate();
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
                <Button className="change-password-save-button" onClick={handleChangePassword}>
                    <i className="material-symbols-outlined">save</i>Save
                </Button>
            </form>       
            <Toaster />     
        </>
    );
}