import useGetData from "../Hooks/useGetData";
import { addItem } from "../cartSlice";
import { BrowserRouter as Router, Route , Switch ,Link } from "react-router-dom";
import { useSelector ,useDispatch } from "react-redux";
import Cart from "./cart"
export default function Products() {
  const items = useGetData();
  const dispatch = useDispatch();
  const state = useSelector(state=>state.cartDetail)
  console.log(state);
  return (
    <>
      <div>
        <Router>
          <Switch>
            <Route exact path="/cart" component={Cart} />
          </Switch>
          
        {items.length >0 ?
         <div className='products'>
             {items.map( (item, idx)=>{
                 return <div className='product-card' key={idx}>
                    <div className='product-image-container'>
                        <img src={item.image} className='product-image' alt="ProdutImage"/>
                    </div>
                    <div className='product-title'>{item.title.slice(0,40)}</div>
                    <div className='product-description'>{item.description.slice(0,35)}...</div>
                    <div className='price-and-button'>
                    <div className='product-price'>{item.price*71}₹</div>
                    <Link to='/cart' >
                    <button className='cart-button' onClick={()=>{
                      dispatch(addItem(idx));
                    }} >Add to cart</button></Link>
                    </div>
                 </div>
             } )}
        </div> 
        :<div className='loading'>LOADing</div>}
        </Router>
      </div>
    </>
  );
}
