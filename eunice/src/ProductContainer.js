import React from "react";
import productsdata from "./challenge.products.json";
import ProductComponent from "./ProductComponent";
import "./Product.css";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

class ProductContainer extends React.Component {
  renderProducts() {
    return productsdata.products.map((productInfo, index) => (
      <ProductComponent key={index} productInfo={productInfo} />
    ));
  }

  render() {
    let settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
    };
    return (
      // <div>
      <Slider {...settings}>{this.renderProducts()}</Slider>
      // </div>
    );
  }
}

export default ProductContainer;
