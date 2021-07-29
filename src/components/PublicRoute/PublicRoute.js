import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { authSelectors } from '../../redux/auth';

const PublicRoute = ({
    component: Component,
    isAuth,
    redirectTo,
    ...routeProps
}) => (
    < Route 
    {...routeProps} 
    render = {props => 
        isAuth && routeProps.restricted ? 
        <Redirect to={redirectTo} />  
        : < Component {...props} />
    }
    />
);


const mstp = state => ({
    isAuth: authSelectors.getIsAuth(state),
});

export default connect(mstp)(PublicRoute);