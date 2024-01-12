import React from 'react';

const Person = (props) => {
    return (
        <div className='col-3 my-3'>
            <div className='shadow p-3'>
                <h5>Name: {props.name}</h5>
                <button onClick={() => props.handler(props.name)}
                    className={`btn ${props.playerName == props.name ? 'btn-warning' : 'btn-primary'}`}>
                    {
                        props.playerName == props.name
                            ? 'Playing'
                            : 'Play'
                    }
                </button>
            </div>
        </div>
    );
}

export default Person;
