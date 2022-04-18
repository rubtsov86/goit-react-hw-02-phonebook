import React from 'react';
import Phonebook from "./Phonebook";
import ContactsList from './ContactsList';


export class App extends React.Component {

  state = {
        contacts: [],
        name: ''
    }

    handleSubmit = evt => {
        evt.preventDefault();
        
      this.state.contacts.push(evt.currentTarget.elements.name.value);

    }

  render() {
    const { contacts, name } = this.state;

    return (<div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        textTransform: 'uppercase',
        color: '#010101',
      }}
    >
     
      <Phonebook
        handleSubmit={this.handleSubmit}
      />
      <ContactsList arrayOfNames={contacts}/>
    </div>)
  }
    
 
};
