import { Navigation } from './Navigation';
import { AuthNav } from './AuthNav';
import { UserMenu } from './UserMenu';
import { connect } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import styles from './AppBar.module.css';

const AppBar = ({isAuth}) => {
    return (
        <nav className={styles.main__nav}>
        <Navigation />
        {isAuth ? <UserMenu /> : <AuthNav />}
        </nav>
    )
}

const mstp = state => ({
    isAuth: authSelectors.getIsAuth(state),
})

export default connect(mstp)(AppBar);