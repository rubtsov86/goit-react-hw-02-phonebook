import React from 'react';
import s from './Contact.module.css';
import PropTypes from 'prop-types';

const Contact = ({ name, number, deleteContact }) => {
  return (
    <li className={s.item}>
      <span>{name}: </span>
      <span>{number}</span>
      <button className={s.button} name={name} onClick={deleteContact}>
        Delete
      </button>
    </li>
  );
};

export default Contact;

Contact.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
  deleteContact: PropTypes.func,
};
