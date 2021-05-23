import React, { useState } from "react";
import "./Contact.css";
import { db } from "../../firebase";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        alert("Your message has been submitted");
      })
      .catch((error) => {
        alert(error.message);
      });

    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <div className="app">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Contact Form</h1>
        <label>Name:</label>
        <input
          type="name"
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Message</label>
        <textarea
          name="textarea"
          id=""
          cols="30"
          rows="10"
          placeholder="Enter Your Massage"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
