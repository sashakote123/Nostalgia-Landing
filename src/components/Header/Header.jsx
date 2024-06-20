import './header.css';
import NavBar from "../NavBar/NavBar";
import Promo from '../Promo/Promo';

import { Link, Element, animateScroll as scroll } from 'react-scroll';

const Header = () => {
    return (
        <div className="header">
            <NavBar />


        </div>

    );
}

export default Header;