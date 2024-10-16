import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";

const SearchBox = () => {
  const [keyword, setKeyword] = useState("");
  let dispatch = useDispatch();
  // let { contact } = useSelector((state) => state);

  const searchByName = (e) => {
    e.preventDefault();
    // dispatch({ type: "SEARCH_BY_USERNAME", payload: { keyword: keyword } });
    dispatch({ type: "SEARCH_BY_USERNAME", payload: { keyword } });
  };

  return (
    <Form onSubmit={searchByName}>
      <Row>
        <Col lg={10}>
          <Form.Control
            type="text"
            placeholder="이름을 입력하세요"
            onChange={(e) => setKeyword(e.target.value)}
          />
        </Col>
        <Col lg={2}>
          <Button>찾기</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchBox;
