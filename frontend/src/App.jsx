import { useState, useEffect } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

const App = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    // Fetch initial contacts from the backend when the component mounts
    fetch("http://localhost:5000/contacts")
      .then((response) => response.json())
      .then((data) => setContacts(data))
      .catch((error) => console.error("Error fetching contacts:", error));
  }, []);

  const addContact = (newContact) => {
    // Send a POST request to add a new contact
    fetch("http://localhost:5000/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newContact),
    })
      .then((response) => response.json())
      .then((data) => setContacts([...contacts, data]))
      .catch((error) => console.error("Error adding contact:", error));
  };

  const editContact = (id, updatedContact) => {
    // Send a PUT request to update an existing contact
    fetch(`http://localhost:5000/contacts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedContact),
    })
      .then((response) => response.json())
      .then((data) =>
        setContacts(
          contacts.map((contact) => (contact.id === id ? data : contact))
        )
      )
      .catch((error) => console.error("Error updating contact:", error));
  };

  const deleteContact = (id) => {
    // Send a DELETE request to delete an existing contact
    fetch(`http://localhost:5000/contacts/${id}`, {
      method: "DELETE",
    })
      .then(() => setContacts(contacts.filter((contact) => contact.id !== id)))
      .catch((error) => console.error("Error deleting contact:", error));
  };

  return (
    <div className="bg-orange-800">
      <h1>Contact Management System</h1>
      <ContactForm addContact={addContact} />
      <ContactList
        contacts={contacts}
        editContact={editContact}
        deleteContact={deleteContact}
      />
    </div>
  );
};

export default App;
