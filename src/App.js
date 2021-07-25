import './App.css';
import { Route, Switch } from 'react-router-dom';
import {HomeView} from './views/HomeView';
import { RegisterView } from './views/RegisterView';
import { LoginView } from './views/LoginView';
import { ContactsView } from './views/ContactsView';
import { AppBar } from './components/AppBar';
import { Container } from './components/Container';
import { Component } from 'react';
import { authOperations } from './redux/auth/auth-operations';
import { connect } from 'react-redux';



// const App = () => {
//     return (
//       <Container>
//       <AppBar />
      
//       <Switch>
//         <Route exact path='/' component={HomeView} />
//         <Route path='/register' component={RegisterView} />
//         <Route path='/login' component={LoginView} />
//         <Route path='/contacts' component={ContactsView} />
//       </Switch>
//       </Container>
//     )
//   }

class App extends Component {
  render() {
    return (
        <Container>
        <AppBar />
        
        <Switch>
          <Route exact path='/' component={HomeView} />
          <Route path='/register' component={RegisterView} />
          <Route path='/login' component={LoginView} />
          <Route path='/contacts' component={ContactsView} />
        </Switch>
        </Container>
      )
  }
}

const mdtp = {
  onGetCurrentUser: authOperations.getCurrentUser,
}

export default connect(null, mdtp)(App);
