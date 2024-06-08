import { useEffect, useState } from 'react';

import './App.css'

import ContactList from '../ContactList/ContactList';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const initialContactsDisplay = () => {
  const savedContactsList = localStorage.getItem('contacts-list');
  return savedContactsList !== null
    ? JSON.parse(savedContactsList)
    : initialContacts;
};

function App() {
  const [contacts] = useState(initialContactsDisplay);

useEffect(() => {
    localStorage.setItem('contacts-list', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactList
      />
    </div>
  );
}


export default App
