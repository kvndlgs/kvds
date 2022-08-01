import Head from 'next/head'
import Layout from '../components/layout'
import styled from 'styled-components'
import StyledLink from '../components/styled-link'
// import { neonCursor } from 'threejs-toys';
import * as React from 'react'
import { theme } from '../theme';
import Image from 'next/image';
import { projects } from '../pages/projects';
import ProjectThumbnail from '../components/project-thumbnail';
import Container from '../components/container';



const bigTitle = {
  en: {
    content: `HELLO! I'M KEVIN. A FRONT-END DEV  & GRAPHIC DESIGNER FROM QUEBEC, CANADA.`
  },
  fr: {
    content: `BIEN L'BONJOUR! JE SUIS KEVIN. DÉVELOPPEUR FRONT-END & GRAPHIQUE DESIGNER SITUÉ AU QUÉBEC.`
  }
}
const subTitle = {
  en: {
    content: `Crafting tailored websites and lovely brands.`
  },
  fr: {
    content: `Je bricole des solution web sur mesure et images de marques.`
  }
}

const Contact = styled.section`
   width: 100%;
  height: auto;
  padding: ${theme.space[3]+'px'};
  background: #fff;
`

const Skills = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: auto;
  align-items:center;
  justify-content:center;
  padding: ${theme.space[5]+'px'};
  background: ${theme.colors.secondary};
`

const Services = styled.section`
  width: 100%;
  height: auto;
  padding: ${theme.space[3]+'px'};
  background: ${theme.colors.greenlite};
`

const Hero = styled.div`
width: 100vw;
height: auto;
margin:0 auto;
padding: ${theme.space[3]+'px'}  ${theme.space[3]+'px'} ${theme.space[4]+'px'}  ${theme.space[3]+'px'};
#text {
  height: auto;
  display: flex;
  justify-content: center;
  align-items:center;
  position: relative;
  top: -80px;
.words {
    font-family: IntegralCF-Bold, sans-serif;
    display: flex;
    flex-direction: column;
    height: auto;
    padding: ${theme.space[5]+'px'};
  #tinker {
    font-size: 32px;
    line-height:34px;
    color: ${theme.colors.secondary};
  }
  #web {
    font-size:80px;
    line-height:80px;
    color: ${theme.colors.secondary};
  }
  #experiences {
    font-size: 44px;
    line-height:34px;
    color: ${theme.colors.secondary};
  }
  #and {
    font-size: 15px;
    color: ${theme.colors.secondary};
  }
  #brands {
    font-size: 64px;
    line-height:52px;
    color: ${theme.colors.secondary};
  }
  #thatstands {
    font-size: 43px;
    line-height:34px;
    color: ${theme.colors.secondary};
  }
  #out {
    font-size: 135px;
    line-height:86px;
    color: ${theme.colors.primary};
  }

 }
}
`

const ProjectsPreview = styled.div`
 display: flex;
 flex-direction: column;
 width:100vw;
 height:auto;
 padding: ${theme.space[4]+'px'};
 margin:0 auto;
 overflow: hidden;
 align-items: center;
 justify-content: center;
 background: ${theme.colors.purplelite};
 .title {
  margin:0 auto;
  padding:0;
  text-align: center;
   h2 {
    color: ${theme.colors.secondary};
   }
 }
 .recent-projects {
  padding: ${theme.space[4]+'px'};
 }
`

export default function Home() {
  

  return (
    <>
      <Head>
        <title>Kevin Desloges</title>
        <meta name="description" content="prortfolio" />
      </Head>
      <Layout >
        <Hero id="hero">
          <div id="text">
            <div className="words">
              <div>
              <span id="tinker"> TINKER </span>
              <span id="web"> WEB </span>
              </div>

              <span id="experiences"> EXPERIENCES </span>

              <div>
              <span id="and"> AND </span>
              <span id="brands"> BRANDS </span>
              </div>
              <span id="thatstands"> THAT STANDS </span>
              <span id="out">OUT.</span> 
            </div>
          </div>
        </Hero>


        <ProjectsPreview>
          <div className="title">
            <h2> RECENT PROJECTS </h2>
            </div>
            <div className="recent-projects"></div>
        </ProjectsPreview>
        <Services>
          <h2> WHAT I DO? </h2>
          <h4> WEB DEVELOPMENT </h4>
          <Image margin="20px" width={140} height={140} src="/images/icons/webdev-icon.png" alt="webdev" />
          <StyledLink href='/projects'> SEE WORKS </StyledLink>
        </Services>
        <Skills>
          <h2> MY SKILLS</h2>
          <div className="skill-icons">
          <Image width='100px' height='100px' responsive src="/images/icons/html.png" alt="html" />
          <Image  width={100} height={100} responsive src="/images/icons/css.png" alt="css" />
          <Image width={100} height={100} responsive src="/images/icons/js.png" alt="js" />
          <Image width={100} height={100} responsive src="/images/icons/node.png" alt="node" />
          <Image width={100} height={100} responsive src="/images/icons/react.png" alt="react" />
          <Image width={100} height={100} responsive src="/images/icons/figma.png" alt="figma" />
          <Image width={100} height={100} responsive src="/images/icons/git.png" alt="git" />
          </div>
        </Skills>

        <Contact>
          <h2> LET'S DO THIS </h2>

        </Contact>

      </Layout>
    </>
  )

  
}


