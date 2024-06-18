import './content.css'
import AboutUs from "./AboutUs/AboutUs";
import Concerts from "./Concerts/Concerts";
import Contacts from "./Contacts/Contacts";
import Menu from "./Menu/Menu";
import VinylRecords from "./VinylRecords/VinylRecords";

import { Link, Element, animateScroll as scroll } from 'react-scroll';


const LandingContent = () => {
    return (
        <div>
            <div className="placeholders">
                <div className="line-placeholder-one"></div>
                <div className="line-placeholder-two"></div>
                <div className="line-placeholder-three"></div>
            </div>
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