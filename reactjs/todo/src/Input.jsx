import React, { useRef } from 'react';

const Input = ({ handler }) => {
    // destructurion of object

    const inpRef = useRef();
    // ref -> reference

    const addData = () => {
        // console.log(inpRef.current.value);
        handler(inpRef.current.value); //get
        inpRef.current.value = ""; // set
    }

    return (
        <div className='d-flex my-4' style={{ gap: 10 }}>
            <input type="text" ref={inpRef} className='form-control' />
            <button  className='btn btn-primary' onClick={addData}>Add</button>
        </div>
    );
}

export default Input;
