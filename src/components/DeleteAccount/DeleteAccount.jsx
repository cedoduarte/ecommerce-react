import "./DeleteAccount.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { PasswordTextField } from "../PasswordTextField/PasswordTextField";
import { useState } from "react";
import { URL_ACCOUNT_DELETE, AUTHORIZATION_TOKEN } from "../../shared/constants";
import toast, { Toaster } from "react-hot-toast";
import { changeUser } from "../../store/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const DeleteAccount = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [deleteAccountDto, setDeleteAccountDto] = useState({
        usernameOrEmail: "",
        currentPassword: "",
        confirmedPassword: ""
    });
    
    const usernameChanged = (event) => {
        setDeleteAccountDto({
            ...deleteAccountDto,
            usernameOrEmail: event.target.value
        });
    }

    const currentPasswordChanged = (event) => {
        setDeleteAccountDto({
            ...deleteAccountDto,
            currentPassword: event.target.value
        });
    }

    const confirmedPasswordChanged = (event) => {
        setDeleteAccountDto({
            ...deleteAccountDto,
            confirmedPassword: event.target.value
        });
    }

    const fetchUpdate = async () => {
        await fetch(URL_ACCOUNT_DELETE, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": AUTHORIZATION_TOKEN
            },
            body: JSON.stringify(deleteAccountDto)
        }).then(response => {
            if (!response.ok) {
                return response.text().then(errorText => {
                    throw new Error(errorText);
                });
            }
            return response.json();
        }).then(data => {
            toast.success("Your account has beed deleted successfully!");
            dispatch(changeUser({
                loggedin: false,
                user: null
            }))
            navigate("/login");
        }).catch(errorObject => {
            toast.error(errorObject.message.substring(18, errorObject.message.indexOf("!") + 1));
        });
    }

    const handleDeleteAccount = async () => {
        await fetchUpdate();
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
                <Button className="delete-account-delete-button" onClick={handleDeleteAccount}>
                    <i className="material-symbols-outlined">person_remove</i>Delete
                </Button>
            </form>
            <Toaster />
        </>
    );
}