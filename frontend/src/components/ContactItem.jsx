import { useState } from "react";
import PropTypes from "prop-types";

const ContactItem = ({ contact, editContact, deleteContact }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(contact.name);
  const [editedEmail, setEditedEmail] = useState(contact.email);
  const [editedPhone, setEditedPhone] = useState(contact.phone);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    // Add validation logic here
    if (!editedName || !editedEmail || !editedPhone) {
      alert("Please fill in all fields.");
      return;
    }
    editContact(contact.id, {
      name: editedName,
      email: editedEmail,
      phone: editedPhone,
    });
    setIsEditing(false);
  };

  const handleDelete = () => {
    deleteContact(contact.id);
  };

  return (
    <li className="flex gap-4">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
          />
          <input
            type="email"
            value={editedEmail}
            onChange={(e) => setEditedEmail(e.target.value)}
          />
          <input
            type="tel"
            value={editedPhone}
            onChange={(e) => setEditedPhone(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <span>{contact.name}</span>
          <span>{contact.email}</span>
          <span>{contact.phone}</span>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
  editContact: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
