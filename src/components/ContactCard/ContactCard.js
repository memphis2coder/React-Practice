import React from "react";

import "./ContactCard.css";

function ContactCard(props) {
  return (
    <div className="contacts">
      <div className="contact-card">
        <img src={props.contact.imgUrl} alt="" />
        <h3>{props.contact.name}</h3>
        <p>Phone: {props.contact.phone}}</p>
        <p>Email: {props.contact.email}</p>
      </div>
    </div>
  );
}

export default ContactCard;
