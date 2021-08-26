import {Route} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../slices/cartSlice"

export default function ProductCard() {
  const dispatch = useDispatch();
  
  const data = useSelector(state=>state.Products).products
 
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
                <Route path={`/${idx}`} component={CurCard}  key={idx}/>
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
