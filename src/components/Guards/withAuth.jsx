import { Navigate } from "react-router-dom";

const withAuth = (Component) => (props) => {
    const loggedin = JSON.parse(localStorage.getItem("loggedin"));
    if (loggedin) {
        return <Component {...props} />
    } else {
        return <Navigate to="/login" replace />
    }
}

export default withAuth;