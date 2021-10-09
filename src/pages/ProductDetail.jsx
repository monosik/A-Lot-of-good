import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import { mobile } from '../responsive';
import { Table, Button } from 'react-bootstrap';


const Container = styled.div``;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({ padding: "10px", flexDirection: "column"})}
`;

const ImgContainer = styled.div`
    flex: 1;
`;

const Image = styled.img`
    width: 60%;
    height: 90vh;
    object-fit: cover;  
    ${mobile({ height: "40vh"})}
`;

const IcoLogo = styled.img`
    width: 30px;
    height: 30px;
    image-align: center;
    object-fit: cover;  
    ${mobile({ height: "40vh"})}
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({ padding: "10px"})}
`;

const Title = styled.h1`
    font-weight: 200;
`;

const Desc = styled.p`
    margin: 20px 0px;
`;

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`;

const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    ${mobile({ width: "100%"})}
`;

const Filter = styled.div`
    display: flex;
    align-items: center;
`;

const FilterTitle = styled.div`
    font-size: 20px;
    font-weight: 200;
`;

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`;

const LinkButton = styled.button`
    background: cover; 
    background-color: teal;
    color: white;
    border: none;
    border-radius: 5px;
    &:hover {
        background-color: #008c68;
        transform: scale(1.1);
    }
`


const FilterSizeOption = styled.option``;

const ProductDetail = () =>  {
    return (
        <Container>
            <Announcement/>
            <Navbar/>
            <Wrapper>
                <ImgContainer>
                    <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
                </ImgContainer>
                <InfoContainer>
                    <Title>Denim Jumpsuit</Title>
                    <Desc>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque tempore nesciunt fuga error. Illum, tempore voluptatem? Repellendus dolorum, commodi, nobis eligendi fugiat praesentium aliquam voluptatem possimus beatae sit assumenda alias.
                    </Desc>
                    <Price>$20</Price>

                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                        </Filter>

                        <Filter>
                        <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <Title>Compare Price</Title>
                    <Table striped bordered hover>
                    <thead style={{textAlign: 'center', backgroundColor: 'teal', color: 'white'}}>
                        <tr>
                            <th>Shop</th>
                            <th>Date(D/M/Y)</th>
                            <th>Price(Baht)</th>
                            <th>Shipping(Baht)</th>
                            <th>Link</th>
                        </tr>
                    </thead>
                    <tbody style={{textAlign: 'center'}}>
                        <tr>
                            <td><IcoLogo src="https://th-live-05.slatic.net/p/bc9077fb180fdbc8d479c51e1d7ef01f.jpg_720x720q80.jpg_.webp" /></td>
                            <td>9/10/2021</td>
                            <td>20</td>
                            <td>40</td>
                            <td><LinkButton>Click to Shop</LinkButton></td>
                        </tr>
                        <tr>
                            <td><IcoLogo src="https://i1.pngguru.com/preview/74/572/54/nike-air-logo-shopee-online-shopping-goods-sales-retail-ecommerce-shopping-centre-png-clipart.jpg"/></td>
                            <td>9/10/2021</td>
                            <td>20</td>
                            <td>40</td>
                            <td><LinkButton>Click to Shop</LinkButton></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td colSpan="2">Larry the Bird</td>
                            <td colSpan="2">@twitter</td>
                        </tr>
                    </tbody>
                    </Table>
                </InfoContainer>
                
            </Wrapper>
            <Newsletter/>
        </Container>
    )
}

export default ProductDetail
