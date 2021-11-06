import {
    FavoriteBorderOutlined,
    SearchOutlined,
    ShoppingCartOutlined,
} from "@material-ui/icons";
import styled from "styled-components";
import {Link} from 'react-router-dom';
import {publicRequest} from "../requestMethods";
import {useState, useEffect} from 'react';
import {useLocation} from "react-router-dom"

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
`;

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;
    &:hover ${Info}{
        opacity: 1;
    }
`;

const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`;

const Image = styled.img`
    height: 75%;
    z-index: 2;
`;

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;
    &:hover {
        background-color: #e9f5f5;
        transform: scale(1.1);
    }
`;
const Title = styled.h1`
font-size: 50px`;
const Price = styled.span``;

const Product = ({ item }) => {
    const [product, setProduct] = useState({});
    const location = useLocation();
    const id = location.pathname.split("/")[2];

    useEffect(() => {
        const getProducts = async () => {
          try{
          const res = await publicRequest.get("/products/find/" + id)
          setProduct(res.data);
        }catch{}
        };
        getProducts()
      }, [id]);

    return (
        <Container>
            <Circle />
            <Image src={item.img} />
            <Title>{product.title}</Title>
            <Price>{product.price}</Price>
            <Info>
                <Icon>
                    <ShoppingCartOutlined />
                </Icon>
                <Icon>
                    <Link to={`/productdetail/${item._id}`}>
                    <SearchOutlined />
                    </Link>
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined />
                </Icon>
            </Info>
        </Container>
    );
};

export default Product;