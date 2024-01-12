import React from 'react';

const Filter = ({ categories, selectedCat, setSelectedCat, range, setRange, resetFilter}) => {
    return (
        <div className='sticky top-0'>
            <div className='bg-[#bdc3c7] p-2 mt-2'>
                <h3 className='text-center text-xl'>Categories</h3>
            </div>
            <ul>
                <li onClick={() => setSelectedCat(null)} className={`cursor-pointer border p-3 ${selectedCat == null ? 'text-blue-700 font-bold' : ''}`}>All</li>
                {
                    categories.map(
                        (cat, i) => {
                            return <li onClick={() => setSelectedCat(cat)} className={`cursor-pointer border p-3 
                            ${selectedCat == cat ? 'text-blue-700 font-bold' : ''}`
                            } key={i}>{cat}</li>
                        }
                    )
                }
            </ul>
            <div className='bg-[#bdc3c7] p-2 mt-2'>
                <h3 className='text-center text-xl'>Price</h3>
            </div>
            <div className="flex gap-10 my-2 justify-center items-center">
                <input type="number" value={range.from} onChange={
                    (e) => {
                        setRange({
                            ...range, // keep the old data same
                            from: e.target.value // but change the from data
                        })
                    }
                } min={0} max={parseInt(range.to) - 1} className='w-[80px] border p-2 focus:outline-none' placeholder='From' />
                -
                <input min={parseInt(range.from) + 1} type="number" value={range.to} onChange={
                    (e) => {
                        setRange(
                            {
                                ...range,
                                to: e.target.value
                            }
                        )
                    }
                } className='w-[80px] border p-2 focus:outline-none' placeholder='To' />
            </div>
            <hr className='my-3'/>
            <button onClick={resetFilter} className='border border-red-600 p-3 mx-auto block my-5'>Reset Filter</button>

        </div>
    );
}

export default Filter;
