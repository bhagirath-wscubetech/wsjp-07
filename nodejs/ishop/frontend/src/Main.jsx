import axios from 'axios';
import React, { createContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainContext = createContext();
const Main = (props) => {
    const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
    const categoryBaseUrl = process.env.REACT_APP_API_CATEGORY_URL;
    const colorBaseUrl = process.env.REACT_APP_API_COLOR_URL;
    const productBaseUrl = process.env.REACT_APP_API_PRODUCT_URL;
    const [loaderToggle, setLoaderToggle] = useState(false);
    const notify = (msg, flag) => toast(msg, { type: flag });

    const fetchProduct = async (limit = 0, category = undefined, color = null) => {
        const urlQuery = new URLSearchParams({ limit, category, color })
        const response = await fetch(apiBaseUrl + productBaseUrl + "?" + urlQuery.toString());
        const data = await response.json();
        return data;
    }

    const fetchCategory = async () => {
        const response = await fetch(apiBaseUrl + categoryBaseUrl);
        const data = await response.json();
        return data;
    }

    const fetchColor = async (id = null) => {
        let api = apiBaseUrl + colorBaseUrl;
        if (id != null) {
            api = apiBaseUrl + colorBaseUrl + "/" + id;
        }
        const response = await fetch(api);
        const data = await response.json();
        return data;
    }

    const fetchCategoryById = async (id) => {
        const response = await fetch(apiBaseUrl + categoryBaseUrl + "/" + id)
        const data = await response.json();
        return data;
    }

    return (
        <MainContext.Provider value={{ productBaseUrl, setLoaderToggle, apiBaseUrl, categoryBaseUrl, notify, fetchCategory, fetchColor, fetchCategoryById, colorBaseUrl, fetchProduct }}>
            <ToastContainer />
            <div className='loader' style={{
                display: loaderToggle ? 'flex' : 'none'
            }}>
                <h1>Loading...</h1>
            </div>
            {props.children}
        </MainContext.Provider>
    );
}

export default Main;
export { MainContext }