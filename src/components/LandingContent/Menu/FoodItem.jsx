const FoodCard = (props) => {
    return (
        <li className="menu-item-wide">
            <div className="item-title">{props.name}</div>
            <div className="item-img">
                <img src={props.img} alt="" />
            </div>
            <div className="item-price">{props.price} ₽</div>
            <button className='main-button'>В корзину</button>
        </li>
    );
}

export default FoodCard;