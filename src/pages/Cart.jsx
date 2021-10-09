import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const Container = styled.div``

const Wrapper = styled.div`
    padding: 20px;
`

const Title = styled.div`
    font-weight: 300;
    text-align: center;
`

const Top = styled.div`
    display: flex;
    padding: 10px;
    align-items: center;
    justify-content: space-between;
`

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`

const Info = styled.div`
    flex: 3;
`

const Product = styled.div``
const ProductDetail = styled.div``
const Image = styled.img``
const Details = styled.div``
const ProductName = styled.div``
const ProductId = styled.div``
const ProductColor = styled.div``
const ProductSize = styled.div``
const PriceDetail = styled.div``

const Summary = styled.div`
    flex: 1;
`

const Cart = () => {
    return (
        <Container>
            <Navbar/>
            <Wrapper>
                <Title>YOUR WISHLIST</Title>
                <Top>
                    <Link to={`/`}>
                        <TopButton>Back to Home</TopButton>
                    </Link>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"/>
                                <Details>
                                    <ProductName><b>Product:</b>Mask</ProductName>
                                    <ProductId><b>ID:</b>93813718293</ProductId>
                                    <ProductColor/>
                                    <ProductSize><b>Size:</b>37.5</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                price
                            </PriceDetail>
                        </Product>
                        
                    </Info>

                    <Summary>Summary</Summary>
                </Bottom>
            </Wrapper>

        </Container>
    )
}

export default Cart
