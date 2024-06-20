import { useContext, useEffect, useRef } from "react";
import { ShoppingCartContext } from "../../../App";

//const shoppingCart = new Set();


const FoodCard = (props) => {
    const shoppingCart = useContext(ShoppingCartContext)
    const ref = useRef(null)

    useEffect(() => {
        if (shoppingCart.has(props.id)) {
            ref.current.innerHTML = 'В корзине';
            ref.current.classList.add('added');
        }
        console.log(shoppingCart);
    })

    let addToCard = (event) => {
        if (!shoppingCart.has(props.id)) {
            shoppingCart.add(props.id);
            event.target.innerHTML = 'В корзине';
            event.target.classList.add('added');
        } else {
            shoppingCart.delete(props.id);
            event.target.classList.remove('added');
            event.target.innerHTML = 'В корзину';
        }
        console.log(shoppingCart);
    }


    return (
        <li className="menu-item-wide">
            <div className="item-title">{props.name}</div>
            <div className="item-img-food">
                <img src={props.img} alt="" />
            </div>
            <div className="item-price">{props.price} ₽</div>
            <button ref={ref} onClick={addToCard} className='main-button'>В корзину</button>
        </li>
    );
}

export default FoodCard;