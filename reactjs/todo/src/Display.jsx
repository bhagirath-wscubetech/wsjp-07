import React, { useState } from 'react';

const Display = ({ tasks, removeHandler }) => {
    return (
        <>
            <h1 className='text-center'>Tasks</h1>
            <div className='shadow p-3'>
                {
                    tasks.map(
                        (task, index) => {
                            return (
                                <Item key={index} index={index} task={task} removeHandler={removeHandler} />
                            )
                        }
                    )
                }
            </div>
        </>
    );
}

export default Display;

const Item = ({ task, removeHandler, index }) => {
    const [toggle, setToggle] = useState(false);
    return <div onClick={() => setToggle(!toggle)} className='p-2 border my-1 position-relative' style={{
        background: toggle ? 'grey' : '',
        textDecoration: toggle ? 'line-through' : '',
        color: toggle ? 'white' : ''
    }}>
        {task}
        <span onClick={() => removeHandler(index)} className='position-absolute' style={
            {
                right: 20,
                cursor: "pointer",
                fontWeight: "bold",

            }
        }>X</span>
    </div>
}