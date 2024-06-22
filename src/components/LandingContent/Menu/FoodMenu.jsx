import './menu.css';
import foodCard from './foodCard';
import left from './../../../sources/menu/left.png'
import right from './../../../sources/menu/right.png'
import FoodCard from './FoodItem';

import React, { useContext, useEffect, useRef } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { indexContext } from './Menu';

const FoodMenu = () => {

    const carouselRef = useRef(null)

    const leftSlide = () => {
        carouselRef.current.next(250);
    }

    const rightSlide = () => {
        carouselRef.current.prev(250);
    }


    const { index } = useContext(indexContext)

    useEffect(() => {
        console.log(Number(index[1]));
        if (Number(index[1]) % 2 !== 0) {
            for (let i = 0; i < Number(index[1]) - 1; i++)
                carouselRef.current.next(0)
        } else {
            for (let i = 0; i < Number(index[1]) - 2; i++)
                carouselRef.current.next(0)
            carouselRef.current.next(250)
        }

    })

    //item.splice(0, 1)
    const options = {
        loop: false,
        responsive: {
            0: {
                items: 1,
            },
            1250: {
                items: 2,
            },

        },

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