import { useSelector, useDispatch} from "react-redux";
import useGetData from "../Hooks/useGetData";
import { decQuantity , addItem, delItem } from "../cartSlice";
import delicon from "../assets/del.svg";
export default function Cart() {
  const data = useGetData();
  let total = 0;
  const cartSelected = useSelector((state) => state.cartDetail);
  const dispatch = useDispatch();
  return (
    <div className="cart-container">
      {data.length > 0 ? (
        <div>
          {cartSelected.map((item, idx) => {{total+=data[item[0]].price*71*item[1];
          console.log(total);}
            return (
              <div className="cartItem" key={idx}>
                <div className="cartImage-container">
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
                  <div className="cart-product-price">
                    {(data[item[0]].price * 71*item[1]).toFixed(3)}₹
                  </div>
                  <div>
                    <button className='inc-btn' onClick={()=>{dispatch(addItem(item[0]))}} >+</button>
                    <span className='quantity'>{item[1]}</span>
                    <button className='dec-btn' onClick={()=>{dispatch(decQuantity(item[0]))}} >-</button>
                    <img className='del-icon' src={delicon} alt="delicon" onClick={()=>{
                      dispatch(delItem(item[0]))
                    }} />
                  </div>
                </div>
              </div>
            );
          })}
          <div className='bottom-nav'>
          <div className='Total'>Total : {total}</div>
          <button className='buyBtn'>Buy now</button>
          </div>
        </div>

      ) : (
        null
      )}
    </div>
  );
}
