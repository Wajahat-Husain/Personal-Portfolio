import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import img from '../assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import PowerButton from '../subComponents/PowerButton'
import AnchorComponent from '../subComponents/AnchorComponent'

import { motion } from 'framer-motion'

import {Blogs} from '../data/BlogData'
import BlogComponent from './BlogComponent'
import BigTitle from '../subComponents/BigTitle'

const MainContainer=styled(motion.div)`
background-image:url(${img});
background-size:cover;
background-repeat:no-repeat;
background-attachment:fixed;
background-position:center;
`

const Container=styled.div`
background-color:${props=>`rgba(${props.theme.bodyRgba},0.8)`};
width:100%;
height:auto;
position:relative;
padding-bottom:5rem;
`
const LogoCointainer=styled.h4`
position:fixed;
margin-left:2rem;
margin-top:2rem;
`

const Center=styled.div`
display:flex;
justify-content:center;
align-items:center;
padding-left:15rem;
padding-right:15rem;
padding-top:10rem;

`
const Grid=styled.div`
display:grid;
grid-template-columns:repeat(2,minmax(calc(10rem + 15vw),1fr));
grid-gap:calc(2rem + 2vw);
left:10rem;
`

//Framer-motion config

const container={
  hidden:{opacity:0},
  show: {
   opacity:1,
 
   transition:{
     staggerChildren:0.5,
     duration:0.5,
   }
  }
}


const BlogPage = () => {

const [numbers,setNumbers]=useState(0);

useEffect(()=>{
let num =(window.innerHeight-70)/30;
setNumbers(parseInt(num));
},[])

  return (
    <MainContainer
    variants={container}
    initial='hidden'
    animate='show'
    exit={{
      opacity:0, transition:{duration:0.5}
    }}
    >
       <Container>
          <LogoCointainer>
             <LogoComponent />
          </LogoCointainer>
          <PowerButton style={{'margin-left':'10rem'}} />
          <SocialIcons/>
          <AnchorComponent numbers={numbers}/>
       <Center>
       <Grid>
         {
           Blogs.map(blog=>{
           return <BlogComponent key={blog.id} blog={blog}/>
         })
        }
       </Grid>
       </Center>
       <BigTitle text="BLOG" top="5rem" left="5rem"/>
       </Container>    
    </MainContainer>
  )
}

export default BlogPage