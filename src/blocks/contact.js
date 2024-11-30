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
  const [value, setValue] = useState("");

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <div className="radio-container">
      <p>Preferred communication</p>
      <div class="switch-field">
        <input
          type="radio"
          id="radio-one"
          name="switch-one"
          value="email"
          checked
          onChange={handleChange}
        />
        <label for="radio-one">Email</label>
        <input
          type="radio"
          id="radio-two"
          name="switch-one"
          value="text"
          onChange={handleChange}
        />
        <label for="radio-two">Text</label>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="contact">
      <form>
        <TextInput label="Full Name" />
        <TextInput label="Phone Number" />
        <TextInput label="Email" />
        <Radio />
        <TextAreaInput label="I'm interested in..." />
      </form>
    </div>
  );
}

export default Contact;
