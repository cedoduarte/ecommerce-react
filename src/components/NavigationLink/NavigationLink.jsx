import { NavLink } from "react-router-dom";
import "./NavigationLink.css";

export const NavigationLink = ({ to, children, ...props }) => {
    return (
        <NavLink {...props} to={to} className={({isActive}) => {
            return isActive ? "navigation-link-is-active" : undefined;
        }}>
            {children}
        </NavLink>
    );
}