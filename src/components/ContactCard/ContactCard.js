import React from "react";

import "./ContactCard.css";

function ContactCard() {
  return (
    <div className="contacts">
      <div className="contact-card">
        <img src="http://placekitten.com/300/200" />
        <h3>Mr. Cat</h3>
        <p>Phone: (555) 555-5555</p>
        <p>Email: email@test.com</p>
      </div>
    </div>
  );
}

export default ContactCard;
