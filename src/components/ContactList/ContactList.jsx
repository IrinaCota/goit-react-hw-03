import Contact from '../Contact/Contact';
import css from './ContactList.module.css'
import PropTypes from 'prop-types';

export default function ContactList({ contacts }) {
  return (
    <ul className={css.list}>
      {contacts.map(contact => (
        <li key={contact.id}>
          <Contact data={contact}  />
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  )
};