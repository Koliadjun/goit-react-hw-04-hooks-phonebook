import React, { Component } from 'react';
import PropTypes from 'prop-types';

import s from './ContactList.module.css';

export class ContactList extends Component {
  static defaultProps = {
    contacts: [],
  };

  static propTypes = {
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

  state = { contacts: this.props.contacts };

  handleClick = id => {
    this.props.onClick(id);
  };
  render() {
    const contacts = this.props.contacts;
    return (
      <ul className={s.list}>
        {contacts.map(contact => (
          <li className={s.item} key={contact.id}>
            {contact.name}:<span>{contact.number}</span>
            <button
              className={s.button}
              onClick={() => this.handleClick(contact.id)}
              type="button"
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default ContactList;
