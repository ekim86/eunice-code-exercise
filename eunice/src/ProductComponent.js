import React from "react";
import "./Product.css";
class ProductComponent extends React.Component {
  render() {
    const {
      productInfo: { title, images, variants },
    } = this.props;

    return (
      <div className="product">
        <div>
          <img className="product-img" src={images[0]["src"]} alt={title} />
          <div className="product-name-price">
            <h5 className="product-name">{title.toUpperCase()}</h5>
            <h6 className="product-price">from ${variants[0]["price"]}</h6>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductComponent;
