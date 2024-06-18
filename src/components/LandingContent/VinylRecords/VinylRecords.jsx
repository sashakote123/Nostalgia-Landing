import './records.css'
import left from './../../../sources/menu/left.png'
import right from './../../../sources/menu/right.png'

import img1 from './../../../sources/cover1.jpg'
import img2 from './../../../sources/cover2.jpg'

import React, { useRef } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const VinylRecords = () => {

    const carouselRef = useRef(null)

    const leftSlide = () => {
        carouselRef.current.next(250);
    }

    const rightSlide = () => {
        carouselRef.current.prev(250);
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

        }
    };

    return (
        <section className="vinyl-records">
            <div className="section-title white">VINYL RECORDS</div>
            <div className="container-wide">
                <button onClick={rightSlide} className='carousel-btn'>
                    <img src={left} alt="" />
                </button>
                <OwlCarousel ref={carouselRef} className="vinyl-carousel" {...options}>
                    <div className='vinyl-img'><img src={img1} alt="" /></div>
                    <div className='vinyl-img'><img src={img2} alt="" /></div>
                </OwlCarousel>
                <button onClick={leftSlide} className='carousel-btn'>
                    <img src={right} alt="" />
                </button>
            </div>
            <div className="vinyl-description">
                <div className="description-text">
                    Здесь можно оставить заявку на заказ нужной Вам пластинки или же заявку на обмен.
                    Можно осуществить обмен как и с нашим магазином, так и между посетителями.
                </div>
                <div className="description-btns">
                    <button className='description-btn'>Купить</button>
                    <button className='description-btn'>Обменять</button>
                </div>
            </div>

        </section>
    );
}

export default VinylRecords;