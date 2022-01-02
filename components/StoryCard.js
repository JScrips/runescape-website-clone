import React from 'react'

const StoryCard = () => {
    return (
        <div className='flex  w-full mb-4 border-b-2 border-black p-6'>
        <div className='w-60 h-40 border-2 border-black rounded-lg text-center'>
            Image
        </div>
        <div className='ml-6 '>
        <h1 className=' text-yellow-600 font-black hover:underline hover:cursor-pointer'> Story Name </h1>
        <p className='text-sm italic mb-6'>News Type  |  Current Date</p>
        <p> This is a brief news article description of whatever is happening<span className=' ml-2 font-black text-sm text-yellow-600 hover:underline hover:cursor-pointer'>Read More Link</span></p>
        </div>
        </div>
    )
}

export default StoryCard
