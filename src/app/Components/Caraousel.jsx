import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Caraousel.css';


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
        <div className='container'  >
            <Slider {...settings}>

                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>

            </Slider>
        </div>
    );
};


const Caraousel = () => {
    return (
        <>
            <div className="container">
                <MultiItemCarousel />
            </div>
        </>
    )
}

export default Caraousel;