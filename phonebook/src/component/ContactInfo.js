import React, { useEffect, useState } from 'react'
import ControlBox from './ControlBox'
import { useSelector } from 'react-redux'
import ContactItem from './ContactItem'

const ContactInfo = () => {

  const contactList = useSelector((state) => { return state.contactList })
  const keyword = useSelector((state) => { return state.keyword })

  const [filteredList, setFilteredList] = useState([])

  // store item 사용
  useEffect(() => {
    if (keyword !== "") {
      let filtered = contactList.filter((item) => { return item.name.includes(keyword) })
      setFilteredList(filtered)
      // console.log(contactList)
    } else {
      setFilteredList(contactList)
    }
  }, [contactList, keyword])

  return (
    <div>
      <h2>Contacts List</h2>
      <ControlBox />
      <div className='contact-items'>
        {filteredList.map((item, idx) => {
          return <ContactItem key={idx} item={item} />
        })}
      </div>
    </div>
  )
}

export default ContactInfo
