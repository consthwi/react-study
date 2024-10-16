import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";

function ContactForm() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(0);
  const dispatch = useDispatch();

  const addContact = (e) => {
    e.preventDefault();
    // 추가버튼을 누르면, name과 phoneNumber를 store로 보내야 함
    // dispatch({type: "ADD_CONTACT", payload: {name: name, phoneNumber: phoneNumber}});
    dispatch({ type: "ADD_CONTACT", payload: { name, phoneNumber } });
    // dispatch는 type, payload 두 key값을 가진다.
  };

  return (
    <Form onSubmit={addContact}>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>이름</Form.Label>
        <Form.Control
          type="text"
          placeholder="이름을 입력하세요"
          onChange={(e) => {
            setName(e.target.value);
          }}
          // form에 typing할떄마다 name의 state가 update된다.
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicContact">
        <Form.Label>전화번호</Form.Label>
        <Form.Control
          type="number"
          placeholder="전화번호를 입력하세요"
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        {/* Button의 type이 submit이면 상위 Form 컴포넌트에게 onSubmit event로 사용한다 */}
        추가
      </Button>
    </Form>
  );
}

export default ContactForm;
