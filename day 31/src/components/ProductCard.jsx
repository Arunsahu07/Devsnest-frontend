import useGetData from "../Hooks/useGetData";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../cartSlice";

export default function ProductCard() {
  const dispatch = useDispatch();
  
  const data = useGetData();
  return (
    <div className="product-detail-container">
      {data.length > 0 ? (
        <div>
          {data.map((item, idx) => {
            function CurCard() {

             return <div className="cart-item" key={idx}>
                <div className="cart-image-container">
                  <img
                    src={item.image}
                    alt="product"
                    className="cart-image"
                  />
                </div>
                <div className="cart-item-info">
                  <div className="cart-product-title">
                    {item.title}
                  </div>
                  <div className="cart-product-description">
                    {item.description}
                  </div>
                  <div className="cart-product-price">
                    Price : {item.price * 71}₹
                    </div>
                    <button
                        className="cart-button product-cart-button"
                        onClick={() => {
                          dispatch(addItem(idx));
                        }}
                      >
                        Add to cart
                      </button>
                </div>
              </div>
            }
            return (
              <div>
                <Route path={`/${idx}`} component={CurCard} />
              </div>
            );
          })}
        </div>
      ) : (
        <div className="loading">
          <span className="l">L</span>
          <span className="o">O</span>
          <span className="a">A</span>
          <span className="d">D</span>
          <span className="i">I</span>
          <span className="n">N</span>
          <span className="g">G</span>
        </div>
      )}
    </div>
  );
}
{
  /* <div className="cart-item" key={idx}>
              <div className="cart-image-container">
                <im
                  src={data[item[0]].image}
                  alt="product"
                  className="cart-image"
                />
              </div>
              <div className="cart-item-info">
                <div className="cart-product-title">
                  {data[item[0]].title}
                </div>
                <div className="cart-product-description">
                  {data[item[0]].description}
                </div>
                <div className="cart-product-price">
                  {(data[item[0]].price * 71*item[1]).toFixed(3)}₹
                </div>
                </div> */
}
