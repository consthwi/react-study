import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import "./ControlBox.css"
import { faRotateRight, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ControlBox = () => {
  const [keyword, setKeyword] = useState("");
  let dispatch = useDispatch();

  // store item 확인
  // let storeKeyword = useSelector((state) => state.keyword)
  // useEffect(() => {
  //   console.log(storeKeyword)
  // }, [storeKeyword])

  const searchByName = (e) => {
    e.preventDefault();
    console.log("event fire")
    // dispatch({ type: "SEARCH_BY_USERNAME", payload: { keyword: keyword } });
    dispatch({ type: "SEARCH_BY_USERNAME", payload: { keyword: keyword } });
  };

  const resetContact = () => {
    dispatch({ type: "RESET_CONTACT" });
  }

  return (
    <div className="ControlBox">
      <Form onSubmit={searchByName}>
        <Form.Label>연락처 검색</Form.Label>
        <div className="search-input-area">
          <Form.Control
            type="text"
            placeholder="검색명을 입력하세요"
            onChange={(e) => setKeyword(e.target.value)}
          />
          <Button onClick={searchByName}><FontAwesomeIcon icon={faSearch} /></Button>
          <Button onClick={resetContact}><FontAwesomeIcon icon={faRotateRight} /></Button>
        </div>
      </Form>
    </div>

  );
};

export default ControlBox;
