import React, { useCallback, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./ProductDetail.css";

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);

  const getProductDetail = useCallback(async () => {
    let url = `http://localhost:5000/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProduct(data);
  }, [id]);

  // API호출은 항상 useEffect
  useEffect(() => {
    getProductDetail();
  }, [getProductDetail]);
  return (
    <Container>
      <Row>
        <Col className="product-img">
          <img src={product?.img} alt={`products/${id}img`} />
        </Col>
        <Col>
          <h2 className="product-title">{product?.title}</h2>
          <p className="product-price">{`₩${product?.price}`}</p>
          <p>{product && product.choice ? "Conscious choice" : ""}</p>

          <div class="product-size">
            <select class="custom-select">
              <option value="" selected disabled>
                사이즈 선택
              </option>
              {product?.size.map((item, idx) => {
                return (
                  <>
                    <option value={idx + 1}>{item}</option>;
                  </>
                );
              })}
            </select>
          </div>

          <button className="product-add-btn">추가</button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
