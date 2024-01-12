import React, { useContext } from 'react';
import { MainContext } from '../Context/Main';

const RightB = () => {
    const {desc} = useContext(MainContext);
    return (
        <div>
            Right B - <button onClick={desc}>-</button>
        </div>
    );
}

export default RightB;
