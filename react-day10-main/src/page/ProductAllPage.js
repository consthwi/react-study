import React, { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";

const ProductAllPage = () => {
  // ui에 보여주는 건 useState에 저장하여 사용한다. (인터랙션)
  const [productList, setProductList] = useState([]);
  const getProducts = async () => {
    let url = `http://localhost:5000/products`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <Container>
        <Row>
          {productList.map((i) => {
            return (
              <Col lg={3} sm={6}>
                <ProductCard item={i} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAllPage;
