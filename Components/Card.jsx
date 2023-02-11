import React from "react";
import styled from "styled-components";

const Card = () => {
  return (
    <Container>
      <Cover>
        <Image source={require("../assets/wave-haikei.png")} />
        <Title>Styled Components</Title>
      </Cover>
      <Content>

      <Logo source={require('../assets/react.jpg')}/>
      <Wrapper>
      <Caption>React Native</Caption>
      <Subtitle>5 of 12 sections</Subtitle>
      </Wrapper>
      </Content>

    </Container>
  );
};

const Container = styled.View`
  background: white;
  width: 288px;
  height: 266px;
  border-radius: 14px;
  margin-left: 20px;
  margin-top: 20px;
  color: red;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`;

const Cover = styled.View`
  width: 100%;
  height: 200px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  overflow: hidden;
`;
const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;

`;

const Title = styled.Text`
    color: white;
    margin-left: 14px;
    font-size: 22px;
    font-weight: bold;
    width: 150px
`;

const Content = styled.View`
    padding-left: 20px;
    flex-direction: row;
    align-items: center;
`

const Logo = styled.Image`
    width: 44px;
    height: 44px;
`
const Wrapper = styled.View`
margin-left: 10px
`

const Caption = styled.Text`
color: #3c4560;
font-size: 17px;
font-weight: 600
`;

const Subtitle = styled.Text`
color: #b8bece;
font-weight: 600;
font-size: 16px;
text-transform: uppercase;
margin-top: 3px
`

export default Card;
