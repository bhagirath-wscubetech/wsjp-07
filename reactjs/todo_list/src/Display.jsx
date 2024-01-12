import React from 'react';

const Display = ({ title, items, moveHandler, mode }) => {
    return (
        <div className='col-6 border border-danger' style={{ minHeight: 500 }}>
            <h1 className='text-center my-2'>{title}</h1>
            {
                items.map(
                    (item, i) => {
                        return <div key={i} onClick={() => moveHandler(i)} 
                        className={`p-3 ${mode} text-white my-3`}>{item}</div>
                    }
                )
            }
        </div>
    );
}

export default Display;
