import React from "react";
import "./Product.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class ProductComponent extends React.Component {
  render() {
    const {
      productInfo: { title, images, variants },
    } = this.props;
    return (
      <div className="product">
        <img className="product-img" src={images[0]["src"]} alt={title} />
        <div className="product-name-price">
          <h5 className="product-name">{title.toUpperCase()}</h5>
          <h6 className="product-price">from ${variants[0]["price"]}</h6>
        </div>
      </div>
    );
  }

  
}



export default ProductComponent;
