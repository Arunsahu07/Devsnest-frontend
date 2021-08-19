import useGetData from "../Hooks/useGetData";
import { addItem } from "../cartSlice";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
export default function Products() {
  const items = useGetData();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.cartDetail);
  console.log(state);
  return (
    <>
      <div>
        {items.length > 0 ? (
          <div className="products">
            {items.map((item, idx) => {
              return (
                  <Link to={`/${idx}`} style={{textDecoration : "none"}}>
                <div className="product-card" key={idx} >
                  <div className="product-image-container" >
                    <img
                      src={item.image}
                      className="product-image"
                      alt="ProdutImage"
                    />
                  </div>
                  <div className="product-title">{item.title.slice(0, 30)}</div>
                  <div className="product-description">
                    {item.description.slice(0, 35)}...
                  </div>
                  <div className="price-and-button">
                    <div className="product-price">{(item.price * 71).slice(2)}₹</div>
                    <Link to="/">
                      <button
                        className="cart-button"
                        onClick={() => {
                          dispatch(addItem(idx));
                        }}
                      >
                        Add to cart
                      </button>
                    </Link>
                  </div>
                </div>
                  </Link>
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
    </>
  );
}
