import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/common.css';
import { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
//import {HomeView} from './views/HomeView';
//import { RegisterView } from './views/RegisterView';
//import { LoginView } from './views/LoginView';
//import { ContactsView } from './views/ContactsView';
import { AppBar } from './components/AppBar';
import { Container } from './components/Container';
import { Component } from 'react';
import { authOperations } from './redux/auth';
import { connect } from 'react-redux';
import { PrivateRoute } from './components/PrivateRoute';
import { PublicRoute } from './components/PublicRoute';

const HomeView = lazy(() => import('./views/HomeView') /* webpackChunkName: "home-view" */);
const RegisterView = lazy(() => import('./views/RegisterView') /* webpackChunkName: "register-view" */);
const LoginView = lazy(() => import('./views/LoginView') /* webpackChunkName: "login-view" */);
const ContactsView = lazy(() => import('./views/ContactsView') /* webpackChunkName: "contacts-view" */);

class App extends Component {

  componentDidMount() {
    this.props.onGetCurrentUser()
  }
  render() {
    return (
        <Container>
        <AppBar />
        {/* <Suspense fallback={<ContactsLoader />}> */}
        <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route exact path='/' component={HomeView} />
          <PublicRoute path='/register' restricted component={RegisterView} redirectTo='/' />
          <PublicRoute path='/login' restricted component={LoginView} redirectTo='/contacts' />
          <PrivateRoute path='/contacts' component={ContactsView} redirectTo='/login' />
        </Switch>
        </Suspense>
        </Container>
      )
  }
}

const mdtp = {
  onGetCurrentUser: authOperations.getCurrentUser,
}

export default connect(null, mdtp)(App);
