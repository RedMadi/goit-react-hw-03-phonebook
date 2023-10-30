import { ContactListItem } from 'components/ContactItem/ContactItem';
import React, { Component } from 'react';

export default class ContactsList extends Component {
  deleteContact = id => {
    this.props.deleteContact(id);
  };
  render() {
    const { contacts } = this.props;
    return (
      <div>
        <ul>
          {contacts.map(contact => {
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
