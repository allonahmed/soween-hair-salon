import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "../styles/contact/contact.css";
import { Close } from "@material-ui/icons";

const ContactForm = (props) => {
  const [clicked, setClicked] = useState(false);

  const HandleClick = (e) => {
    e.preventDefault();
    setClicked(!clicked);
  };
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2tr114i",
        "template_lqxz02h",
        form.current,
        "user_Q9BNYVVEKmF3inZZZBYp5"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form className="form" ref={form} onSubmit={sendEmail}>
      <button onClick={HandleClick}>
        <Close className="exit" clickedX={HandleClick} />
      </button>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};

export default ContactForm;
