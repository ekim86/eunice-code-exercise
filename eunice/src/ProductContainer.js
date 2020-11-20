import React from "react";
import productsdata from "./challenge.products.json";
import ProductComponent from "./ProductComponent";
import "./Product.css";


class ProductContainer extends React.Component {
  renderProducts() {
    return productsdata.products.map((productInfo, index) => (
      <ProductComponent key={index} productInfo={productInfo} />
    ));
  }

  render() {
    return (
      <div>

        {this.renderProducts()}
      </div>
    );
  }
}

export default ProductContainer;
