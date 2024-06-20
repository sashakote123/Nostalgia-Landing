import './menu.css';
import foodCard from './foodCard';
import left from './../../../sources/menu/left.png'
import right from './../../../sources/menu/right.png'
import FoodCard from './FoodItem';

import React, { useRef } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const FoodMenu = () => {

    const carouselRef = useRef(null)

    const leftSlide = () => {
        carouselRef.current.next(250);
    }

    const rightSlide = () => {
        carouselRef.current.prev(250);
    }

    const options = {
        loop: false,
        responsive: {
            0: {
                items: 1, // количество элементов на экране шириной 0px и выше
            },
            1250: {
                items: 2, // количество элементов на экране шириной 600px и выше
            },

        }
    };

    return (
        <div className="container-wide">
            <button onClick={rightSlide} className='carousel-btn'>
                <img src={left} alt="<" />
            </button>
            <OwlCarousel ref={carouselRef} className="menu-carousel-wide" {...options} >
                {foodCard.map(item => {
                    return <FoodCard key={item.id} id={item.id} name={item.name} img={item.img} price={item.price} />
                })}
            </OwlCarousel>
            <button onClick={leftSlide} className='carousel-btn'>
                <img src={right} alt=">" />
            </button>
        </div>
    );
}

export default FoodMenu;