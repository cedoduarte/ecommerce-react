import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";
import withAuth from "../components/Guards/withAuth";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    
    useEffect(() => {
        navigate("/poster");
    });

    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
}

export default withAuth(Home);