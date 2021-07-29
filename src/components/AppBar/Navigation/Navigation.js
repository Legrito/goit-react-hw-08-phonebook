import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { authSelectors } from "../../../redux/auth";

const Navigation = ({isAuth}) => {
    return (
        <>
        <NavLink exact to="/" className="NavLink" activeClassName="NavLink--active">Home</NavLink>
        {!!isAuth && <NavLink to="/contacts" className="NavLink" activeClassName="NavLink--active">Contacts</NavLink>}
        </>
    )
}

const mstp = state => ({
    isAuth: authSelectors.getIsAuth(state),
})

export default connect(mstp)(Navigation);