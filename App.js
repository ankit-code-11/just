import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Card from './Components/Card'
const App = () => {


  return (
    <Container>
      <Avatar source={{ uri: 'https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg'}} />
      <Title>Welcome back</Title>
      <Name>Ankit</Name>
      <Subtitle>Continue learning</Subtitle>
      <Card />
    </Container>
  )
}

const Container = styled.View`
background: #f0f3f5;
flex: 1;
flex-direction: column;
margin-top: 50px;
`

const Title = styled.Text`
font-size: 16px;
font-weight: 500;
color: grey;
margin-left: 50px;
`
const Name = styled.Text`
font-size: 16px;
margin-left: 50px;
width: 500px;
font-weight: bold
`

const Avatar = styled.Image`
width: 44px;
height: 44px;
border-radius: 22px;
position: absolute;
top: 0;
left: 0;
`

const Subtitle = styled.Text`
color: grey;
margin: 20px 0px 0px 40px;
text-transform: uppercase
`

export default App