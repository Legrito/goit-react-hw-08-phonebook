import './App.css';
import { Route, Switch } from 'react-router-dom';
import {HomeView} from './views/HomeView';
import { RegisterView } from './views/RegisterView';
import { LoginView } from './views/LoginView';
import { ContactsView } from './views/ContactsView';
import { AppBar } from './components/AppBar';
import { Container } from './components/Container';



const App = () => {
    return (
      <Container>
      <AppBar isAuth="false"/>
      
      <Switch>
        <Route exact path='/' component={HomeView} />
        <Route path='/register' component={RegisterView} />
        <Route path='/login' component={LoginView} />
        <Route path='/contacts' component={ContactsView} />
      </Switch>
      </Container>
    )
  }

export default App;
