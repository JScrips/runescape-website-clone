import React from 'react'
import Loginbox from './Loginbox'
import HeroBanner from './HeroBanner'
import Population from './Population'
import MenuGrid from './MenuGrid'
import Newsfeed from './Newsfeed'
import StoryCard from './StoryCard'
import Footer from './Footer'


const Layout = () => {
    return (
        <div className="bg-slate-600 min-h-screen  mx-auto  lg:w-5/12 bg-[url('https://www.runescape.com/img/rsp777/bg2.jpg')] bg-contain ">
        <Loginbox />
        <HeroBanner />
        <Population />
        <MenuGrid /> 
        <Newsfeed />        
        <Footer />   
        </div>
    )
}

export default Layout
