import React from "react";
import productsdata from "./challenge.products.json";
import ProductComponent from "./ProductComponent";
import { ForwardButton, BackButton } from "./svgs";
import Slider from "react-slick";
import "./Product.css";

class ProductContainer extends React.Component {
  renderProducts() {
    return productsdata.products.map((productInfo, index) => (
      <ProductComponent key={index} productInfo={productInfo} />
    ));
  }

  render() {
    const settings = {
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: <ForwardButton />,
      prevArrow: <BackButton />,
      responsive: [
        // this will change is window size is diff
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };

    return <Slider {...settings}>{this.renderProducts()}</Slider>;
  }
}

export default ProductContainer;
