import React from 'react';

const RightB = ({descHandler}) => {
    return (
        <div>
           <hr />
            Right B
            <button onClick={descHandler} className='border p-3 block'>-</button>
        </div>
    );
}

export default RightB;
