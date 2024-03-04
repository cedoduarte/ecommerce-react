import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Profile.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeUser } from "../../store/userSlice";
import { fixDateFormat } from "../../shared/utils";
import { countryList } from "../../shared/constants";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import toast, { Toaster } from "react-hot-toast";
import { URL_USER_UPDATE, AUTHORIZATION_TOKEN } from "../../shared/constants";

export const Profile = () => { 
    const dispatch = useDispatch();
       
    const [currentUser, setCurrentUser] = useState({
        id: -1,
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        passwordHash: "",
        phoneNumber: "",
        birthdate: "",
        country: "",
        province: "",
        city: "",
        zipCode: "",
        type: "",
        lastModified: "",
        createdDate: "",
        isDeleted: false
    });

    useEffect(() => {
        const currentUserObject = JSON.parse(localStorage.getItem("user"));
        setCurrentUser({
            ...currentUserObject,
            birthdate: fixDateFormat(currentUserObject.birthdate)
        });
    }, []);

    const handleFirstNameInput = (event) => {
        setCurrentUser({
            ...currentUser, 
            firstName: event.target.value 
        });
    }

    const handleLastNameInput = (event) => {
        setCurrentUser({
            ...currentUser,
            lastName: event.target.value
        });
    }

    const handleEmailInput = (event) => {
        setCurrentUser({
            ...currentUser,
            email: event.target.value
        });
    }

    const handlePhoneNumberInput = (event) => {
        setCurrentUser({
            ...currentUser,
            phoneNumber: event.target.value
        });
    }

    const handleBirthdateInput = (event) => {
        setCurrentUser({
            ...currentUser,
            birthdate: event.target.value
        });
    }

    const handleProvinceInput = (event) => {
        setCurrentUser({
            ...currentUser,
            province: event.target.value
        });
    }

    const handleCityInput = (event) => {
        setCurrentUser({
            ...currentUser,
            city: event.target.value
        });
    }

    const handleZipCodeInput = (event) => {
        setCurrentUser({
            ...currentUser,
            zipCode: event.target.value
        });
    }

    const countryHandleChange = (event) => {
        setCurrentUser({
            ...currentUser,
            country: event.target.value
        });
    }

    const fetchUpdate = async () => {
        await fetch(URL_USER_UPDATE, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": AUTHORIZATION_TOKEN
            },
            body: JSON.stringify(currentUser)
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
            toast.success("Profile edited successfully!");
        }).catch(errorObject => {
            toast.error(errorObject.message.substring(18, errorObject.message.indexOf("!") + 1));
        });
    }

    const handleSaveClicked = async () => {
        await fetchUpdate();
    }

    return (
        <>
            <form className="profile-form">
                <h3 className="profile-title">Profile</h3>
                <TextField 
                    className="profile-field" 
                    variant="outlined" 
                    placeholder="First Name"
                    value={currentUser.firstName}
                    onInput={handleFirstNameInput} /><br /><br />
                <TextField 
                    className="profile-field" 
                    variant="outlined" 
                    placeholder="Last Name"
                    value={currentUser.lastName}
                    onInput={handleLastNameInput} /><br /><br />
                <TextField 
                    className="profile-field" 
                    variant="outlined" 
                    placeholder="Email"
                    value={currentUser.email}
                    onInput={handleEmailInput} /><br /><br />
                <TextField 
                    className="profile-field" 
                    variant="outlined" 
                    placeholder="Phone number"
                    value={currentUser.phoneNumber}
                    onInput={handlePhoneNumberInput} /><br /><br />
                <TextField 
                    className="profile-field" 
                    variant="outlined" 
                    type="date" 
                    placeholder="Birthdate"
                    value={currentUser.birthdate}
                    onInput={handleBirthdateInput} /><br /><br />
                <Select
                    className="profile-field-select"
                    value={currentUser.country}
                    onChange={countryHandleChange}>
                    {countryList.map((item) => (
                        <MenuItem key={item} value={item}>{item}</MenuItem>
                    ))}                
                </Select><br /><br />
                <TextField 
                    className="profile-field" 
                    variant="outlined" 
                    placeholder="Province"
                    value={currentUser.province}
                    onInput={handleProvinceInput} /><br /><br />
                <TextField 
                    className="profile-field" 
                    variant="outlined" 
                    placeholder="City"
                    value={currentUser.city}
                    onInput={handleCityInput} /><br /><br />
                <TextField 
                    className="profile-field" 
                    variant="outlined" 
                    placeholder="Zip Code"
                    value={currentUser.zipCode}
                    onInput={handleZipCodeInput} /><br /><br />
                <Button 
                    className="profile-save-button" 
                    variant="text" 
                    onClick={handleSaveClicked}>
                    <i className="material-symbols-outlined">save</i>Save
                </Button>
            </form>
            <Toaster />
        </>
    );
}