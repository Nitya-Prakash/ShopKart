import React, { useState } from 'react'
import Navbar from './Component/Navbar'
import Products from './Component/Products'
import Form from './Component/Form'

const App = () => {
    const [elems, setElems] = useState([])

    const handleFormSubmit = (data) => {
        setElems([...elems, data])
    }

    const handleRemove = (id) => {
        setElems(() => elems.filter((item, index) => index != id))
    }


    return (
        <div>
            <Navbar elems={elems} />
            <div className='w-full h-[85vh] p-4 flex flex-row-reverse justify-between'>
                <Products elems={elems} handleRemove={handleRemove} />
                <Form handleFormSubmit={handleFormSubmit} />
            </div>
        </div>
    )
}

export default App