
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ContactForm from './component/ContactForm';
import ContactInfo from './component/ContactInfo';

// 1. UI작업 (좌측 form, 우측 search & list)
// 2. form에 기입한 유저이름과 연락처를
//    list에 추가할 수 있다. ContactItem
// 3. list에 item이 몇 개 있는지 확인할 수 있다. legnth
// 4. list 이름 검색기능. filter()

// component간 state 공유
// * form에 기입한 state를 (onchange, name & phoneNumber state update)
// list에서 사용해야하므로 redux를 사용하는 것이 용이

// redux setting
// 1. Provider
// 2. store사용을 위한 reducer.js 세팅 state, action(type, payload)
// 3. store.js 생성
// 4. Provider store={store}

function App() {
  return (
    <div className="App">
      <h1 className='title'>HB contacts</h1>
      <Container className='App-contents'>
        <Row>
          <Col className="contact-form">
            <ContactForm />
          </Col>
          <Col className="contact-list">
            <ContactInfo />
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default App;
