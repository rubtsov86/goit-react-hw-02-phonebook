import React from 'react';
import { nanoid } from 'nanoid';

const ContactsList = ({ arrayOfNames }) => {
    
    
    return (
        <ul>
            {arrayOfNames.map(name => <li key={nanoid()}>{name}</li>)}
        </ul>
    )
}

export default ContactsList;

