import { Badge } from "@material-ui/core";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Search } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import './Navbar.css'
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux"

const Container = styled.div`
  height: 70px;
  position: sticky;
  top: 0;
  position: -webkit-sticky;
  background: #F5CAC3;
  z-index: 999;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    position: sticky;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    background: #e5e5e5;
`;

const Input = styled.input`
    border: 0px;
    ${mobile({ width: "50px" })}
`;

const Center = styled.div`
    flex: 1;
    text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  cursor: pointer;
  textdecoration: "none";
  color: "black";
  ${mobile({ fontSize: "24px" })};
  a:link, a:visited{
    color: black;
    text-decoration: none;
  }
  a:hover, a:active {
    color: black;
    text-decoration: none;
  }
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    color: black;
    margin-left: 25px;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
    const quantity = useSelector(state => state.cart.quantity)

    return (
      <Container>
        <Wrapper>
          <Left>
            <SearchContainer>
              <Input placeholder="Search" />
              <Search style={{ color: "gray", fontSize: 16 }} />
            </SearchContainer>
          </Left>
          <Center>
            <Logo>
                <a href='/'>
                    A Lot Of Goods
                </a>
            </Logo>
          </Center>
          <Right>
            {/* <Link to={`/login`} style={{ textDecoration: 'none' }}>
                    <MenuItem>LOGIN</MenuItem>
                    </Link>
                    <MenuItem>
                        <Link to={`/cart`} style={{ textDecoration: 'none' }}>
                            <Badge badgeContent={quantity} color="primary">
                                <ShoppingCartOutlinedIcon/>
                            </Badge>
                        </Link>
                    </MenuItem> */}
          </Right>
        </Wrapper>
      </Container>
    );
};

export default Navbar;