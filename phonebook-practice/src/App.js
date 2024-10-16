import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactForm from "./component/ContactForm";
import ContactList from "./component/ContactList";

// 1. 왼쪽에는 연락처 등록하는 form, 오른쪽에는 연락처 search와 list
// 2. list에 유저 이름과 전화번호를 추가할 수 있다.
// 2** ContactForm과 ContactList는 형제 Component이기 때문에 Redux를 사용해야하며, ContactForm에서 생성한 state는 store에 보내야 한다.

// 3. list에 item이 몇개 있는지 확인할 수 있다.
// 4. 사용자가 유저를 이름검색으로 찾을 수 있다.

function App() {
  return (
    <div className="App">
      <h1 className="title">연락처</h1>
      <Container className="contents-wrapper">
        <Row>
          <Col>
            <ContactForm />
          </Col>
          <Col>
            <ContactList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
