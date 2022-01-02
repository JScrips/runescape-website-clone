import React from 'react'
import Image from 'next/image'

const MenuGrid = () => {
    return (
        <div className=''>
        


        <div className='grid grid-rows-3 grid-flow-col mx-auto w-10/12 gap-4 justify-center '>
            <div className='relative border-4 border-yellow-900 text-white bg-black w-80 p-2 '>
            <span className='absolute -top-4 left-32'>Game</span>
                <ul>
                <li className='text-lime-300 hover:underline hover:cursor-pointer'>Download Old School</li>
                <li className='text-lime-300 hover:underline hover:cursor-pointer'>World Select</li>
                <li className='text-lime-300 hover:underline hover:cursor-pointer'>World Map</li>
                <li className='text-lime-300 hover:underline hover:cursor-pointer'>News</li>
                <li className='text-lime-300 hover:underline hover:cursor-pointer'>Mobile</li>

                </ul>
            </div>
            
            <div className='relative border-4 border-yellow-900 text-white bg-black w-80 p-2  '>
            <span className='absolute -top-4 left-28'>Community</span>
                <ul>
                <li className='text-lime-300 hover:underline hover:cursor-pointer'>Polls</li>
                <li className='text-lime-300 hover:underline hover:cursor-pointer'>HiScores</li>
                <li className='text-lime-300 hover:underline hover:cursor-pointer'>Grand Exchange</li>
                <li className='text-lime-300 hover:underline hover:cursor-pointer'>Forums</li>
                <li className='text-lime-300 hover:underline hover:cursor-pointer'>Merchandise</li>
                <li className='text-lime-300 hover:underline hover:cursor-pointer'>Wiki</li>

                </ul>
            </div>

            <div className='relative border-4 border-yellow-900 text-white bg-black w-80 p-2 '>
            <span className='absolute -top-4 left-28'>Account</span>
                <ul>
                <li className='text-lime-300 hover:underline hover:cursor-pointer'>Become a Member</li>
                <li className='text-lime-300 hover:underline hover:cursor-pointer'>Old School Bonds</li>
                <li className='text-lime-300 hover:underline hover:cursor-pointer'>Account Settings</li>
                <li className='text-lime-300 hover:underline hover:cursor-pointer'>Enable Authenticator</li>
                <li className='text-lime-300 hover:underline hover:cursor-pointer'>Support</li>

                </ul>
            </div>

            <div className='flex gap-2'>
            
            <button className="p-2 rounded-lg w-44 h-36 font-black text-lg text-white bg-[url('/compare_users.png')] bg-no-repeat bg-cover hover:underline hover:cursor-pointer"  >New User? Sign up here</button>
             
            <button className="p-2 rounded-lg w-44 h-36 font-black text-lg text-white bg-[url('/compare_users.png')] bg-no-repeat bg-cover hover:underline hover:cursor-pointer"  >Free Player? Play Now!</button>
            <button className="p-2 rounded-lg w-44 h-36 font-black text-lg text-white bg-[url('/compare_users.png')] bg-no-repeat bg-cover hover:underline hover:cursor-pointer" >Member? Play Now!</button>
             </div>
             <div className='-mt-8 flex justify-center bodrer-2 border-black text-lime-300 hover:underline hover:cursor-pointer'>Manually Select World</div>

        </div>
        </div>
    )
}

export default MenuGrid
