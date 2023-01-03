import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme } from './Themes'
import { Design,Develope } from './AllSvgs'
import LogoComponent from '../subComponents/LogoComponent'

import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton'
import ParticleComponent from '../subComponents/ParticleComponent'
import BigTitle from '../subComponents/BigTitle'

const Box=styled.div`
background-color:${props=>props.theme.body};
width:100vw;
height:100vh;
position:relative;
display:flex;
justify-content:space-evenly;
align-items:center;
`
const LogoCointainer=styled.h4`
// position:fixed;
margin-left:-0.85rem;
margin-top:-35.3rem;
`
const Main=styled.div`
border:2px solid ${props=>props.theme.text};
color:${props=>props.theme.text};
background-color:${props=>props.theme.body};
margin-top:5rem;
padding:1rem;
width:35vw;
height:70vh;
z-index:3;
line-height:1.5;
cursor:pointer;

font-family:'Ubuntu Mono',monospace;
display:flex;
flex-direction:column;
justify-content:space-between;

&:hover{
  color:${props=>props.theme.body};
  background-color:${props=>props.theme.text};
}
`

const Title=styled.h2`
display:flex;
justify-content:center;
align-items:center;
font-size:calc(1em + 1vw);

${Main}:hover &{
  &>*{
    fill:${props=>props.theme.body};

  }
}
&>*:first-child{
margin-right:1rem;
}
`

const Description=styled.div`
color:${props=>props.theme.text};
font-size:calc(0.6em + 1vw);
padding:0.5rem 0;

${Main}:hover &{
  color:${props=>props.theme.body};
}
strong{
  margin-bottom:1rem;
  text-transform:uppercase;
}
ul,p{
  margin-left:2rem;
}
`


const MySkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
    <Box>
    <LogoCointainer>
        <LogoComponent theme='light'/>
    </LogoCointainer>
    <PowerButton/>
    <SocialIcons theme='light'/>
    <ParticleComponent theme='light'/>
    <Main>
         <Title>
            <Develope width={40} height={40}/> Blockchain Developer
         </Title>
         <Description>
          I love to design and build blockchain-based applications and systems, integrate blockchain technology into existing systems, and test and debug blockchain-based solutions
         </Description>
         <Description>
         <strong>Skills</strong> 
          <p>Solidity, Hardhat, Web3, Ether, Oracles & Chainlink.</p>
         </Description>
         <Description>
          <strong>TOOLS</strong> 
          <p>VScode, Github, Remix.</p>
         </Description>

    </Main>
    <Main>
         <Title>
         <Design width={40} height={40}/>DApp Developer
         </Title>
        <Description>
          I love to design and build decentralized applications (DApps) that run on a blockchain platform, integrate the DApp with the blockchain and other external systems, test and debug the DApp.
        </Description> 
        <Description>
        <strong>Skills</strong> 
          <p>JavaScript, React, Node, Blockchain API.</p>
        </Description>
        <Description>
        <strong>TOOLS</strong> 
        <p>VScode, Github.</p>
        </Description>
    </Main>
    <BigTitle text="SKILLS" top="80%" right="30%"/>
    </Box>
    </ThemeProvider>
  )
}

export default MySkillsPage