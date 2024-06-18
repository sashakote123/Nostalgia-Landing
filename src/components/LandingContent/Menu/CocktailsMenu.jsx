import CoctailCard from './CocktailItem';
import barCard from './barCard';
import left from './../../../sources/menu/left.png'
import right from './../../../sources/menu/right.png'


import React, { useRef } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';



const CocktailsMenu = () => {

    const carouselRef = useRef(null)

    const leftSlide = () => {
        carouselRef.current.next(250);
    }

    const options = {
        loop: true,
        responsive: {
            0: {
                items: 1, // количество элементов на экране шириной 0px и выше
            },
            1000: {
                items: 2, // количество элементов на экране шириной 600px и выше
            },
            1230: {
                items: 3, // количество элементов на экране шириной 1000px и выше
            },

        }
    };

    const rightSlide = () => {
        carouselRef.current.prev(250);
    }

    return (
        <>
            <div className="container-wide">
                <button onClick={rightSlide} className='carousel-btn'>
                    <img src={left} alt="<" />
                </button>
                <OwlCarousel ref={carouselRef} className="menu-carousel" {...options} >
                    {barCard.map(item => {
                        return <CoctailCard name={item.name} img={item.img} price={item.price} />
                    })}
                </OwlCarousel>
                <button className='carousel-btn'>
                    <img onClick={leftSlide} src={right} alt=">" />
                </button>
            </div>

        </>

    );
}

export default CocktailsMenu;