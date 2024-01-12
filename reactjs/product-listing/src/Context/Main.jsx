import React, { createContext, useEffect, useState } from 'react';

const MainContext = createContext();

const Main = (props) => {
    const [cart, setCart] = useState([]);

    const addToCart = (pId) => {
        if (cart.includes(pId) == false) {
            setCart(
                [
                    ...cart,
                    pId
                ]
            )
        }
    }

    useEffect(
        () => {
            // ls to state
            const lsCart = localStorage.getItem("cart");
            if (lsCart != undefined) {
                setCart(JSON.parse(lsCart)); // state
            }
        },
        [] // first render
    )

    useEffect(
        () => {
            // state to ls
            if (cart.length != 0) {
                localStorage.setItem("cart", JSON.stringify(cart));
            }
        },
        [cart]
    )

    const removeFromCart = (pId) => {
        if (cart.length == 1) {
            setCart([]);
            localStorage.removeItem("cart");
            return;
        }
        const newCart = cart.filter(
            (data) => {
                if (data == pId) return false;
                else return true;
            }
        )
        setCart(newCart);
    }

    return (
        <MainContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {props.children}
        </MainContext.Provider>
    );
}

export default Main;
export { MainContext }; // named export