import { NavLink } from "react-router-dom"

export const AuthNav = () => {
    return (
        <div>
        <NavLink to="/register" className="NavLink" activeClassName="NavLink--active">Register</NavLink>
        <NavLink to="/login" className="NavLink" activeClassName="NavLink--active">Login</NavLink>
        </div>
    )
}