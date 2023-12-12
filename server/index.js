import express, { json } from "express";
import cors from "cors";
const app = express();
const port = 5000;

app.use(cors());
app.use(json());

let contacts = [];

app.get("/contacts", (req, res) => {
  res.json(contacts);
});

app.post("/contacts", (req, res) => {
  const newContact = { id: Date.now(), ...req.body };
  contacts.push(newContact);
  res.json(newContact);
});

app.put("/contacts/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const updatedContact = req.body;
  contacts = contacts.map((contact) =>
    contact.id === id ? { ...contact, ...updatedContact } : contact
  );
  res.json(updatedContact);
});

app.delete("/contacts/:id", (req, res) => {
  const id = parseInt(req.params.id);
  contacts = contacts.filter((contact) => contact.id !== id);
  res.json({ message: "Contact deleted successfully" });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
