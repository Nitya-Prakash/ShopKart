import React from 'react'
import Cards from './Cards'

const Products = ({ elems, handleRemove }) => {
    return (
        <>
            <div className='w-[65%] h-full border-2 border-black py-5 px-3 flex gap-4 flex-wrap justify-start overflow-auto rounded-lg'>
                {elems.map((item, index) => {
                    return <Cards key={index} handleRemove={handleRemove} id={index} items={item} />
                })}
            </div>
        </>
    )
}

export default Products