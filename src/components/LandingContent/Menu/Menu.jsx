import './menu.css';
import foodCard from './foodCard';
import barCard from './barCard';




import CocktailsMenu from './CocktailsMenu';
import FoodMenu from './FoodMenu';
import { React, createContext, useRef } from 'react';
import ShoppingCart from './ShoppingCart';



const Menu = () => {

    const menuRef = useRef(null)

    return (
        <section ref={menuRef}>
            <div className="section-title">MENU</div>
                <CocktailsMenu />
                <FoodMenu />
        </section>

    );
}

export default Menu;