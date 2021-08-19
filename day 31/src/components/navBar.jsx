import cartImg from "../assets/cart.svg"
import {Link, Router} from 'react-router-dom';
export default function Navbar()
{
    return <div className="navbar">
        
            <Link to="/" style={{textDecoration: "none"}} ><span className='shop' >shop</span></Link>
            <Link to='/cart' className="cart-link" ><img className='cart-img' src={cartImg} alt='cartIcon' /></Link>
    </div>
        
    }