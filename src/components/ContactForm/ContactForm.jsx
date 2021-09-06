import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

import s from './ContactForm.module.css';
export class ContactForm extends Component {
  static propTypes = {
    onSubmitHandler: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  handleInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmitHandler({ id: shortid.generate(), ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };
  render() {
    const { name, number } = this.state;
    const inputNameId = shortid.generate();
    const inputNumberId = shortid.generate();
    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <label htmlFor={inputNameId}>Name</label>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={name}
          onChange={this.handleInputChange}
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
          onChange={this.handleInputChange}
        />
        <button type="submit">add contact</button>
      </form>
    );
  }
}

export default ContactForm;
