import styled from 'styled-components';
import {useState, useEffect} from 'react';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer'
import { mobile } from '../responsive';
import { Table } from 'react-bootstrap';
import {useLocation} from "react-router-dom"
import axios from 'axios';
import {addProduct} from "../redux/cartRedux"
import { useDispatch } from 'react-redux';
import {publicRequest} from "../requestMethods";

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
    width: 100px;
    height: 100px;
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

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({ marginRight: "0px" })}
`

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({ margin: "10px 0px" })}
`

const Option = styled.option``;

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
`;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #f8f4f4;
  }
`;

const ProductDetail = () =>  {
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("newest");
    const dispatch = useDispatch()

    useEffect(() => {
      const getProducts = async () => {
        try{
        const res = await publicRequest.get("/products/find/" + id)
        setProduct(res.data);
      }catch{}
      };
      getProducts()
    }, [id]);

    const handleClick =() => {
      //update wishlist
      dispatch(addProduct({...product, quantity}));
      
    }
    const handleFilters = (e) => {
      const value = e.target.value;
      setFilters({
          ...filters,
          [e.target.name] : value,
      });
  };

    return (
      <Container>
        <Announcement />
        <Navbar />
        <Wrapper>
          <ImgContainer>
            <Image src={product.img} />
          </ImgContainer>
          <InfoContainer>
            <Title>{product.title}</Title>
            <Desc>{product.desc}</Desc>
            <Price>Price {product.price} Bath</Price><br/>
            <Price>Shipping {product.shipping} Bath</Price>

            {/* <FilterContainer>
              <Filter>
                <FilterText>Filter Products</FilterText>
                <Select name="color" onChange={handleFilters}>
                  <Option disabled>Color</Option>
                  <Option>white</Option>
                  <Option>black</Option>
                  <Option>red</Option>
                  <Option>blue</Option>
                  <Option>yellow</Option>
                  <Option>green</Option>
                </Select>

                <Select name="size" onChange={handleFilters}>
                  <Option disabled>Size</Option>
                  <Option>XS</Option>
                  <Option>S</Option>
                  <Option>M</Option>
                  <Option>L</Option>
                  <Option>XL</Option>
                </Select>
              </Filter>

              <Filter>
                <FilterTitle>Size</FilterTitle>
                <FilterSize>
                  
                </FilterSize>
              </Filter> 
            </FilterContainer> */}

            <AddContainer>
              <Button onClick={() => window.open(product.thisLink[0])}
                      target="_blank"
              >Go to Shop</Button>
            </AddContainer>

            <Title>Other shop compare price</Title>
            <Table striped bordered hover>
              <thead
                style={{
                  textAlign: "center",
                  backgroundColor: "teal",
                  color: "white",
                }}
              >
                <tr>
                  <th>Product Preview</th>
                  <th>Price(Baht)</th>
                  <th>Shipping(Baht)</th>
                  <th>Link</th>
                </tr>
              </thead>
              <tbody style={{ textAlign: "center" }}>
                <tr>
                  <td>
                    <IcoLogo src={product.shopImg[0]} alt="" /> 
                  </td> 
                  <td>{product.otherPrice[0][0]}</td>
                  <td>{product.otherPrice[0][1]}</td>
                  <td>
                    <LinkButton
                      onClick={() => window.open(product.shopLink[0])}
                      target="_blank"
                    >
                      Click to Shop
                    </LinkButton>
                  </td>
                </tr>

                <tr>
                  <td>
                    <IcoLogo src={product.shopImg[1]} alt="" />
                  </td>
                  <td>{product.otherPrice[1][0]}</td>
                  <td>{product.otherPrice[1][1]}</td>
                  <td>
                    <LinkButton
                      onClick={() => window.open(product.shopLink[1])}
                      target="_blank"
                    >
                      Click to Shop
                    </LinkButton>
                  </td>
                </tr>

                <tr>
                  <td>
                    <IcoLogo src={product.shopImg[2]} alt="" />
                  </td>
                  <td>{product.otherPrice[2][0]}</td>
                  <td>{product.otherPrice[2][1]}</td>
                  <td>
                    <LinkButton
                      onClick={() => window.open(product.shopLink[2])}
                      target="_blank"
                    >
                      Click to Shop
                    </LinkButton>
                  </td>
                </tr>

                {/* <tr>
                  <td>
                    <IcoLogo src={product.shopImg[3]} alt="" />
                  </td>
                  <td>{product.otherPrice[3][0]}</td>
                  <td>{product.otherPrice[3][1]}</td>
                  <td>
                    <LinkButton
                      onClick={() => window.open(product.shopLink[3])}
                      target="_blank"
                    >
                      Click to Shop
                    </LinkButton>
                  </td>
                </tr> */}

              </tbody>
            </Table>
          </InfoContainer>
        </Wrapper>
        <Footer/>
        {/* <Newsletter /> */}
      </Container>
    );
}

export default ProductDetail
