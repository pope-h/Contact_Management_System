import { useState } from "react";
import PropTypes from "prop-types";
const ContactItem = ({
  contact,
  editContact,
  deleteContact
}) => {
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
      phone: editedPhone
    });
    setIsEditing(false);
  };
  const handleDelete = () => {
    deleteContact(contact.id);
  };
  return /*#__PURE__*/React.createElement("li", {
    className: "flex gap-4"
  }, isEditing ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: editedName,
    onChange: e => setEditedName(e.target.value)
  }), /*#__PURE__*/React.createElement("input", {
    type: "email",
    value: editedEmail,
    onChange: e => setEditedEmail(e.target.value)
  }), /*#__PURE__*/React.createElement("input", {
    type: "tel",
    value: editedPhone,
    onChange: e => setEditedPhone(e.target.value)
  }), /*#__PURE__*/React.createElement("button", {
    onClick: handleSave
  }, "Save")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", null, contact.name), /*#__PURE__*/React.createElement("span", null, contact.email), /*#__PURE__*/React.createElement("span", null, contact.phone), /*#__PURE__*/React.createElement("button", {
    onClick: handleEdit
  }, "Edit"), /*#__PURE__*/React.createElement("button", {
    onClick: handleDelete
  }, "Delete")));
};
ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
  editContact: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired
};
export default ContactItem;