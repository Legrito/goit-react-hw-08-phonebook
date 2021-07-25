import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../../redux/auth';

const UserMenu = ({name, onLogout}) => {
    return (
        <div>
            <p>Hello, {name}</p>
            <button type="button" onClick={onLogout}>Log out</button>
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