import React, { useState } from "react";

function TextInput({ type = "text", label }) {
  const [value, setValue] = useState("");

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <div className="input-container">
      <input type={type} value={value} onChange={handleChange} />
      <label className={value && "filled"} htmlFor={name}>
        {label}
      </label>
    </div>
  );
}

function Contact() {
  return (
    <div className="contact">
      <form>
        <TextInput label="Name" />
      </form>
    </div>
  );
}

export default Contact;
