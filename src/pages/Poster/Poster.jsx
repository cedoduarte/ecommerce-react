import "./Poster.css";
import toast, { Toaster } from "react-hot-toast";
import { useEffect } from "react";

export const Poster = () => {
    useEffect(() => {
        toast.success("Welcome"); // todo... welcome `firstName lastName`
    }, []);

    return (
        <>
            <div className="poster-container">
                <h2 className="poster-title">Welcome to ECOMMERCE</h2>
                <img className="poster-image" src="/poster.jpg" alt="poster" />
            </div>
            <Toaster />
        </>
    );
}
            