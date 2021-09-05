import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from "./Components/ContactForm";
import ContactList from './Components/ContactList';
import Filter from "./Components/Filter";

export default function App() {

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]);

    useEffect(() => {
      const contacts = localStorage.getItem('contacts');
      setContacts(JSON.parse(contacts))
    }, [])


useEffect(()=>{
  localStorage.setItem('contacts', JSON.stringify(contacts))
}, [contacts])

  const handleChangeName = e => setName(e.target.value);
  const handleChangeNumber = e => setNumber(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();

    if(contacts.some((contact)=> contact.name === name)) {
      alert(`${name} is already in contacts.`);
      e.target.reset()
      return;
    }
    setContacts([...contacts, {name, number, id: uuidv4()}])
    e.target.reset()
  }

  const filterByName = (e) => setFilter(e.target.value.toLowerCase());

  const getFilterName = () => contacts.filter(contact=> contact.name.toLocaleLowerCase().includes(filter));

  const deleteContact = (id) => setContacts(contacts.filter(contact=>contact.id !== id));
  

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm
          onSubmit={handleSubmit}
          onChangeName={handleChangeName}
          onChangeNumber={handleChangeNumber}
        />
      <h2>Contacts</h2>
      <Filter
        filtredName={filterByName}
      />
      <ContactList
        contacts={getFilterName()}
        deleteContact={deleteContact}  
        />
    </div>
  )
  }