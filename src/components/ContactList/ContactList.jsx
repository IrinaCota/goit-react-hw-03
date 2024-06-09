import Contact from '../Contact/Contact';
import css from './ContactList.module.css'

export default function ContactList({ contacts, onContactDelete }) {
  return (
    <ul className={css.list}>
      {contacts.map(({ id, number, name }) => (
        <Contact
          key={id}
          id={id}
          number={number}
          name={name}
          onContactDelete={onContactDelete}
        />
      ))}
    </ul>
  );
}

