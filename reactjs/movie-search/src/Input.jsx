import React from 'react';

const Input = ({ inputHandler }) => {

    return (
        <div className='py-3 position-sticky top-0 bg-white'>
            <input type="text" className='form-control' placeholder='Type movie name here...' onKeyUp={(e) => inputHandler(e.target.value)} />
        </div>
    );
}

export default Input;
