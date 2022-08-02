import Head from 'next/head'
import Layout from '../components/layout'
import styled from 'styled-components'
import StyledLink from '../components/styled-link'
// import { neonCursor } from 'threejs-toys';
import * as React from 'react'
import { theme } from '../theme';
import Image from 'next/image';
import Hero from '../components/hero';


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

/*

const Hero = styled.div`
width: 100%;
height: auto;
margin:0 auto;
padding: ${theme.space[3]+'px'}  ${theme.space[3]+'px'} ${theme.space[4]+'px'}  ${theme.space[3]+'px'};
#text {
  width:100%;
  height: auto;
  margin:0 auto;
  padding:0;
  display: flex;
  justify-content: center;
  align-items:center;
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
*/

const ProjectsPreview = styled.div`
 display: flex;
 flex-direction: column;
 width:100%;
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
      <Layout>
        <div className="container mx-auto">
        <Hero />
        </div>
        {/*
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
  */}

        <section className="p-11 bg-primary-300">
            <h2 className="text-2xl font-sans font-bold text-center text-secondary"> RECENT PROJECTS </h2>
            <div className="columns-2">

            </div>
        </section>

        <section className="p-11 bg-green-lite">
        <h2 className="text-2xl font-sans text-center"> WHAT I DO? </h2>
        <div className="flex">
          <div className="p-11 w-fit flex flex-col">
          <h4 className="text-lg font-sans font-bold"> WEB DEVELOPMENT </h4>
          <div>
          <Image width={140} height={140} src="/images/icons/webdev-icon.png" alt="webdev" />
          </div>
          <a href='/projects'> SEE WORKS </a>
          </div>
          <div className="p-11 w-fit flex flex-col">
          <h4 className="text-lg font-sans font-bold"> WEB DEVELOPMENT </h4>
          <div>
          <Image width={140} height={140} src="/images/icons/webdev-icon.png" alt="webdev" />
          </div>
          <a href='/projects'> SEE WORKS </a>
          </div>
          </div>
        </section>

        <section className=" bg-secondary">
          <h2 className="text-2xl font-sans font-bold text-center text-primary-50 p-11"> MY SKILLS</h2>
          
          <div className="grid grid-cols-4 grid-rows-2 gap-4 p-11 center">
          <div>
          <Image width='100px' height='100px' src="/images/icons/html.png" alt="html" />
          </div>
          <div>
          <Image  width={100} height={100}  src="/images/icons/css.png" alt="css" />
          </div>
          <div>
          <Image width={100} height={100}  src="/images/icons/js.png" alt="js" />
          </div>
          <div>
          <Image width={100} height={100}  src="/images/icons/js.png" alt="ts" />
          </div>
          <div>
          <Image width={100} height={100}  src="/images/icons/node.png" alt="node" />
          </div>
          <div>
          <Image width={100} height={100}  src="/images/icons/react.png" alt="react" />
          </div>
          <div>
          <Image width={100} height={100}  src="/images/icons/figma.png" alt="figma" />
          </div>
          <div>
          <Image width={100} height={100}  src="/images/icons/git.png" alt="git" />
          </div>
          </div>
        </section>

        <section className="p-11">
          <h2 className="text-2xl font-sans text-center text-primary-400"> LET'S DO THIS </h2>

          <form className="flex flex-wrap">
            <label>NOM</label>
            <input
             type="text"
             />

             <label> EMAIL </label>
             <input
               type="email"
              />
              <button type="submit">SEND</button>
          </form>

        </section>

      </Layout>
    </>
  )

  
}


