import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function TextInput({ type = "text", label, name, value, handleChange }) {
  return (
    <div className="input-container">
      <input
        type={type}
        value={value}
        name={name}
        onChange={(e) => handleChange(e.target.value)}
      />
      <label className={value && "filled"} htmlFor={name}>
        {label}
      </label>
    </div>
  );
}

function TextAreaInput({ label, name, value, handleChange }) {
  return (
    <div className="input-container textarea-container">
      <textarea
        value={value}
        name={name}
        onChange={(e) => handleChange(e.target.value)}
      />
      <label className={value && "filled"} htmlFor={name}>
        {label}
      </label>
    </div>
  );
}

function Radio({ value, handleChange }) {
  return (
    <div className="radio-container">
      <p>Preferred communication</p>
      <div className="switch-field">
        <input
          type="radio"
          id="contact_email"
          name="contact_email"
          value="email"
          checked={value === "email"}
          onChange={(e) => handleChange(e.target.value)}
        />
        <label htmlFor="contact_email">Email</label>
        <input
          type="radio"
          id="contact_text"
          name="contact_text"
          value="text"
          checked={value === "text"}
          onChange={(e) => handleChange(e.target.value)}
        />
        <label htmlFor="contact_text">Text</label>
      </div>
    </div>
  );
}

function Contact() {
  const clearForm = {
    from_name: "",
    phone: "",
    email: "",
    contact_preference: "email",
    message: "",
  };

  const [btnText, setBtnText] = useState("Submit");
  const [formValues, setFormValues] = useState(clearForm);

  const form = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    setBtnText("Sending...");
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setFormValues(clearForm);
    setBtnText("Submit");
  }

  return (
    <div className="contact">
      <form ref={form} onSubmit={handleSubmit}>
        <TextInput
          label="Full Name"
          name="from_name"
          value={formValues.from_name}
          handleChange={(newVal) =>
            setFormValues({ ...formValues, from_name: newVal })
          }
        />
        <TextInput
          label="Phone Number"
          name="phone"
          value={formValues.phone}
          handleChange={(newVal) =>
            setFormValues({ ...formValues, phone: newVal })
          }
        />
        <TextInput
          label="Email"
          name="email"
          value={formValues.email}
          handleChange={(newVal) =>
            setFormValues({ ...formValues, email: newVal })
          }
        />
        <Radio
          value={formValues.contact_preference}
          handleChange={(newVal) =>
            setFormValues({ ...formValues, contact_preference: newVal })
          }
        />
        <TextAreaInput
          label="I'm interested in..."
          name="message"
          value={formValues.message}
          handleChange={(newVal) =>
            setFormValues({ ...formValues, message: newVal })
          }
        />
        <button type="submit" className="submit-button">
          {btnText}
        </button>
      </form>
    </div>
  );
}

export default Contact;
