import { countryList } from "../../shared/constants";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";

export const CountrySelect = ({ widthpx }) => {
    const handleChange = (event) => {
        setSelectedCountry(event.target.value);
    }

    const [selectedCountry, setSelectedCountry] = useState("Mexico");

    return (
        <>
            <Select style={{width: widthpx + "px"}} value={selectedCountry} onChange={handleChange}>
                {countryList.map((item) => (
                    <MenuItem key={item} value={item}>{item}</MenuItem>
                ))}                
            </Select>
        </>
    );
}