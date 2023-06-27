import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom'
import { Github } from '../components/AllSvgs';
import { motion } from 'framer-motion'


const Box = styled(motion.li)`
width:18rem;
height:50vh;
background-color:${props => props.theme.text};
color:${props => props.theme.body};
padding:1.5rem 2rem;
margin-right:4rem;
border-radius:0 50px 0 50px;
display:flex;
flex-direction:column;
justify-content:space-between;
border:1px solid ${props => props.theme.body};
transition:all 0.2s ease;

&:hover{
background-color:${props => props.theme.body};
color:${props => props.theme.text};
border:1px solid ${props => props.theme.text};

}
`
const Title = styled.h2`
font-size:calc(1em +  0.5vw);
`
const Description = styled.h2`
font-size:calc(0.8em +  0.3vw);
font-family:'Karla',sans-serif;
font-weight:500;
`
const Tags = styled.div`
border-top:2px solid ${props => props.theme.body};
padding-top:0.5rem;
display:flex;
flex-wrap:wrap;
${Box}:hover &{
border-top:2px solid ${props => props.theme.text};
}
`
const Tag = styled.span`
margin-right:1rem;
font-size:calc(0.8em + 0.3vw);
`
const Footer = styled.footer`
display:flex;
justify-content:space-between;

`

const Link = styled(NavLink)`
background-color:${props => props.theme.body};
color:${props => props.theme.text};
text-decoration:none;
padding:0.5rem calc(2rem + 3vw);
border-radius:0 0 0 50px;
font-size:calc(1em + 0.5vw);
visibility: ${({ hiddens }) => (hiddens ? 'hidden' : 'visible')};


${Box}:hover &{
background-color:${props => props.theme.text};
color:${props => props.theme.body}

}
`


const Git = styled(NavLink)`
color:inherit;
visibility: ${({ hiddens }) => (hiddens ? 'hidden' : 'visible')};
/* visibility: hidden; */

text-decoration:none;

${Box}:hover &{
 &>*{
  fill:${props => props.theme.text};
 }
}

`

//Framer motion configuration
const Item = {
  hidden: {
    scale: 0
  },
  show: {
    scale: 1,
    transition: {
      type: 'spring',
      duration: 0.5
    }
  }
}

const Card = (props) => {

  const { id, name, description, tags, demo, github, image } = props.data;
  console.log(github)

  return (
    <Box key={id} variants={Item}>
      <Title>{name}</Title>
      <img src={image} alt={name} />
      <Description>
        {description}
      </Description>
      <Tags>
        {
          tags.map((t, id) => {
            return <Tag key={id}>#{t}</Tag>
          })
        }
      </Tags>
      <Footer>
        <Link to={{ pathname: `${demo}` }} target="_blank" hiddens={!demo} >
          Visit
        </Link>
        <Git to={{ pathname: `${github}` }} target="_blank" hiddens={!github}>
          <Github width={35} height={35} />
        </Git>
      </Footer>
    </Box>
  )
}

export default Card