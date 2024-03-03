import { Navigate } from "react-router-dom";

const withAuth = (Component) => (props) => {
    if (true) { // todo...
        return <Component {...props} />
    } else {
        return <Navigate to="/login" replace />
    }
}

export default withAuth;