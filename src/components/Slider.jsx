import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons'
import { useState } from 'react'
import styled from 'styled-components'
import { sliderItems } from '../data'
import { mobile } from '../responsive';

const Container = styled.div`
    width: 100%;
    height: 25vh;
    display: flex;
    position: relative;
    overflow: hidden;
    ${mobile({ height: "none" })}
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${(props) => props.slideIndex * -100}vw);
`

const Slide = styled.div`
    width: 100vw;
    height: 25vh;
    display: flex;
    align-items: center;
    background-color: #${props=>props.bg};
`

const ImgContainer = styled.div`
  height: 100%;
  width: 50%
  display: flex;
  flex: 3.5;
  align-items: stretch;
`;

const Image = styled.img`
    aspect-ratio: 4 / 3;
    height: 100%;
    width: 100%;
    ${mobile({ padding: "0px", flexDirection: "column"})}
`

const InfoContainer = styled.div`
    flex: 4;
    padding: 50px;
`

const Title = styled.h1`
    font-size: 70px;
`

const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`

const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`


function Slider() {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    };
    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <KeyboardArrowLeft/>
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map(item=> (
                    <Slide bg="f5fafd" key={item.id}>
                        <ImgContainer>
                            <Image src={item.img}/>
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                            <Button>WATCH NOW</Button>
                        </InfoContainer>
                    </Slide>
                ))}
                
                {sliderItems.map(item=> (
                    <Slide bg="fcf1ed" key={item.id}>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                            <Button>WATCH NOW</Button>
                        </InfoContainer>
                    </Slide>
                ))}

                {sliderItems.map(item=> (
                    <Slide bg="fbf0f4" key={item.id}>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                            <Button>WATCH NOW</Button>
                        </InfoContainer>
                    </Slide>
                ))}

            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <KeyboardArrowRight/>
            </Arrow>
        </Container>
    )
}

export default Slider
