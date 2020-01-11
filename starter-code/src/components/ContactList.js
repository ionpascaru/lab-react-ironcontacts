import React, { Component } from 'react'
import ContactItem from './ContactItem'
import contactsData from '../../src/data/contacts.json'

class ContactList extends Component {
  state = {
    contacts: []
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ contacts: contactsData })
    }, 1000)
  }

  onClickDeleteContact(contact) {
    this.setState({
      contacts: this.state.contacts.filter(c => c !== contact)
    })
  }

  render() {
    const contactsList = this.state.contacts.map((contact, index) => (
      <ContactItem
        key={index}
        {...contact}
        onClickDelete={() => this.onClickDeleteContact(contact)}
      />
    ))

    return (
      <div className="card-columns">
        {contactsList.length > 0 ? contactsList : 'Loading...'}
      </div>
    )
  }
}

export default ContactList