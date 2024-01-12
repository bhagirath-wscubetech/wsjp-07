import React from 'react';
import Container from "../../Components/Website/Container";
import ProductBox from '../../Components/Website/ProductBox';
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Home = () => {
    return (
        <>
            <div className='w-full h-[450px] md:h-[650px] relative banner-bg'>
                <img src="images/corousel.png" className='absolute md:h-[auto] h-[100%] bottom-0 sm:right-[30%] md:right-[100px]' alt="" />
            </div>
            <BestSeller />
            <Container>
                <ProductSlider />
            </Container>
        </>
    );
}

export default Home;


function BestSeller() {
    const items = [
        {
            name: "Mac"
        },
        {
            name: "iPhone"
        },
        {
            name: "iPad"
        },
        {
            name: "iPod"
        },
        {
            name: "Accessories"
        }
    ]

    const products = [
        {
            name: "Apple Macbook Pro",
            image: "apple_macbook.png",
            yellow: 4,
            actual_price: 599,
            price: 499,
            hot: true
        },
        {
            name: "Apple Macbook Air",
            image: "Apple Macbook Air.png",
            yellow: 3,
            actual_price: 599,
            price: 499,
            hot: false
        }, {
            name: "Apple Macbook Pro",
            image: "apple_macbook.png",
            yellow: 4,
            actual_price: 599,
            price: 499,
            hot: true
        },
        {
            name: "Apple Macbook Air",
            image: "Apple Macbook Air.png",
            yellow: 3,
            actual_price: 599,
            price: 499,
            hot: true
        }, {
            name: "Apple Macbook Pro",
            image: "apple_macbook.png",
            yellow: 4,
            actual_price: 599,
            price: 499,
            hot: false
        },
        {
            name: "Apple Macbook Air",
            image: "Apple Macbook Air.png",
            yellow: 3,
            actual_price: 599,
            price: 499,
            hot: false
        }
    ]
    return (
        <Container>
            <div className='text-center text-[30px] font-bold uppercase my-5'>
                Best Seller
            </div>
            <ul className='hidden md:flex justify-center gap-[20px]'>
                <li>All</li>
                {
                    items.map(
                        (item, index) => {
                            return <li key={index}>{item.name}</li>
                        }
                    )
                }
            </ul>

            <div className='md:hidden px-2'>
                <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected>All</option>
                    {
                        items.map(
                            (item, index) => {
                                return <option key={index}>{item.name}</option>
                            }
                        )
                    }
                </select>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-3 my-4 justify-center'>
                {
                    products.map(
                        (product, index) => {
                            return <ProductBox {...product} key={index} />
                        }
                    )
                }
            </div>


        </Container>
    );
}


const ProductSlider = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const data = [
        {
            img: "beats_solo_2.png",
            title: "Beats Solo 2 On Ear Headphones - Black"
        },
        {
            img: "H-squared.png",
            title: "H-Squared tvTray"
        },
        {
            img: "Netatmo_rain.png",
            title: "Netatmo Rain Gauge"
        },
        {
            img: "Netatmo_rain.png",
            title: "Netatmo Rain Gauge"
        },
        {
            img: "Netatmo_rain.png",
            title: "Netatmo Rain Gauge"
        },
        {
            img: "Netatmo_rain.png",
            title: "Netatmo Rain Gauge"
        }
    ]
    return (
        <>
            <h3 className='text-center text-3xl font-bold my-4 py-3'>FEATURED PRODUCTS</h3>
            <Slider {...settings}>
                {
                    data.map(
                        (d, i) => {
                            return (
                                <div className='p-3'>
                                    <div className='shadow grid grid-cols-2 h-[150px] p-2'>
                                        <img className='w-full' src={"images/" + d.img} alt="" />
                                        <div>{d.title}</div>
                                    </div>
                                </div>
                            )
                        }
                    )
                }

            </Slider>
        </>
    )
}