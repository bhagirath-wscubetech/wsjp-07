import React from 'react';

const Display = ({ movies }) => {
    const imgPath = "https://image.tmdb.org/t/p/w1280";
    return (
        <>
            {
                movies.length == 0
                    ? <h1>No Movie found</h1>
                    : <div className='row'>
                        {
                            movies.map(
                                (movie, index) => {
                                    return <div className="col-lg-3 col-md-6 col-12 my-3" key={index}>
                                        <img className='rounded' src={imgPath + movie.poster_path} alt="" style={{ width: "100%" }} />
                                        <div className='h5 my-3 text-secondary'>{movie.title}</div>
                                    </div>
                                }
                            )
                        }
                    </div>
            }
        </>
    );
}

export default Display;
