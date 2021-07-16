import { NavLink } from "react-router-dom"

export const Navigation = () => {
    return (
        <>
        <NavLink to="/" activeClassName="">Home</NavLink>
        <NavLink to="/contacts" activeClassName="">Contacts</NavLink>
        </>
    )
}