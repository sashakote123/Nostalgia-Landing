import './menu.css';

import CocktailsMenu from './CocktailsMenu';
import FoodMenu from './FoodMenu';
import { useRef, useState } from 'react';
import React from 'react';

export const indexContext = React.createContext()

const Menu = () => {

    const menuRef = useRef(null)

    const [index, setIndex] = useState(0)
    const [index2, setIndex2] = useState(0)

    return (
        <section ref={menuRef}>
            <div className="section-title">MENU</div>
            <indexContext.Provider value={{index, setIndex, index2, setIndex2}}>
                <CocktailsMenu />
                <FoodMenu />
            </indexContext.Provider>

        </section>

    );
}

export default Menu;