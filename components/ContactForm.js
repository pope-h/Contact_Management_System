import { useState } from "react";
import PropTypes from "prop-types";
const ContactForm = ({
  addContact
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    // Add validation logic here
    if (!name || !email || !phone) {
      alert("Please fill in all fields.");
      return;
    }
    addContact({
      name,
      email,
      phone
    });
    setName("");
    setEmail("");
    setPhone("");
  };
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit,
    className: "flex flex-col gap-4 w-64"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col"
  }, /*#__PURE__*/React.createElement("label", {
    className: "text-lg text font-semibold px-2 text-blue-900"
  }, "Name:"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: name,
    onChange: e => setName(e.target.value),
    className: "border-4 border-black px-2 h-10"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col"
  }, /*#__PURE__*/React.createElement("label", {
    className: "text-lg text font-semibold px-2 text-blue-900"
  }, "Email:"), /*#__PURE__*/React.createElement("input", {
    type: "email",
    value: email,
    onChange: e => setEmail(e.target.value),
    className: "border-4 border-black px-2 h-10"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col"
  }, /*#__PURE__*/React.createElement("label", {
    className: "text-lg text font-semibold px-2 text-blue-900"
  }, "Phone:"), /*#__PURE__*/React.createElement("input", {
    type: "tel",
    value: phone,
    onChange: e => setPhone(e.target.value),
    className: "border-4 border-black px-2 h-10"
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "bg-black text-blue-900 h-10 rounded-md hover:bg-white hover:text-black text-lg font-medium"
  }, "Add Contact"));
};
ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired
};
export default ContactForm;