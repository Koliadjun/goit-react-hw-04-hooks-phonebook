import React, { useState } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

import s from './ContactForm.module.css';
function ContactForm({ onSubmitHandler }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = e => {
    const currentTarget = e.currentTarget;
    switch (currentTarget.name) {
      case 'name': {
        setName(currentTarget.value);
        break;
      }
      case 'number': {
        setNumber(currentTarget.value);
        break;
      }
      default: {
        throw new Error('No such input!');
      }
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmitHandler({ id: shortid.generate(), name, number });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const inputNameId = shortid.generate();
  const inputNumberId = shortid.generate();
  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label htmlFor={inputNameId}>Name</label>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        value={name}
        onChange={handleInputChange}
        id={inputNameId}
      />
      <label htmlFor={inputNumberId}>Number</label>
      <input
        id={inputNumberId}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required
        value={number}
        onChange={handleInputChange}
      />
      <button type="submit">add contact</button>
    </form>
  );
}

ContactForm.propTypes = {
  onSubmitHandler: PropTypes.func.isRequired,
};

export default ContactForm;
