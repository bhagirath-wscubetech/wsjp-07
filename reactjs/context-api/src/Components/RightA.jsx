import React, { useContext } from 'react';
import { MainContext } from '../Context/Main';

const RightA = () => {
    const {amount} = useContext(MainContext);
    return (
        <div>
            Amount - {amount}
        </div>
    );
}

export default RightA;
