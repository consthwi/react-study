import React, { useCallback, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./ProductDetail.css";
import ClipLoader from "react-spinners/ClipLoader";

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  const getProductDetail = useCallback(async () => {
    try {
      let url = `https://my-json-server.typicode.com/Hwiwon-source/react-project3/products/${id}`;
      setLoading(true);
      let response = await fetch(url);
      let data = await response.json();
      console.log(data);
      setProduct(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [id]);

  // API호출은 항상 useEffect
  useEffect(() => {
    getProductDetail();
  }, [getProductDetail]);
  return (
    <Container className="detail-container">
      {loading ? (
        <div className="spinner-wrap">
          <ClipLoader color="#333333" loading={loading} size={300} />
        </div>
      ) : (
        <Row>
          <Col className="product-img">
            <img src={product?.img} alt={`products/${id}img`} />
          </Col>
          <Col className="product-des">
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
      )}
    </Container>
  );
};

export default ProductDetail;
