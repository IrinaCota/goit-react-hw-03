import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import PropTypes from "prop-types";

export default function ContactList({ contacts, onContactDelete }) {
  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => (
        <Contact
          key={id}
          name={name}
          contactNumber={number}
          onContactDelete={onContactDelete}
        />
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
  ),
  onContactDelete: PropTypes.func,
};
