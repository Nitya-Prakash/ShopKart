import React from 'react'

const Cards = ({ items, handleRemove, id }) => {
    return (
        <>
            <div className='h-72 w-[32%] border border-black p-3 rounded-lg'>
                <div className='w-full h-[60%] bg-blue-400 rounded-md overflow-hidden'>
                    <img className='h-full w-full object-cover object-center' src={items.image} alt="" />
                </div>
                <div className='w-full h-[18%] flex justify-between'>
                    <div className='w-1/2 h-full'>
                        <h3 className='font-semibold'>{items.name}</h3>
                        <h4 className='text-sm'>{items.category}</h4>
                    </div>
                    <h2 className='text-lg font-semibold'>Rs: {items.price}/-</h2>
                </div>
                <p className='text-base tracking-tight leading-none break-words'>{items.desc}</p>
                <button onClick={() => handleRemove(id)} className='w-full bg-red-400 mt-1 py-1 font-medium rounded-sm text-sm'>Remove Product</button>
            </div>
        </>
    )
}

export default Cards