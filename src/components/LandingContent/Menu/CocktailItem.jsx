import { useContext, useRef, useEffect } from "react";
import { ShoppingCartContext } from "../../../App";
import { indexContext } from "./Menu";
import { handlerContext } from "../LandingContent";



const CoctailCard = (props) => {

    const shoppingCart = useContext(ShoppingCartContext);

    const ref = useRef(null);

    const  { setIndex2 } = useContext(indexContext)
    const { size, setSize } = useContext(handlerContext)

    useEffect(() => {
        if (shoppingCart.has(props.id)) {
            ref.current.innerHTML = 'В корзине';
            ref.current.classList.add('added');
        }
    })


    let addToCard = (event) => {

        if (!shoppingCart.has(props.id)) {
            shoppingCart.add(props.id);
            event.target.innerHTML = 'В корзине';
            event.target.classList.add('added');

            setIndex2(props.id);
            setSize(size + 1)
        } else {
            shoppingCart.delete(props.id);
            event.target.classList.remove('added');
            event.target.innerHTML = 'В корзину';

            setIndex2(props.id);
            setSize(size - 1)
        }
    }


    return (
        <div className="menu-item">
            <div className="item-title">{props.name}</div>
            <div className="item-img">
                <img src={props.img} alt="" />
            </div>
            <div className="item-price">{props.price} ₽</div>
            <button ref={ref} onClick={addToCard} className='main-button'>В корзину</button>
        </div>
    );
}

export default CoctailCard;