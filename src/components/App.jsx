import React from 'react';
import Phonebook from "./Phonebook";
import ContactsList from './ContactsList';


export class App extends React.Component {

  state = {
        contacts: [],
    }

    
  
  formSubmitHandler = data => {
    this.setState(prevState => ({contacts: [...prevState.contacts, data.name]}))
  }

  render() {

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
     
      <Phonebook onSubmit={this.formSubmitHandler }/>
      <ContactsList arrayOfNames={this.state.contacts} />
    </div>)
  }
    
 
};
