import { connect } from 'react-redux';
import { ContactItem } from './ContactItem';
import { useEffect } from 'react';
import styles from './ContactList.module.css';
import operations from './../../redux/operations';
import { getLoading, getFilteredContacts } from '../../redux/selectors';

const ContactList = ({ contacts, onClick, getContacts, loading}) => {
  useEffect(() => getContacts(),
  [getContacts])
    return (
    <ul className={styles.list}>
      {loading && 'Loading...'}
      < ContactItem contacts={contacts} onClick={(e) => onClick(e.target.name)}  />
      {contacts.length <= 0 && !loading && <p>No contacts</p>}
      </ul>
    )
}

const mapStatetoProps = state => ({
  contacts: getFilteredContacts(state),
  loading: getLoading(state)
})

const mapDispatchToProps = dispatch => ({
  onClick: id => dispatch(operations.deleteContact(id)),
  getContacts: () => dispatch(operations.getContacts())
})


export default connect(mapStatetoProps, mapDispatchToProps)(ContactList)