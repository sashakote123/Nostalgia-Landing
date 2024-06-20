import { Link } from 'react-router-dom';
import img1 from './../../sources/shoppingCart.svg'
import './scbtn.css'
const ShoppingCardBtn = (props) => {
    return ( 
        <Link to='/ShoppigCart' className='scard-btn'>
            <div className="btn-number">{props.items}</div>
            <img src={img1} alt="123" />
        </Link>
     );
}
 
export default ShoppingCardBtn;