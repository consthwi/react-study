import React, { useCallback, useEffect } from "react";
import ProductCard from "../component/ProductCard";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { productAction } from "../redux/actions/productAction";
// 객체로 export한 내용은 {}로만 받아온다.
import { useDispatch, useSelector } from "react-redux";

const ProductAllPage = () => {
  const dispatch = useDispatch();
  // state대신 redux-store를 사용한다.
  // const [productList, setProductList] = useState([]);
  const productList = useSelector((state) => {
    // return state.productList;
    // combineReducer를 사용할 경우, state에 있는 키값을 명시하여야 한다.
    return state.product.productList;
  });

  const [query, setQuery] = useSearchParams();

  const getProducts = useCallback(() => {
    let searchQuery = query.get("q") || "";
    // console.log(searchQuery);
    // dispatch({type:~, payload:~}) ... store로 직행
    dispatch(productAction.getProducts(searchQuery));
    // dispatch(미들웨어함수) ... 미들웨어로 보냄
    // dispatch( 미들웨어함수 productAction에 있는 getProducts()실행 )
  }, [query, dispatch]);

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
