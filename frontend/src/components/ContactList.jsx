import ContactItem from "./ContactItem";
import PropTypes from "prop-types";

const ContactList = ({ contacts, editContact, deleteContact }) => {
  return (
    <ul className="flex flex-col border-4 border-black text-blue-900 text-lg p-4">
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
