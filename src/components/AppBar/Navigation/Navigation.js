import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { authSelectors } from "../../../redux/auth";

const Navigation = ({isAuth}) => {
    return (
        <>
        <NavLink to="/" activeClassName="">Home</NavLink>
        {!!isAuth && <NavLink to="/contacts" activeClassName="">Contacts</NavLink>}
        </>
    )
}

const mstp = state => ({
    isAuth: authSelectors.getIsAuth(state),
})

export default connect(mstp)(Navigation);