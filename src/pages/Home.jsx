import { Outlet } from "react-router-dom";

export const Home = () => {
    return (
        <>
            <h3>Home</h3>
            <Outlet />
        </>
    );
}