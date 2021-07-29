import ContactForm from '../components/Form/Form'
import ContactList from '../components/ContactsList/ContactList';
import Filter from '../components/Filter/Filter';
import phone from '../data/contacts.png';

const ContactsView = () => {
    return (
      <div className="App__wrapper">
      <div className="App">
      <h1 className="App__title"> Phonebook </h1>
      <ContactForm />
      <div className="App__contacts__container">
      <h2 className="App__contacts__title"> Contacts </h2>
      <h3 className="App__filter__title"> Find contacts by name </h3>
      <Filter />
      <ContactList />
      </div>
    </div>
    </div>)
}

export default ContactsView;