import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import { DarkTheme} from './Themes'
import LogoComponent from '../subComponents/LogoComponent'

import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton'
import ParticleComponent from '../subComponents/ParticleComponent'

import astronaut from '../assets/Images/spaceman.png'
import BigTitle from '../subComponents/BigTitle';

const Box=styled.div`
background-color:${props=>props.theme.body};
width:100vw;
height:100vh;
position:relative;
overflow:hidden;
`

const float=keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px)}
100% { transform: translateY(-10px) }

`
const Spaceman=styled.div`
position:absolute;
top:10%;
right:5%;
width:20vw;
animation:${float} 4s ease infinite;

img{
  width:100%;
  height:auto;
}
`
const Main=styled.div`
border:2px solid ${props=>props.theme.text};
color:${props=>props.theme.text};
padding:2rem;
width:50vw;
height:72vh;
z-index:3;
line-height:1.5;

display:flex;
justify-content:center;
align-items:center;
font-size:calc(0.3rem + 0.9vw);
backdrop-filter:blur(4px);

position:absolute;
left:calc(5rem + 5vw);
top:6rem;

font-family:'Ubutntu Mono',monospace;
font-style:italic;
`


const  AboutPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
    <Box>
       <LogoComponent theme='dark'/>
       <SocialIcons theme='dark'/>
       <PowerButton />
       <ParticleComponent theme='dark'/>
       <Spaceman>
         <img src={astronaut} alt="spaceman"/>
       </Spaceman>
       <Main>
       As a Blockchain Enthusiast with  year of experience,A passion for using my skills to build innovative solutions on the EVM base blockchain.
       <br/>
       <br/> 
       I am proficient in a range of programming languages, including Solidity and JavaScript, and have experience working with Ethereum development frameworks such as Hadhat, Web3.js, ether.js. I am comfortable working with both blockchain front-end and back-end technologies and have a strong understanding of the EVM base blockchain and its underlying architecture.
       <br/>
       <br/> 
       In my current role as a blockchain developer, I have worked on a variety of projects, including building smart contracts, creating decentralized applications (DApps), and integrating blockchain solutions into existing systems. I am a proactive and detail-oriented individual who is always looking for ways to improve and optimize my work.
       <br/>
       <br/>
       I am excited about the endless possibilities of the EVM base blockchain and am eager to continue learning and growing as a developer. I am confident that my skills and experience make me a strong candidate for any project requiring EVM blockchain expertise.
       </Main>
       <BigTitle text="ABOUT" top="10%" left="5%"/>
     </Box>
    </ThemeProvider>
  )
}

export default AboutPage

