import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 3px;
  background-color: #84A59D;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Headline() {
    return (
        <div>
            <Container></Container>
        </div>
    )
}

export default Headline