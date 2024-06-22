import './content.css'
import AboutUs from "./AboutUs/AboutUs";
import Concerts from "./Concerts/Concerts";
import Contacts from "./Contacts/Contacts";
import Menu from "./Menu/Menu";
import VinylRecords from "./VinylRecords/VinylRecords";

import { Element } from 'react-scroll';
import ShoppingCardBtn from '../ShoppingCardBtn/ShoppingCardBtn';
import Promo from '../Promo/Promo';
import { useContext, useState } from 'react';
import React from "react";
import { ShoppingCartContext } from '../../App';

export const handlerContext = React.createContext();

const LandingContent = () => {

    const shoppingCart = useContext(ShoppingCartContext)

    const [size, setSize] = useState(shoppingCart.size);



    return (
        <div>
            <div className="placeholders">
                <div className="line-placeholder-one"></div>
            </div>
            <Element name='section0'>
                <Promo />
            </Element>
            <ShoppingCardBtn items={size} />

            <Element name='section1'>
                <handlerContext.Provider value={{ size, setSize }}>
                    <Menu />
                </handlerContext.Provider>
            </Element>

            <Element name='section2'>
                <AboutUs />
            </Element>


            <Element name='section3'>
                <VinylRecords />
            </Element>

            <Element name='section4'>
                <Concerts />
            </Element>

            <Element name='section5'>
                <Contacts />
            </Element>



        </div>
    );
}

export default LandingContent;