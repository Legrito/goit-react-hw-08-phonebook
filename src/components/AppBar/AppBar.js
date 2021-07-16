import { Navigation } from './Navigation';
import { AuthNav } from './AuthNav';
import { UserMenu } from './UserMenu';

export const AppBar = ({isAuth}) => {
    return (
        <>
        <Navigation />
        {!isAuth ? <UserMenu /> : <AuthNav />}
        </>
    )
}