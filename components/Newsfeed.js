import React from 'react'
import StoryCard from './StoryCard'

const Newsfeed = () => {
    return (
        <div>
            <div className="mt-8 h-16 w-10/12 mx-auto  bg-[url('https://www.runescape.com/img/rsp777/scroll/backdrop_765_top.gif')] bg-contain relative z-10"> </div>
        
            <div className="border-2 -mt-4 border-black flex-col w-10/12 mx-auto justify-center text-left px-10 bg-[url('https://www.runescape.com/img/rsp777/scroll/backdrop_745.gif')] bg-contain relative z-0 ">

            <h1 className='text-4xl font-black text-yellow-700 text-center mb-2'>Welcome to Oldschool Runescape!</h1>
            
            <p className='text-lg'>Relive the challenging levelling system and risk-it-all PvP of the biggest retro styled MMO. Play with millions of other players in this piece of online gaming heritage where the community controls the development so the game is truly what you want it to be!</p>

            <h2 className='text-center font-black text-2xl'> News & Updates</h2>

            <div className='flex-col'>
                <StoryCard />
                <StoryCard />
                <StoryCard />
                <StoryCard />
            </div>

            <span className="">You can also follow our <span className='text-yellow-600 font-black hover:underline hover:cursor-pointer'>Twitter</span> feed for the latest news & updates or view older posts in our <span className='text-yellow-600 font-black hover:underline hover:cursor-pointer'>news archive.</span> </span>

            
            
            </div>
            <div className="-mt-3 h-16 w-10/12 mx-auto  bg-[url('https://www.runescape.com/img/rsp777/scroll/backdrop_765_top.gif')] bg-contain relative z-10"> </div>
        </div>
    )
}

export default Newsfeed
