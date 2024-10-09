import React from 'react'

const Navbar = ({ elems }) => {
    return (
        <div className='w-full h-16 flex items-center justify-between p-10'>
            <h1 className='text-3xl font-semibold'>ShopKart</h1>
            <div className='flex items-center px-4 py-1 bg-blue-300 rounded-lg'>
                <h1 className='text-lg font-medium'>Products Added -</h1>
                <h3 className='ml-2 text-lg font-bold'>{elems.filter(item => item).length}</h3>
            </div>
        </div>
    )
}

export default Navbar