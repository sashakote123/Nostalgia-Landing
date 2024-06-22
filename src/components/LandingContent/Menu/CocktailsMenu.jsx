import CoctailCard from './CocktailItem';
import barCard from './barCard';
import left from './../../../sources/menu/left.png'
import right from './../../../sources/menu/right.png'


import React, { useEffect, useState, useRef, useContext } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { indexContext } from './Menu';



const CocktailsMenu = () => {


    
    const carouselRef = useRef(null)

    const [items, setItems] = useState(1);

    useEffect(() => {
        const updateItems = () => {
            const width = window.innerWidth;
            if (width >= 1230) {
                setItems(3);
            } else if (width >= 1000) {
                setItems(2);
            } else if (width >= 0) {
                setItems(1);
            }
        };

        window.addEventListener('resize', updateItems);
        updateItems();

        return () => window.removeEventListener('resize', updateItems);
    }, []);

    const options = {
        loop: false,
        items: items,
        responsive: {
            0: {
                items: 1,
            },
            1000: {
                items: 2,
            },
            1230: {
                items: 3,
            }
        }
    };

    const leftSlide = () => {
        carouselRef.current.next(250);
    }

    const rightSlide = () => {
        carouselRef.current.prev(250);
    }


    const { index2 }= useContext(indexContext)

    useEffect(() => {
        for (let i = 0; i < Number(index2[1])-1; i++)
            carouselRef.current.next(0)

    })

    return (
        <>
            <div className="container-wide">
                <button onClick={rightSlide} className='carousel-btn'>
                    <img src={left} alt="<" />
                </button>
                <OwlCarousel ref={carouselRef} className="menu-carousel" {...options} >
                    {barCard.map(item => {
                        return <CoctailCard key={item.id} id={item.id} name={item.name} img={item.img} price={item.price} />
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