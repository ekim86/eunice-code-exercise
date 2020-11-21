import "./App.css";
import ProductContainer from "./ProductContainer.js";
import "./Product.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div>
      <center>
        <div className="title-btn-container">
          <div></div>
          <h4 className="bestsellers">SHOP BESTSELLERS</h4>
        </div>
        <ProductContainer />

        <a href="https://gravityblankets.com/collections/best-sellers">
          <button className="bestsellers-btn bestseller">
            SHOP ALL BESTSELLERS
          </button>
        </a>
      </center>
    </div>
  );
}


export default App;
