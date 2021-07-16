import styles from './ContactItem.module.css'

export const ContactItem = ({ contacts, onClick }) => {
    return (
    <>
        { contacts.map( contact => {
          return (
          <li className={styles.item} key={contact.id}>{contact.name}: {contact.number}
          <button type="button" name={contact.id} onClick={onClick}>Delete</button></li>
          )
        })}
    </>
    )
};