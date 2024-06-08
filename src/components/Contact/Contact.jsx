import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css";
import PropTypes from 'prop-types';

export default function Contact({ name, contactNumber, onContactDelete }) {
  return (
    <div className={css.card}>
      <div className={css.info}>
        <p>
          <FaUser className={css.icon} />
          {name}
        </p>
        <p>
          <FaPhoneAlt className={css.icon} />
          {contactNumber}
        </p>
      </div>
      <button
        className={css.btn}
        onClick={() => {
          onContactDelete(name);
        }}
      >
        Delete
      </button>
    </div>
  );
}

Contact.propTypes = {
  name: PropTypes.string,
  contactNumber: PropTypes.string,
  onContactDelete: PropTypes.func,
};