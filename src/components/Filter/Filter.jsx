import React from 'react';
import shortid from 'shortid';
import s from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => {
  const id = shortid.generate();
  return (
    <>
      <label htmlFor={id} className={s.label}>
        Find contacts by name{' '}
      </label>
      <input
        className={s.input}
        id={id}
        type="text"
        value={value}
        onChange={onChange}
      />
    </>
  );
};
Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
export default Filter;
