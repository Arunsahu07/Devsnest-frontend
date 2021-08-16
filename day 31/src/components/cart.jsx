import { useSelector } from "react-redux";
import useGetData from "../Hooks/useGetData";
import { decQuantity , addItem } from "../cartSlice";
import { useDispatch } from "react-redux";
export default function Cart() {
  const dispatch = useDispatch()
  const data = useGetData();
  let total = 0;
  const cartSelected = useSelector((state) => state.cartDetail);
  return (
    <div className="cart-container">
      {data.length > 0 ? (
        <div>
          {cartSelected.map((item, idx) => {{total+=data[item[0]].price*71*item[1];
          console.log(total);}
            return (
              <div className="cart-item" key={idx}>
                <div className="cart-image-container">
                  <img
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
                    {data[item[0]].price * 71*item[1]}₹
                  </div>
                  <div>
                    <button className='inc-btn' onClick={()=>{dispatch(addItem(item[0]))}} >+</button>
                    <span className='quantity'>{item[1]}</span>
                    <button className='dec-btn' onClick={()=>{dispatch(decQuantity(item[0]))}} >-</button>
                  </div>
                </div>
              </div>
            );
          })}
          <div className='nav'>
          <div className='total'>Total : {total}</div>
          <button className='buy-btn'>Buy now</button>
          </div>
        </div>

      ) : (
        null
      )}
    </div>
  );
}
