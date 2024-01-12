import React from 'react';

const LeftB = ({incHandler}) => {
    return (
        <div>
            <hr />
            Left B
            <button onClick={incHandler} className='border p-3 block'>+</button>
        </div>
    );
}

export default LeftB;
