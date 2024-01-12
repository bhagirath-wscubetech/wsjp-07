import React, { useContext } from 'react';
import { MainContext } from '../Context/Main';
const LeftA = () => {
    const {count} = useContext(MainContext);
    return (
        <div>
            Count - {count}
        </div>
    );
}

export default LeftA;
