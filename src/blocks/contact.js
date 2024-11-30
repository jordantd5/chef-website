import React, { useState } from "react";

function TextInput({ type = "text", label }) {
  const [value, setValue] = useState("");

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <div className="input-container">
      <input type={type} value={value} onChange={handleChange} />
      <label className={value && "filled"} htmlFor="name">
        {label}
      </label>
    </div>
  );
}

function TextAreaInput({ label }) {
  const [value, setValue] = useState("");

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <div className="input-container textarea-container">
      <textarea value={value} onChange={handleChange} />
      <label className={value && "filled"} htmlFor="name">
        {label}
      </label>
    </div>
  );
}

function Radio() {
  const [value, setValue] = useState("email");

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <div className="radio-container">
      <p>Preferred communication</p>
      <div className="switch-field">
        <input
          type="radio"
          id="radio-one"
          name="switch-one"
          value="email"
          checked={value === "email"}
          onChange={handleChange}
        />
        <label htmlFor="radio-one">Email</label>
        <input
          type="radio"
          id="radio-two"
          name="switch-one"
          value="text"
          checked={value === "text"}
          onChange={handleChange}
        />
        <label htmlFor="radio-two">Text</label>
      </div>
    </div>
  );
}

function Contact() {
  function handleSubmit(event) {
    event.preventDefault();
    console.log("hi");
  }
  return (
    <div className="contact">
      <form onSubmit={handleSubmit}>
        <TextInput label="Full Name" />
        <TextInput label="Phone Number" />
        <TextInput label="Email" />
        <Radio />
        <TextAreaInput label="I'm interested in..." />
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
