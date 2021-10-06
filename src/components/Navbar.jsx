import { Badge } from '@material-ui/core';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Search } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { mobile, iphone10 } from '../responsive';
import './Navbar.css'

const Container = styled.div `
    height: 70px;
    position: sticky;
    ${mobile({ height: "20px", margin: "30px none"})}
    ${iphone10({ height: "20px", margin: "30px none"})}
`

const Wrapper = styled.div `
    padding: 5px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    ${mobile({ padding: "10px 0px"})}
`
const Left = styled.div `
    flex: 1;
    display: flex;
    align-items: center;
    
`

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: "none"})}
`

const SearchContainer = styled.div `
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`
const Input = styled.input`
    border: none;
    ${mobile({ width: "50px", border: "none" })}
`

const Logo = styled.h1`
    font-weight: bold;
    ${mobile({ fontSize: "12px" })}
`

const Center = styled.div `
    flex: 1;
    text-align: center;
    ${mobile({ })}
`
const Right = styled.div `
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex: 2, justifyContent: "flex-end" })}
`

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`

const Navbar = () => {
    return (
        <Container className="navbar">
            <Wrapper>
                <Left>
                    <SearchContainer>
                        <Input placeholder="search" style={{border: "none"}}/>
                        <Search style={{color: "gray", fontSize:16, border: "none"}}/>
                    </SearchContainer>
                </Left> 
                <Center><Logo>A Lot Of Good.</Logo></Center>
                <Right>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlinedIcon/>
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
            
        </Container>
    )
}

export default Navbar
