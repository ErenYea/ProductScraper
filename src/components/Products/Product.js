import React from "react";
import PropTypes from "prop-types";
import defaultImage from "../../assets/default-image.jpeg";

const Product = ({ id, name, image, price, product }) => {
  const url = image && image.url;
  return (
    <article className="product review custom" >
      <a href={product.url} target="_blank">
        <img src={url || defaultImage} alt={name} />
        <h4>{name}</h4>
        <p>{price || 3.99}</p>
      </a>
    </article>
  );
};

Product.prototype = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

// Product.defaultProps={
//   name:'default name',
//   price:3.99,
//   image:defaultImage
// }

export default Product;
