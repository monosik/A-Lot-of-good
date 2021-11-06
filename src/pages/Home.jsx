import Slider from '../components/Slider'
import React from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Headline from '../components/Headline'
import Footer from '../components/Footer'

const Title = styled.h1`
    margin: 10px 20px;
`

function Home() {
    return (
      <div className="home">
        <Navbar />
        <Announcement />
        <Headline />
        <Slider />
        <Headline />
        <Categories />
        <Title>News Products</Title>
        <Headline />
        <Products />
        <Headline />
        <Footer/>
        {/* <Newsletter /> */}
      </div>
    );
}

export default Home
