import './App.css';
import ContactForm from './components/Form/Form'
import ContactList from './components/ContactsList/ContactList';
import Filter from './components/Filter/Filter';


const App = () => {
    return (
      <div className="App">
      <h1 className="App__title"> Phonebooks </h1>
      <ContactForm />
      <div className="App__contacts__container">
      <h2 className="App__contacts__title"> Contacts </h2>
      <h3 className="App__filter__title"> Find contacts by name </h3>
      <Filter />
      <ContactList />
      </div>
    </div>
    )
  }

export default App;
