import useGetData from "../Hooks/useGetData";
import { addItem } from "../slices/cartSlice";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect , useState } from "react";
import { getData } from "../slices/productSlice";
export default function Products() {
  const dispatch = useDispatch();
     
     useEffect(() => {
       let data =  dispatch(getData());
       console.log("data=",data);
      }, [dispatch]);
      
      let item = useSelector(state=>state.Products) ;
      let items = item.products;
      console.log(item,items);

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
                    <div className="product-price">{(item.price * 71)}₹</div>
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
