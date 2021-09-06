import React, { useState } from 'react';
import PropTypes from 'prop-types';

import s from './ContactList.module.css';

function ContactList({ contacts, onClick }) {
  return (
    <ul className={s.list}>
      {contacts.map(contact => (
        <li className={s.item} key={contact.id}>
          {contact.name}:<span>{contact.number}</span>
          <button
            className={s.button}
            onClick={() => onClick(contact.id)}
            type="button"
          >
            delete
          </button>
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
    }),
    {},
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};
export default ContactList;
