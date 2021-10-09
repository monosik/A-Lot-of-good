import React from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data'
import Product from './Product'
import { Link } from 'react-router-dom'

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = () => {
    return (
    <Link to={`/productlist/:id`}>
        <Container>
        {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
        ))}  
        </Container>
    </Link>
    )
}

export default Products
