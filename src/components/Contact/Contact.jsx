import { FaUser } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';

import PropTypes from 'prop-types';
import css from './Contact.module.css';

export default function Contact({ name, contactNumber}) {
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
      <button className={css.btn}>
        Delete
      </button>
    </div>
  );
}

Contact.propTypes = {
  name: PropTypes.string,
  contactNumber: PropTypes.string,
};