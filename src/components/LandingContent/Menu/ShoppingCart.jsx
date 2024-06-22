import img1 from './../../../sources/delete.svg'
import img2 from './../../../sources/backBtn.svg'

import foodCard from './foodCard';
import barCard from './barCard';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { ShoppingCartContext } from '../../../App';


const ShoppingCartItem = (props) => {
    return (
        <li className="shopping-cart-item">
            <div className="cart-item-img"><img src={props.img} alt="" /></div>
            <div className="card-item-text">
                <div className="cart-item-name">{props.name}</div>
                <div className="cart-item-price">{props.price} ₽</div>
            </div>
            <button onClick={() => props.deleteItem(props.item)}><img src={img1} alt="" /></button>
        </li>
    );
}


const ShoppingCart = () => {

    const shoppingCart = useContext(ShoppingCartContext)

    let deleteItem = (item) => {
        setItems(items.filter(i => i.id !== item.id))
    }

    function findMatchingObjects(idSet, ...arrays) {
        const result = [];
        arrays.forEach(array => {
            array.forEach(item => {
                if (idSet.has(item.id)) {
                    result.push(item);
                }
            });
        });
        return result;
    }

    const matchingObjects = findMatchingObjects(shoppingCart, foodCard, barCard);
    console.log(matchingObjects);

    const [items, setItems] = useState(matchingObjects);

    function sum(array) {
        let sum = 0;
        for (let item of array)
            sum += item.price
        return sum
    }

    useEffect(() => {
        shoppingCart.clear();
        items.forEach(item => {
            shoppingCart.add(item.id)
        })
    }, [items, shoppingCart])

    return (
        <section className="shopping-cart-section">
            <div className="section-title title-thin">SHOPPING CART</div>
            <div className="shopping-cart-wrapper">
                <ul className='shopping-cart'>
                    {items.map((item) => {
                        return <ShoppingCartItem key={item.id} img={item.img} name={item.name} price={item.price} deleteItem={deleteItem} item={item} />
                    })}
                </ul>
                <div className="shopping-cart-cost">
                    <div className="cost-title">Итог:</div>
                    <div className="cost-text">{items.length} товаров на сумму: <br></br> {sum(items)} ₽</div>
                    <button className="buy-button">К оформлению</button>
                </div>
                <Link to={'/'} className="back-button"><img src={img2} alt="" /></Link>
            </div>
        </section>

    );
}

export default ShoppingCart;