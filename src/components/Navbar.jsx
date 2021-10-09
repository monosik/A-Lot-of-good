import { Badge } from "@material-ui/core";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Search } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import './Navbar.css'
import { Link } from 'react-router-dom'
import Sticky from "react-sticky-el";

const Container = styled.div`
    height: 60px;
    position: sticky;
    position: -webkit-sticky;
    z-index: 2;
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
`;

const Input = styled.input`
    border: none;
    ${mobile({ width: "50px" })}
`;

const Center = styled.div`
    flex: 1;
    text-align: center;
`;

const Logo = styled.h1`
    font-weight: bold;
    ${mobile({ fontSize: "24px" })}
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
    margin-left: 25px;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
    return (
        <Sticky>
            <Container>
            <Wrapper>
                <Left>
                    <SearchContainer>
                        <Input placeholder="Search" / >
                        <Search style={{ color: "gray", fontSize: 16 }} />
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>A Lot Of Good</Logo>
                </Center>
                <Right>
                    <MenuItem>
                        <Link to={`/cart`} style={{ textDecoration: 'none' }}>
                            <Badge badgeContent={4} color="primary">
                                <ShoppingCartOutlinedIcon/>
                            </Badge>
                        </Link>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
        </Sticky>
        
    );
};

export default Navbar;