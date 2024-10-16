import React from "react";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/products/${item.id}`);
  };

  return (
    <div className="ProductCard" onClick={showDetail}>
      <div className="img-wrapper">
        <img src={item?.img} alt={`products${item?.id}_image`} />
      </div>
      <div className="product-dis">
        <div>{item?.choice === true ? "Conscious choice" : ""}</div>
        <div className="title">{item?.title}</div>
        <div>{`₩${item?.price}`}</div>
        <div>{item?.new === true ? "신제품" : ""}</div>
      </div>
    </div>
  );
};

export default ProductCard;
