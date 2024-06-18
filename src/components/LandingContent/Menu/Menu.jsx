import './menu.css';
import foodCard from './foodCard';
import barCard from './barCard';




import CocktailsMenu from './CocktailsMenu';
import FoodMenu from './FoodMenu';
import { React, useRef } from 'react';


const Menu = () => {

    const menuRef = useRef(null)
    
    
    return (
        <section ref={menuRef}>
            <div className="section-title">Menu</div>
            <CocktailsMenu />
            <FoodMenu />
        </section>

    );
}

export default Menu;