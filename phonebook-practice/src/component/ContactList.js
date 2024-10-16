import React, { useState, useEffect } from "react";
import SearchBox from "./SearchBox";
import ContactItem from "./ContactItem";
import { useSelector } from "react-redux";

const ContactList = () => {
  const { contactList, keyword } = useSelector((state) => state);
  // useSelector는 객체를 return한다.
  let [filteredList, setFilteredList] = useState([]);
  // state list : 초기값 [] 세팅

  useEffect(() => {
    if (keyword !== "") {
      let list = contactList.filter((item) => item.name.includes(keyword));
      setFilteredList(list);
    } else {
      setFilteredList(contactList);
    }
  }, [contactList, keyword]);

  return (
    <div>
      <SearchBox />
      <div className="contact-list">
        <p>num: {filteredList.length}</p>
        {filteredList.map((item, idx) => (
          <ContactItem key={idx} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ContactList;
