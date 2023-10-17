import { ContactListItem } from 'components/ContactItem/ContactItem';
import React, { Component } from 'react';

export default class ContactsList extends Component {
  // componentDidMount() {
  //   const localData = localStorage.getItem('contacts');
  //   if (!localData || JSON.parse(localData).length === 0) {
  //     this.props.updateContactsFromLocalStorage(this.props.defaultContacts);
  //   } else {
  //     this.props.updateContactsFromLocalStorage(JSON.parse(localData));
  //   }
  // }

  componentDidUpdate(prevProps) {
    if (prevProps.contacts.length !== this.props.contacts.length) {
      localStorage.setItem('contacts', JSON.stringify(this.props.contacts));
    }
  }

  deleteContact = id => {
    this.props.deleteContact(id);
  };
  render() {
    const { contacts, filter } = this.props;

    const filteredContacts = filter
      ? contacts.filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
      : contacts;

    return (
      <div>
        <ul>
          {filteredContacts.map(contact => {
            return (
              <ContactListItem
                key={contact.id}
                contact={contact}
                deleteContact={this.deleteContact}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
