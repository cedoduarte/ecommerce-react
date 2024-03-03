import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Profile.css";
import { CountrySelect } from "../../components/CountrySelect/CountrySelect";

export const Profile = () => {
    return (
        <>
            <form className="profile-form">
                <h3 className="profile-title">Profile</h3>
                <TextField 
                    className="profile-field" 
                    variant="outlined" 
                    placeholder="First Name" /><br /><br />
                <TextField 
                    className="profile-field" 
                    variant="outlined" 
                    placeholder="Last Name" /><br /><br />
                <TextField 
                    className="profile-field" 
                    variant="outlined" 
                    placeholder="Email" /><br /><br />
                <TextField 
                    className="profile-field" 
                    variant="outlined" 
                    placeholder="Phone number" /><br /><br />
                <TextField 
                    className="profile-field" 
                    variant="outlined" 
                    type="date" 
                    placeholder="Birthdate" /><br /><br />
                <CountrySelect widthpx={500}/><br /><br />
                <TextField 
                    className="profile-field" 
                    variant="outlined" 
                    placeholder="Province" /><br /><br />
                <TextField 
                    className="profile-field" 
                    variant="outlined" 
                    placeholder="City" /><br /><br />
                <TextField 
                    className="profile-field" 
                    variant="outlined" 
                    placeholder="Zip Code" /><br /><br />
                <Button className="profile-save-button" variant="text">
                    <i className="material-symbols-outlined">save</i>Save
                </Button>
            </form>
        </>
    );
}