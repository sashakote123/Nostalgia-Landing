import './navbar.css'
import logo from './../../sources/header/logo.png';
import burger from './../../sources/BurgerBtn.svg'

import { Link, Element, animateScroll as scroll } from 'react-scroll';
import { useRef } from 'react';

const NavBar = () => {

    const trey = useRef(null)

    const toggleTrey = () => {
        trey.current.classList.toggle('none')
    }

    return (
        <>
            <div ref={trey} className="navigation-trey">
                <ul className='nav-links-trey none'>
                    <li><button onClick={toggleTrey} className='burger-btn'><img src={burger} alt="" /></button></li>
                    <li><Link onClick={toggleTrey} activeClass="active" to='section1' spy={true} smooth={true} duration={500}>Меню</Link></li>
                    <li><Link onClick={toggleTrey} activeClass="active" to='section2' spy={true} smooth={true} duration={500}>О нас</Link></li>
                    <li><Link onClick={toggleTrey} activeClass="active" to='section3' spy={true} smooth={true} duration={500}>Магазин пластинок</Link></li>
                    <li><Link onClick={toggleTrey} activeClass="active" to='section4' spy={true} smooth={true} duration={500}>Концерты</Link></li>
                    <li><Link onClick={toggleTrey} activeClass="active" to='section5' spy={true} smooth={true} duration={500}>Контакты</Link></li>
                </ul>
            </div>
            <nav className='container'>
                <div className="nav">
                    <Link activeClass=" " className='nav-logo' to='section0' spy={true} smooth={true} duration={500}><img src={logo} alt="" /></Link>
                    <button onClick={toggleTrey} className='burger-btn'><img src={burger} alt="" /></button>
                    <ul className='nav-links'>
                        <li><Link activeClass="active" to='section1' spy={true} smooth={true} duration={500}>Меню</Link></li>
                        <li><Link activeClass="active" to='section2' spy={true} smooth={true} duration={500}>О нас</Link></li>
                        <li><Link activeClass="active" to='section3' spy={true} smooth={true} duration={500}>Магазин пластинок</Link></li>
                        <li><Link activeClass="active" to='section4' spy={true} smooth={true} duration={500}>Концерты</Link></li>
                        <li><Link activeClass="active" to='section5' spy={true} smooth={true} duration={500}>Контакты</Link></li>
                    </ul>
                </div>

            </nav>
        </>


    );
}

export default NavBar;