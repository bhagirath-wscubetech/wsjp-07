import React from 'react';
import LeftA from './LeftA';
import LeftB from './LeftB';

const Left = ({ incHandler, count }) => {
    return (
        <div className='border border-red-500'>
            Left
            <LeftA count={count}/>
            <LeftB incHandler={incHandler} />
        </div>
    );
}

export default Left;
