import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import s from './Phonebook.module.css';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
function Phonebook() {
  const [contactData, setContactData] = useState(
    JSON.parse(window.localStorage.getItem('contacts')) ?? [],
  );

  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contactData));
  }, [contactData]);

  const formSubmitHandler = data => {
    const dataNameNormalized = data.name.toLowerCase();
    const findItem = contactData.find(
      contact => contact.name.toLowerCase() === dataNameNormalized,
    );
    if (findItem) {
      alert(`${findItem.name} is already in contacts`);
    } else {
      setContactData(prevState => [...prevState, data]);
    }
  };
  const listDeleteHandler = id => {
    setContactData(contactData.filter(item => id !== item.id));
  };

  const onFilterChange = e => {
    setFilter(e.currentTarget.value);
  };

  const normalizeFilter = filter.toLowerCase();
  const filteredContacts = contactData.filter(contact =>
    contact.name.toLowerCase().includes(normalizeFilter),
  );
  return (
    <>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm onSubmitHandler={formSubmitHandler} />
      <h2 className={s.subTitle}>Contacts</h2>
      <Filter value={filter} onChange={onFilterChange} />
      <ContactList contacts={filteredContacts} onClick={listDeleteHandler} />
    </>
  );
}

Phonebook.propTypes = {
  contacts: PropTypes.array,
};
export default Phonebook;
