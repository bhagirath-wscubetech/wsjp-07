import React, { createContext, useEffect, useState } from 'react';


const MainContext = createContext();
const Main = (props) => {

    const [count, setCount] = useState(0);
    const [amount, setAmount] = useState(0);

    function inc() {
        setCount(count + 1);
    }

    function desc() {
        setCount(count - 1);
    }

    useEffect(
        () => {
            setAmount(500 * count);
        },
        [count]
    )


    return (
        <MainContext.Provider value={{ amount, count, inc, desc }}>
            {/* provider */}
            {props.children}
        </MainContext.Provider>
    );
}

export default Main;
export { MainContext };
