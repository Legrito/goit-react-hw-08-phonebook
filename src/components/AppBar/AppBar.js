import { Navigation } from './Navigation';
import { AuthNav } from './AuthNav';
import { UserMenu } from './UserMenu';
import { connect } from 'react-redux';
import { authSelectors } from '../../redux/auth';

const AppBar = ({isAuth}) => {
    return (
        <>
        <Navigation />
        {isAuth ? <UserMenu /> : <AuthNav />}
        </>
    )
}

const mstp = state => ({
    isAuth: authSelectors.getIsAuth(state),
})

export default connect(mstp)(AppBar);