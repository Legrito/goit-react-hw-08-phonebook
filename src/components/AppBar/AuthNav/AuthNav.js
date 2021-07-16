import { NavLink } from "react-router-dom"

export const AuthNav = () => {
    return (
        <>
        <NavLink to="/register" activeClassName="">Register</NavLink>
        <NavLink to="/login" activeClassName="">Login</NavLink>
        </>
    )
}