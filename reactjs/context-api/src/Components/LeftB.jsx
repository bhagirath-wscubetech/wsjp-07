import React, { useContext } from 'react';

import { MainContext } from '../Context/Main';
const LeftB = () => {
    const {inc} = useContext(MainContext);
    return (
        <div>
            Left B
            <button onClick={inc}>+</button>
        </div>
    );
}

export default LeftB;
