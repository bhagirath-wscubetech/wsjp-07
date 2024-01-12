import React, { useEffect, useState } from 'react';

const ProductListing = () => {
    const [data, setData] = useState([]);

    async function loadData() {
        const response = await fetch('https://fakestoreapi.com/products');
        const json = await response.json();
        // console.log(json);
        setData(json);
    }
    
    useEffect(
        () => {
            loadData();
        },
        [] //only first render
    )

    return (
        <div className='container'>
            {/* <div>
                <button onClick={loadData} className='d-block mx-auto btn btn-success'>Load Data</button>
            </div> */}
            <div className='row my-3'>
                {
                    data.map(
                        (d) => {
                            return <div key={d.id} className="col-3">
                                <div className='shadow p-3'>
                                    <img width={"100%"} height={"300px"} src={d.image} alt="" />
                                    <h4 className='my-2 text-center'>{d.title}</h4>
                                </div>
                            </div>
                        }
                    )
                }
            </div>
        </div>
    );
}

export default ProductListing;
