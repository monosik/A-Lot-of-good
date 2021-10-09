import Slider from '../components/Slider'
import React from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'

function Home() {
    return (
        <div className="home">
            <Navbar/>
            <Announcement/>
            <Slider/>
            <Categories/>
            <Products/>
            <Newsletter/>
        </div>
    )
}

export default Home
