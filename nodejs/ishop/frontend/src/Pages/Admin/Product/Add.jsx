import React, { useContext, useEffect, useRef, useState } from 'react';
import Card from '../../../Components/Admin/Card';
import BreadCrum from '../../../Components/Admin/BreadCrum';
import { MainContext } from '../../../Main';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import axios from 'axios';


const Add = () => {
    const { apiBaseUrl, notify, fetchCategory, fetchColor, productBaseUrl } = useContext(MainContext);
    const [category, setCategory] = useState([]);
    const [colors, setColor] = useState([]);
    const animatedComponents = makeAnimated();
    const [productCat, setProductCat] = useState(null);
    const [productColor, setProductColor] = useState([]);

    const slugRef = useRef();
    const titleRef = useRef();
    const priceRef = useRef();
    const percentRef = useRef();
    const discountRef = useRef();

    useEffect(
        () => {
            fetchCategory()
                .then(
                    (success) => {
                        setCategory(success.data);
                    }
                ).catch(
                    (error) => {
                        setCategory([]);
                    }
                )

            fetchColor()
                .then(
                    (success) => {
                        setColor(success.data);
                    }
                )
                .catch(
                    (error) => {

                    }
                )
        }, []
    )


    const breadcrum = [
        {
            name: "Product",
            url: "/admin/product/view"
        },
        {
            name: "Add",
            url: "/admin/product/add"
        }
    ]

    const formSubmitHandler = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const slug = e.target.slug.value;
        const price = e.target.price.value;
        const discount_percent = e.target.discount_percent.value;
        const discount_price = e.target.discount_price.value;
        const image = e.target.image.files[0];
        if (
            name != "" && slug != "" && price != ""
            && discount_price != "" && image != undefined
            && productCat != null && productColor.length != 0
        ) {
            const formData = new FormData();
            formData.append("name", name);
            formData.append("slug", slug);
            formData.append("price", price);
            formData.append("discounted_price", discount_price);
            formData.append("category", productCat.value);
            const cArr = productColor.map(c => c.value);
            formData.append("color", JSON.stringify(cArr));
            formData.append("image", image);
            axios.post(apiBaseUrl + productBaseUrl + "/create", formData)
                .then(
                    (success) => {
                        console.log(success);
                        notify(success.data.msg, success.data.status ? 'success' : 'error');
                        if (success.data.status == 1) {
                            e.target.reset();
                            setProductCat(null);
                            setProductColor(null);
                        } else {

                        }
                    }
                ).catch(
                    (error) => {

                    }
                )
        }
        else {

        }
    }


    const titleToSlug = () => {
        const slug = titleRef.current.value.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
        slugRef.current.value = slug;
    }

    const calcDiscount = () => {
        if (priceRef.current.value != "" && percentRef.current.value != "") {
            const dis = parseInt((priceRef.current.value * percentRef.current.value) / 100);
            discountRef.current.value = priceRef.current.value - dis;
        }
    }

    const catSelHandler = (selectedOption) => {
        setProductCat(selectedOption); // into state
    }

    const colorSelHandler = (options) => {
        setProductColor(options);
    }

    return (
        <Card>
            <BreadCrum items={breadcrum} />
            <hr />
            <form encType='multipart/form-data' onSubmit={formSubmitHandler} className='mt-[20px]'>
                <div className='grid gap-4 grid-cols-2'>
                    <div className="mb-5">
                        <label
                            htmlFor="base-input"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Name
                        </label>
                        <input
                            onChange={titleToSlug}
                            ref={titleRef}
                            type="text"
                            name='name'
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="base-input"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Slug
                        </label>
                        <input
                            readOnly
                            ref={slugRef}
                            type="text"
                            name='slug'
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                    </div>
                </div>
                <div className='grid gap-4 grid-cols-3'>
                    <div className="mb-5">
                        <label
                            htmlFor="base-input"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Price
                        </label>
                        <input
                            ref={priceRef}
                            type="number"
                            name='price'
                            onChange={calcDiscount}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="base-input"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Discount Percent %
                        </label>
                        <input
                            max={99}
                            ref={percentRef}
                            type="number"
                            name='discount_percent'
                            onChange={calcDiscount}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="base-input"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Discount Price
                        </label>
                        <input
                            ref={discountRef}
                            type="number"
                            name='discount_price'
                            readOnly
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="mb-5">
                        <label
                            htmlFor="base-input"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Category
                        </label>
                        <Select
                            value={productCat}
                            onChange={catSelHandler}
                            closeMenuOnSelect={false}
                            components={animatedComponents}
                            options={
                                category.map(
                                    (cat) => {
                                        return { value: cat._id, label: cat.name }
                                    }
                                )
                            }
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="base-input"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Color
                        </label>
                        <Select
                            value={productColor}
                            closeMenuOnSelect={false}
                            onChange={colorSelHandler}
                            components={animatedComponents}
                            isMulti
                            options={
                                colors.map(
                                    (color) => {
                                        return { value: color._id, label: color.name }
                                    }
                                )
                            }
                        />
                    </div>
                </div>
                <div className='my-3'>
                    <label
                        htmlFor="base-input"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Image
                    </label>
                    <input type="file" name='image' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <button type="submit" className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">Save</button>
            </form>
        </Card >
    );
}

export default Add;
