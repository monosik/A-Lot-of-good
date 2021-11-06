import React, { useState } from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import { mobile } from '../responsive';
import {useLocation} from "react-router-dom";
import Footer from '../components/Footer'

const Container = styled.div``

const Title = styled.h1`
    margin: 20px;
`

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const Filter = styled.div`
    margin: 20px;
    ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`

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


const ProductList = () => {
    const location = useLocation();
    const cate = location.pathname.split("/")[2];
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("newest");

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
        <Title>{cate}</Title>
        <FilterContainer>
          <Filter>
            <FilterText>Filter Products</FilterText>
            <Select name="shop" onChange={handleFilters}>
              <Option disabled>Shop</Option>
              <Option>All shop</Option>
              <Option>Lazada</Option>
              <Option>Shopee</Option>
            </Select>

            <Select name="subject" onChange={handleFilters}>
              <Option disabled>Subject</Option>
              <Option>All item</Option>
              <Option>Garbage bag</Option>
              <Option>Alcohol Disinfectant</Option>
              <Option>Alcohol 70%</Option>
              <Option>Personal Dining</Option>
              <Option>Soap</Option>
            </Select>
          </Filter>

          <Filter>
            <FilterText>Sort Products</FilterText>
            <Select onChange={(e) => setSort(e.target.value)}>
              <Option value="newest">Newest</Option>
              <Option value="asc">Low to Hight</Option>
              <Option value="desc">Hight to Low</Option>
            </Select>
          </Filter>
        </FilterContainer>

        <Products cate={cate} filters={filters} sort={sort} />
        <Footer/>
        {/* <Newsletter /> */}
      </Container>
    );
}

export default ProductList
