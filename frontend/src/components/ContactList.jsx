import ContactItem from "./ContactItem";
import PropTypes from "prop-types";

const ContactList = ({ contacts, editContact, deleteContact }) => {
  return (
    <ul>
      {contacts.map((contact) => (
        <ContactItem
          key={contact.id}
          contact={contact}
          editContact={editContact}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  editContact: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
