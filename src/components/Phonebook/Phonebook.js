import React from 'react';


class Phonebook  extends React.Component {
    
    state = {
        name: '',
    }

    handleInput = evt => {
      this.setState({
        [evt.currentTarget.name]: evt.currentTarget.value,
  
      });

    }
    
    handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state)
    this.reset()  
    };
    
    reset = () => {
        this.setState({name: '',})
    }

    render() {
         return (

            <form onSubmit={this.handleSubmit}>
                <label>Name
                    <input
                        type="text"
                        onChange={this.handleInput}
                        name="name"
                        value={this.state.name}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </label>
                <button type="submit">Add contact</button>
            </form>
                
        )
    }
       
    }


export default Phonebook