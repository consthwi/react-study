import React, { useCallback, useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

const ProductAllPage = () => {
  // ui에 보여주는 건 useState에 저장하여 사용한다. (인터랙션)
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();

  const getProducts = useCallback(async () => {
    let searchQuery = query.get("q") || "";
    // console.log(searchQuery);
    let url = `https://my-json-server.typicode.com/Hwiwon-source/react-project3/products?q=${searchQuery}`;
    let response = await fetch(url);
    if (response.ok) {
      let data = await response.json();
      console.log(data);
      setProductList(data);
    } else {
      console.error("Failed to fetch products");
    }
  }, [query]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);
  // query값이 update되면 getProducts() 재실행

  return (
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
  );
};

export default ProductAllPage;
