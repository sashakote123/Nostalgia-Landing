import { useContext, useEffect, useRef } from "react";
import { ShoppingCartContext } from "../../../App";
import { handlerContext } from "../LandingContent";
import { indexContext } from "./Menu";


const FoodCard = (props) => {

    const { size, setSize } = useContext(handlerContext)

    const shoppingCart = useContext(ShoppingCartContext)
    const ref = useRef(null)


    const { setIndex } = useContext(indexContext)



    useEffect(() => {
        if (shoppingCart.has(props.id)) {
            ref.current.innerHTML = 'В корзине';
            ref.current.classList.add('added');
        }
    })

    let addToCard = (event) => {

        if (!shoppingCart.has(props.id)) {
            shoppingCart.add(props.id);

            setIndex(props.id);

            event.target.innerHTML = 'В корзине';
            event.target.classList.add('added');
            setSize(size + 1)

        } else {
            setIndex(props.id);
            shoppingCart.delete(props.id);
            event.target.classList.remove('added');
            event.target.innerHTML = 'В корзину';
            setSize(size - 1)

        }

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