import Head from 'next/head'
import Layout from '../components/layout'
import styled from 'styled-components'
// import { neonCursor } from 'threejs-toys';
import * as React from 'react'
import { theme } from '../theme';
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
  height: auto;
  padding: ${theme.space[3]+'px'};
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
#text {
  height: auto;
  display: flex;
  justify-content: center;
  align-items:center;
  padding-bottom: ${theme.space[4]+'px'};
.words {
    font-family: IntegralCF-Heavy, sans-serif;
    display: flex;
    flex-direction: column;
    height: auto;
    padding: ${theme.space[5]+'px'};
    @media(max-width: 960px){
      font-size: 80%;
    }
  #tinker {
    font-size: 34px;
    line-height:34px;
    color: ${theme.colors.primary};
  }
  #web {
    font-size:80px;
    line-height:80px;
    color: ${theme.colors.secondary};
  }
  #experiences {
    font-size: 46px;
    line-height:34px;
    color: ${theme.colors.secondary};
  }
  #and {
    font-size: 16px;
    color: ${theme.colors.primary};
  }
  #brands {
    font-size: 64px;
    line-height:52px;
    color: ${theme.colors.secondary};
  }
  #thatstands {
    font-size: 44px;
    line-height:34px;
    color: ${theme.colors.secondary};
  }
  #out {
    font-size: 140px;
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
 padding: ${theme.space[3]+'px'};
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
        <meta name="description" content="Fuck off" />
        <link rel="icon" href="/favicon.ico" />
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

        {/* recent projects */}

        <ProjectsPreview>
          <div className="title">
            <h2> RECENT PROJECTS </h2>
            </div>
            <div className="recent-projects"></div>
        </ProjectsPreview>
        <Services>
          <h2> WHAT I DO? </h2>
        </Services>
        <Skills>
          <h2> MY SKILLS</h2>
        </Skills>

        <Contact>
          <h2> LET'S DO THIS </h2>
        </Contact>

      </Layout>
    </>
  )

  
}


