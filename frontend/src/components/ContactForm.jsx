import { useState } from "react";
import PropTypes from "prop-types";

const ContactForm = ({ addContact }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add validation logic here
    if (!name || !email || !phone) {
      alert("Please fill in all fields.");
      return;
    }
    addContact({ name, email, phone });
    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label>Phone:</label>
      <input
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button type="submit">Add Contact</button>
    </form>
  );
  
};

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export default ContactForm;
