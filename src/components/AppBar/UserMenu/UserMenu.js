import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../../redux/auth';
import { Button } from 'react-bootstrap';
import ava from '../../../data/avatar.png';

const UserMenu = ({name, onLogout}) => {
    return (
        <div className="user__menu">
            <div className="ava__thumb">
                <img src={ava} className="user__avatar" alt="User avatar" />
            </div>
            <p className="greet">Hello, {name}</p>
            <Button onClick={onLogout} variant="outline-success">Log out</Button>
            {/* <button type="button" onClick={onLogout}>Log out</button> */}
        </div>
        )
}

const mstp = state => ({
    name: authSelectors.getUserName(state),
});

const mdtp = {
    onLogout: authOperations.logout,
}

export default connect(mstp, mdtp)(UserMenu);