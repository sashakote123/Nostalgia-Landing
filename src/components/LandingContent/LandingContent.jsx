import './content.css'
import AboutUs from "./AboutUs/AboutUs";
import Concerts from "./Concerts/Concerts";
import Contacts from "./Contacts/Contacts";
import Menu from "./Menu/Menu";
import VinylRecords from "./VinylRecords/VinylRecords";

import { Link, Element, animateScroll as scroll } from 'react-scroll';
import ShoppingCardBtn from '../ShoppingCardBtn/ShoppingCardBtn';
import Promo from '../Promo/Promo';
import { ShoppingCartContext } from '../../App';
import { useContext, useEffect, useState, useMemo } from 'react';


const LandingContent = () => {

    const shoppingCart = useContext(ShoppingCartContext)

    const cartSize = useMemo(() => shoppingCart.size, [shoppingCart]);
    
    const [size, setSize] = useState(cartSize);

    useEffect(() => {
        setSize(cartSize);
        console.log(shoppingCart);
    }); 


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
                <Menu />
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