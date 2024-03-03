import { ChangePassword } from "../../components/ChangePassword/ChangePassword";
import { DeleteAccount } from "../../components/DeleteAccount/DeleteAccount";
import Divider from '@mui/material/Divider';

export const Setting = () => {
    return (
        <>
            <ChangePassword />
            <Divider orientation="horizontal" flexItem />
            <DeleteAccount />
        </>
    );
}