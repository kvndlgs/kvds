import * as React from 'react';
import styled from 'styled-components';
import { theme } from '../theme';
import StyledLink from './styled-link';


const StyledBurger = styled.div`
  width: 2rem;
  height:1.4rem;
  display: none;
  flex-direction: column;
  justify-content:space-between;
  align-self: center;
  z-index: 9999;
  :hover {
    cursor: pointer;
    span {
      background: ${theme.colors.primary};
      transform-origin: 2px;
      transition: all 0.2s ease-in;
      :first-child {
        transform: rotate(45deg);
      }
      :nth-child(2) {
        transform: translate(-20px);
        display: none;
      }
      :nth-child(3) {
        transform: rotate(-45deg);
      }
    }
  }
  span {
    height:0.25rem;
    padding:0;
    background: ${theme.colors.secondary};
    width:2rem;
    border-radius: 0.25rem;
    position: relative;
  }
  @media(max-width:960px) {
    display: flex;
  }
`

const StyledMenu = styled.nav`
 display: flex;
 flex-direction: row;
 align-items: center;
 height: auto;
 max-width: 100vw;
 background: #fff;
 justify-content: space-between;
 padding: ${theme.space[4] + 'px'} ${theme.space[5] + 'px'};



 @media(max-width: 960px) {
  height: auto;
  padding: ${theme.space[3] + 'px'} ${theme.space[4]+ 'px'};
 }
  .start {
   display: flex;
   align-items:center;
   padding:0;
   margin:0;
   justify-content:center;
   a {
    height: 50px;
   }
  }

 .end {
  display: flex;
  justify-content: space-around;
  margin: 0 -0.1rem;
  &.open {
    display: flex;
  }
  a {
    align-self: center;
    margin: 0 ${theme.space[3] + 'px'};
    padding: 0 ${theme.space[1]+'px'};
    text-decoration: none;
    color: ${theme.colors.secondary};
    &:hover {
      color: ${theme.colors.primary};
    }
  }
  @media(max-width:960px) {
    display: none;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
    height: calc(100% - 85px);
    top:82px;
    bottom:0;
    left:0;
    width:100vw;
    position: absolute;
    background: ${theme.colors.primary};
    z-index: 8888;
    a {
      margin:0;
      padding:0;
      display: flex;
      align-items:center;
      justify-content: center;
      width: 100vw;
      height: 25vh;
      align-self: space-between;
      justify-self: center;
      border-bottom: 1px solid ${theme.colors.secondary};
      transition: all 0.2s ease-in;
      :hover {
        background: ${theme.colors.secondary};
      }
      :first-child {
        border-top: 1px solid ${theme.colors.secondary};
      }
      :last-child {
        border-bottom: 0;
      }
    }
  }
}
`


function Menu() {
  const [open, setOpen] = React.useState(false)
  return (
    <StyledMenu>
      <div className="start">
      <StyledLink href="/">
      <svg  version="1.1" width="50px" height="50px"  xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512" >
            <g >
                <g >
                    <g >
                        <circle fill="#3D1556" className="circle" cx="256" cy="256" r="256" />
                    </g>
                    <g >
                    </g>
                </g>
                <path fill="#E5C1FB" className="initials" d="M262.7,337l27.3-60.2l21.6-45.6l-24,39L258.7,176h59c44.5,0,80.4,36,80.4,80.5
		S361.9,337,317.5,337H262.7z M251,337l-42.6-78.2l-22.5,36.7l20.3-44.8l33.2-75.5L114,175.4V337H251z"/>
            </g>
        </svg>
      </StyledLink>
      </div>
      <Burger open={open} onClick={() => setOpen(!open)} />
      <div className={!open ? "end" : "end open"}>
      <StyledLink href="/projects">
        PROJETS
      </StyledLink>
      <StyledLink href="/services">
        SERVICES
      </StyledLink>
      <StyledLink href="/whoami">
        WHOAMI
      </StyledLink>
      <StyledLink href="/contact">
        CONTACT
      </StyledLink>
      </div>
    </StyledMenu>
  )
}
function Burger({open, onClick}) {
  return (
    <StyledBurger open={open} onClick={onClick}>
      <span></span>
      <span></span>
      <span></span>
    </StyledBurger>
  )
}


export default function Navbar(){
  return (
  <header>
   <Menu />
  </header>
  )
}