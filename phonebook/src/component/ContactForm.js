import React, { useState, useEffect } from 'react'
import { Form, Button } from "react-bootstrap"
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const ContactForm = () => {

  // react-form : type할때마다 input에 있는 값을 update할 수 있도록 state에 세팅

  const [name, setName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState(0);
  const dispatch = useDispatch()

  /* store값 확인 */
  // useSelector는 최상위에서 호출되어야 한다.
  const contactList = useSelector((state) => state.contactList)

  useEffect(() => {
    console.log(contactList)
  }, [contactList])
  /*  */

  const addContact = (e) => {
    e.preventDefault();
    if (name !== "" && phoneNumber !== 0) {
      dispatch({ type: "ADD_CONTACT", payload: { name: name, phoneNumber: phoneNumber } })
      // dispatch : reducer에게 action객체를 보냄
    } else {
      alert("이름이나 전화번호를 잘못 기입하셨습니다.")
    }

  }

  return (
    <div className='contact-content1'>
      <h2>Register</h2>
      <Form onSubmit={addContact}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>이름</Form.Label>
          <Form.Control type="text" placeholder="이름을 입력하세요" onChange={(e) => { setName(e.target.value) }} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPhoneNumber">
          <Form.Label>전화번호</Form.Label>
          <Form.Control type="number" placeholder="전화번호를 입력하세요" onChange={(e) => { setPhoneNumber(e.target.value) }} />
        </Form.Group>
        <Button variant="primary" type="submit">
          등록하기
        </Button>
      </Form>
    </div>

  )
}

export default ContactForm
