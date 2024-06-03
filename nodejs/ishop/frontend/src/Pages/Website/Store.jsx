import React, { useContext, useEffect, useState } from 'react';
import Container from "../../Components/Website/Container";
import { MainContext } from '../../Main';
import Slider from "react-slick";
import { generateRandomGradient } from '../../helper';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import ProductBox from '../../Components/Website/ProductBox';
import { LuGrid } from "react-icons/lu";
import { RxRows } from "react-icons/rx";


const Store = () => {
    const [category, setCategory] = useState([]);
    const [product, setProduct] = useState([]);
    const [color, setColor] = useState([]);
    const { fetchCategory, fetchProduct, fetchColor, setLoaderToggle } = useContext(MainContext);
    const { category_slug } = useParams();
    const [searchParams] = useSearchParams();
    const [limit, setLimit] = useState(5);
    const [userColor, setUserColor] = useState(null);
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

        fetchColor()
            .then(
                (success) => {
                    if (success.status == 1) {
                        setColor(success.data);
                    } else {
                        setColor([]);
                    }
                }
            ).catch(
                (error) => {

                }
            )



        fetchProduct(limit)
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



    useEffect(
        () => {
            setLoaderToggle(true);
            fetchProduct(limit, category_slug, userColor)
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
                ).finally(
                    () => {
                        setLoaderToggle(false);
                    }
                )
        }, [limit, category_slug, userColor]
    )

    const updateSearchParams = () => {
        const urlQuery = new URLSearchParams({ limit });
        if (userColor != null) {
            urlQuery.append("color", userColor);
        }
        // Get the current URL
        const currentURL = window.location.pathname;
        const newUrl = currentURL + "?" + urlQuery.toString();
        window.history.pushState({ path: newUrl }, '', newUrl);
    }

    useEffect(
        () => {
            const searchLimit = searchParams.get("limit");
            const searchColor = searchParams.get("color");
            if ((searchLimit != null || searchColor != null)) {
                if (searchLimit != null) setLimit(searchLimit);
                if (searchColor != null) setUserColor(searchColor);
            }
        }, []
    )

    useEffect(
        () => {
            if (category_slug != undefined) {

            }
        },
        [category_slug]
    )

    useEffect(
        updateSearchParams,
        [limit, userColor]
    )

    return (
        <Container>
            <div className='grid grid-cols-4 gap-3'>
                <div>
                    <div className='py-3 bg-[#F6F7F8] mt-2'>
                        <div className='text-[18px] p-3 font-bold uppercase'>Categories</div>
                        <ul className='px-3'>
                            {
                                category.map(
                                    (cat) => {
                                        return (
                                            <Link key={cat._id} to={"/store/" + cat.slug}>
                                                <li className='cursor-pointer' key={cat._id}>{cat.name} ({cat.count})</li>
                                            </Link>
                                        )
                                    }
                                )
                            }
                        </ul>
                    </div>
                    <div className='py-3 bg-[#F6F7F8] mt-2'>
                        <div className='text-[18px] p-3 font-bold uppercase'>Color</div>
                        <ul className='px-3'>
                            {
                                color.map(
                                    (c) => {
                                        return <li onClick={() => setUserColor(c._id)} className={`flex items-center gap-4 cursor-pointer 
                                        ${c._id == userColor ? 'font-bold' : ''}`} key={c._id}>
                                            <span className='p-2' style={{ background: c.color }}></span>
                                            {c.name}
                                        </li>
                                    }
                                )
                            }
                        </ul>
                    </div>
                </div>
                <div className='col-span-3 p-3'>
                    <CustomSlider data={category} />
                    <ProductGrid data={product} limit={limit} limitHandler={(count) => {
                        setLimit(count);
                    }} />
                </div>
            </div>
        </Container>
    );
}

export default Store;

const ProductGrid = ({ data, limitHandler, limit }) => {
    const [grid, setGrid] = useState(true);

    useEffect(
        () => {
            const lsGrid = localStorage.getItem("grid");
            if (lsGrid != undefined) {
                lsGrid == 1 ? setGrid(true) : setGrid(false);
            }
        }, []
    )

    return (
        <div className='my-10'>
            <div className='my-3 p-3 bg-[#F6F7F8] flex gap-3 items-center'>
                <select value={limit} onChange={(e) => limitHandler(e.target.value)} name="" className='bg-transparent focus:outline-none p-2' id="">
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                    <option value="0">All</option>
                </select>
                <div className='flex gap-3'>
                    <LuGrid fontSize={25} onClick={() => {
                        setGrid(true)
                        localStorage.setItem("grid", 1);
                    }} color={grid ? '#2678BF' : 'black'} />
                    <RxRows fontSize={25} onClick={() => {
                        setGrid(false)
                        localStorage.setItem("grid", 0);
                    }} color={grid ? 'black' : '#2678BF'} />
                </div>
            </div>
            <div className={`${grid ? `grid grid-cols-3` : ''} gap-3`}>
                {
                    data.map(
                        (d) => {
                            return <ProductBox key={d._id} grid={grid} {...d} />
                        }
                    )
                }
            </div>
        </div>
    )
}


const CustomSlider = ({ data }) => {
    const catBaseUrl = "http://localhost:5000/images/categories/";
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    return (
        <Slider {...settings}>
            {
                data.map(
                    (d) => {
                        return (
                            <div key={d._id}>
                                <div style={
                                    {
                                        background: generateRandomGradient()
                                    }
                                } className='relative h-[300px]'>
                                    <div className='text-4xl text-white uppercase p-4' style={{
                                        textShadow: "0px 0px 2px gray"
                                    }}>{d.name}</div>
                                    <Link to={"/store/" + d.slug}>
                                        <button className='border text-white m-4 p-3'>
                                            Show Now
                                        </button>
                                    </Link>
                                    <img src={catBaseUrl + d.image} className='absolute bottom-0 right-0 w-[300px]' alt="" />
                                </div>
                            </div>
                        )
                    }
                )
            }

        </Slider>
    )
}

