import React, { useRef, useState } from "react";
import { Close } from "@mui/icons-material";
import { send } from "emailjs-com";
import "../styles/contact/contact.css";

const Contact = () => {
  const [clicked, setClicked] = useState(false);
  const [errorMessage, setError] = useState("");

  const HandleClick = (e) => {
    e.preventDefault();
    setClicked(!clicked);
    if (!clicked) {
      setError("");
      document.getElementsByTagName("input").value = "";
    }
  };

  const ContactForm = () => {
    const form = useRef();
    const [toSend, setToSend] = useState({
      user_name: "",
      user_email: "",
      message: ""
    });
    const validate = () => {
      if (
        toSend.user_name.length === 0 ||
        toSend.user_email.length === 0 ||
        toSend.message.length === 0
      ) {
        setError("You must complete all fields to submit");
        return false;
      } else {
        setError("Sent!");
        return true;
      }
    };

    const HandleChange = (e) => {
      setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    const SendEmail = (e) => {
      e.preventDefault();
      if (validate()) {
        send(
          "service_2tr114i",
          "template_lqxz02h",
          toSend,
          "user_Q9BNYVVEKmF3inZZZBYp5"
        )
          .then((response) => {
            console.log("SUCCESS!", response.status, response.text);
          })
          .catch((err) => {
            console.log("FAILED...", err);
          });
      }
    };

    return (
      <form className="form" onSubmit={SendEmail}>
        <button onClick={HandleClick}>
          <Close className="exit" />
        </button>

        <div className="error">
          {errorMessage.length > 0 ? <h4>{errorMessage}</h4> : <h4></h4>}
        </div>
        <div className="section">
          <label>Name</label>
          <input
            type="text"
            name="user_name"
            placeholder="enter your name"
            value={toSend.user_name}
            onChange={HandleChange}
          />
        </div>
        <div className="section">
          <label>Email</label>
          <input
            type="email"
            name="user_email"
            placeholder="enter your email"
            value={toSend.user_email}
            onChange={HandleChange}
          />
        </div>
        <div className="section">
          <label>Message</label>
          <textarea
            name="message"
            placeholder="enter your message"
            type="text"
            // required
            value={toSend.message}
            onChange={HandleChange}
          />
        </div>
        <div className="submit">
          <input className="submit-form" type="submit" value="Send" />
        </div>
      </form>
    );
  };
  return (
    <div className="contact" id="contact">
      <div className="map-container">
        {/* <form action="http://maps.google.com/maps" method="get" target="_blank">
          <input
            type="hidden"
            name="daddr"
            value="Soween Hair Salon, 466 Nostrand Ave., Brooklyn, NY 11216"
          />
          <input type="submit" value="Get directions" />
        </form> */}
        <iframe
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=Soween%20Hair%20Salon,%20466%20Nostrand%20Ave.,%20Brooklyn,%20NY%2011216&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
        ></iframe>
      </div>
      <div className="contact-info">
        {clicked ? (
          <ContactForm />
        ) : (
          <div
            id="form"
            className="form-container"
            style={clicked ? { display: "none" } : {}}
          >
            <h4>Hours</h4>
            <p>10am - 7pm Everyday</p>
            <h4>Location</h4>
            <a
              href="https://www.google.com/maps/dir//Soween+Hair+Salon,+Nostrand+Avenue,+Brooklyn,+NY/@40.6772554,-73.9577991,15z/data=!3m1!5s0x89c25b905bd8448d:0x3119d8326359c48d!4m9!4m8!1m0!1m5!1m1!1s0x89c25b7e05dc867b:0xd7c4f49b3a5e3340!2m2!1d-73.9503329!2d40.6828979!3e3"
              target="_blank"
            >
              466 Nostrand Avenue, Brooklyn, NY 11216
            </a>
            <h4>Contact Number</h4>
            <a href="tel:718-789-2655">(718) 789-2655</a>
            {/* <ContactForm /> */}
            <h4> For General Inqueries</h4>
            <button className="email-button" onClick={HandleClick}>
              {" "}
              Email Us
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;

// AIzaSyArOIzLZ3p6BINA08oNgD3_s8lJmxWWHLI
