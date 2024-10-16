import React from "react";
import "./ContactItem.css"
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";

const ContactItem = ({ item }) => {

  const dispatch = useDispatch();

  const formatPhoneNumber = (onlyNumber) => {
    const tempStr = onlyNumber.toString();
    return `${tempStr.slice(0, 3)}-${tempStr.slice(3, 7)}-${tempStr.slice(7)}`;
  }

  const deleteContact = (id) => {
    dispatch({ type: "DELETE_CONTACT", payload: { id: id } })
  }

  return (
    <div className="ContactItem">
      <div className="img-box">
        <img
          width={50}
          src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg"
          alt="unknown"
        />
      </div>
      <div className="contact-item-list">
        <p className="contact-item-name">{item.name}</p>
        <p className="contact-item-phone">{formatPhoneNumber(item.phoneNumber)}</p>
      </div>
      <Button onClick={() => deleteContact(item.id)} variant="outline-danger"><FontAwesomeIcon icon={faTrash} /></Button>
    </div >

  );
};

export default ContactItem;
