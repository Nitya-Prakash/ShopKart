import React from 'react'
import { useForm } from 'react-hook-form'

const Form = ({ handleFormSubmit }) => {
    const { register, handleSubmit, reset } = useForm()
    const addedProducts = (data) => {
        handleFormSubmit(data);
        reset();
    }
    return (
        <>
            <div className='w-[34%] border-2 border-black py-5 rounded-lg'>
                <form onSubmit={handleSubmit(addedProducts)} className='flex items-center flex-wrap justify-center gap-3' action="">
                    <input {...register('image')} className='px-3 py-2 outline-none border border-black rounded-md' type="text" placeholder='Product Image Link' />
                    <input {...register('name')} className='px-3 py-2 outline-none border border-black rounded-md' type="text" placeholder='Name' />
                    <label htmlFor="category" className='px-3 font-semibold'>Choose Category</label>
                    <select {...register('category')} className='px-3 py-2 rounded-md outline-none border border-black' name="category" id="category">
                        <option value="Electronics">Electronics</option>
                        <option value="Clothing">Clothing</option>
                        <option value="Grocery">Grocery</option>
                        <option value="Fashion & Beauty">Fashion & Beauty</option>
                    </select>
                    <input {...register('price')} className='w-32 px-3 py-2 outline-none border border-black rounded-md' type="text" placeholder='Price' />
                    <textarea {...register('desc')} className='w-96 h-32 resize-none rounded-md outline-none px-2 py-2 border border-black' placeholder='Description'></textarea>
                    <input className='bg-blue-300 px-10 py-2 text-lg font-semibold text-black rounded-lg cursor-pointer' type="submit" value="Add Product" />
                </form>
            </div >
        </>
    )
}

export default Form