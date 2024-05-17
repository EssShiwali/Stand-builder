'use client';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';


const MultiItemCarousel = () => {

    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>
            <Slider {...settings}>

             <div><div className='slider'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id natus maxime voluptatibus eveniet, ipsum ab expedita nobis culpa explicabo,</div></div> 
             <div><div className='slider'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id natus maxime voluptatibus eveniet, ipsum ab expedita nobis culpa explicabo,</div></div> 
             <div><div className='slider'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id natus maxime voluptatibus eveniet, ipsum ab expedita nobis culpa explicabo,</div></div> 
             <div><div className='slider'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id natus maxime voluptatibus eveniet, ipsum ab expedita nobis culpa explicabo,</div></div> 

            </Slider>
        </>
    );
};


const Carousel = () => {
    return (
        <>
            <div className="container">
                <div className='slider-main'>
                <MultiItemCarousel />
                </div>
            </div>
        </>
    )
}

export default Carousel;