import React, { useContext, useEffect, useState } from 'react';
import Container from "../../Components/Website/Container";
import ProductBox from '../../Components/Website/ProductBox';
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MainContext } from '../../Main';
const Home = () => {
    const [category, setCategory] = useState([]);
    const [product, setProduct] = useState([]);
    const { fetchCategory, fetchProduct } = useContext(MainContext);
    const getData = () => {
        fetchCategory()
            .then(
                (success) => {
                    if (success.status == 1) {
                        setCategory(success.data);
                    } else {
                        setCategory([]);
                    }
                }
            ).catch(
                (error) => {

                }
            )

        fetchProduct()
            .then(
                (success) => {
                    if (success.status == 1) {
                        setProduct(success.data);
                    } else {
                        setProduct([]);
                    }
                }
            ).catch(
                (error) => {

                }
            )
    }
    useEffect(
        getData,
        [] // first render
    )
    return (
        <>
            <div className='w-full h-[450px] md:h-[650px] relative banner-bg'>
                <img src="images/corousel.png" className='absolute md:h-[auto] h-[100%] bottom-0 sm:right-[30%] md:right-[100px]' alt="" />
            </div>
            <BestSeller category={category} products={product} />
            <Container>
                <ProductSlider />
            </Container>
        </>
    );
}

export default Home;

function BestSeller({ category, products }) {
    const [filterCat, setFiterCat] = useState(null);
    if (filterCat != null) {
        products = products.filter(
            (prod) => {
                return prod.category._id == filterCat;
            }
        )
    }
    return (
        <Container>
            <div className='text-center text-[30px] font-bold uppercase my-5'>
                Best Seller
            </div>
            <ul className='hidden md:flex justify-center gap-[20px]'>
                <li className='cursor-pointer' onClick={() => setFiterCat(null)}>All</li>
                {
                    category.map(
                        (cat, index) => {
                            return <li className='cursor-pointer' onClick={() => setFiterCat(cat._id)} key={index}>{cat.name}</li>
                        }
                    )
                }
            </ul>
            <div className='md:hidden px-2'>
                <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                onChange={(e) => setFiterCat(e.target.value == "" ? null : e.target.value)}>
                    <option selected value="">All</option>
                    {
                        category.map(
                            (cat, index) => {
                                return <option value={cat._id} key={index}>{cat.name}</option>
                            }
                        )
                    }
                </select>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-3 my-4 justify-center'>
                {
                    products.map(
                        (product, index) => {
                            return <ProductBox grid={true} {...product} key={index} />
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
                                <div key={i} className='p-3'>
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