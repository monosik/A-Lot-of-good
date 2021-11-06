import styled  from 'styled-components'
import { mobile } from '../responsive'
import { Link } from 'react-router-dom'

const Container = styled.div`
    flex: 1;
    margin: 5px;
    height: 50hv;
    position: relative;
    ${mobile({ display: "none" })}
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${mobile({ height: "20vh"})}
`

const Info = styled.div`
    position: absolute;
    top: 110px;
    left: 0;
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
    font-size: 50px;
    font-weight: 1000;
`

const Button = styled.button`
    border: none;
    padding: 20px;
    background-color: white;
    color: gray;
    cursor: pointer;
    font-weight: 1000;
`

function CategoryItem ({item}) {
    return (
        <Container>
            <Link to={`/productlist/${item.cate}`} style={{ textDecoration: 'none' }}>
            <Image src={item.img}/>
            <Info>
                <Title>{item.title}</Title>
                <Button>SHOP NOW</Button>
            </Info>
            </Link>
        </Container>
    )
}

export default CategoryItem
