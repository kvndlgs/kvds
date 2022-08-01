import Layout from '../components/layout'
import Head from 'next/head'
import styled from 'styled-components';
import Image from 'next/image';
import StyledLink from '../components/styled-link'
import { theme } from '../theme'

export const projects = [
  {
      title:  {
          en: 'Markal Collective Studio',
          fr: 'Les Studios Markal Collective'
      },
      description: {
          en: 'Website',
          fr: 'Conception du siteweb pour Les Studio Markal Collective.'
      },
      thumbnailImage: '/images/markalcollective-thumbnail.png',
      contentImage1: '/images/homepagex2.png',
      contentImage2: '/images/servicesx2.png',
      coverImage: '/images/markalcollective-cover.png',
      text1: {
        en: `Markal Collective is a young and ambitious enterprise that is making in the musical production industry.
        They needed a website as well as a complete branding that would reflect their values and goals. 
        The website would allow customers to reach the team easily via live chat, book an appointment, 
        stay tuned with shows and events, listen to the latest songs and to buy merch.`,
        
        fr: `Markal Collective est une jeune et ambitieuse entreprise qui oeuvre dans le domaine de la production musicale
        et necessitais une image de marque refletants leurs valeurs et objectifs de façon precise. Le but premier etant
        d’offrir a leurs clients potentiels une façon simple et rapide d’entrée en contact avec eux ainsi que de trouver
        l’information nécessaire sur leurs services et disponibilitées. Étant donné la nature competitive du domaine,
        ils etaient primordiale de developper une solution permettant facilement d’ajouter du contenu ie: évènements
        a venir, sorties d'albums, chansons et actualités.`
      },
      source: 'https://github.com/kvdndlgs/markalcollective.git',
      visit: 'https://markalcollective.com',
      id: 0
  },
  {
      title: {
          en: 'Portfolio website',
          fr: 'Portfolio'
      },
      description: {
          en: 'Portfolio website',
          fr: 'Mon Portfolio'
      },
      thumbnailImage: '/images/thumbnailplaceholder.png',
      coverImage: '',
      source: '',
      visit: '',
      id: 1
  },

  {
      title: {
          en: 'Le Dia Kessa - Prêt-a-manger',
          fr: 'Le Dia Kessa - Prêt-a-manger'
      },
      description: {
          en: '',
          fr: ''
      },
      thumbnailImage: '/images/lediakessa-thumbnail.png',
      coverImage: '/images/lediakessa-cover.png',
      source: '',
      visit: '',
      id: 2

  },
  {
      title: {
          en: 'FUBS',
          fr: 'FUBS'
      },
      description: {
          en: '',
          fr: ''
      },
      thumbnailImage: '/images/thumbnailplaceholder.png',
      coverImage: '',
      source: '',
      visit: '',
      id: 3

  },
  {
      title: {
          en: 'Democracy.js',
          fr: 'Democracy.js'
      },
      description: {
          en: 'A minimalist framework for a distributed country, currently on Ethereum.',
          fr: 'A minimalist framework for a distributed country, currently on Ethereum.'
      },
      thumbnailImage: '/images/thumbnailplaceholder.png',
      coverImage: '',
      source: 'https://github.com/kvndlgs/democracy',
      visit: 'democracy.js.org',
      id: 4

  },
]


const Container =  styled.div`
padding: ${theme.space[4]+'px'};
  h2 {
    text-align: center;
    color: ${theme.colors.secondary}
  }
`

const ProjectList = styled.div`
 position: relative;
 max-width: 100vw;
 display: flex;
 justify-content: center;
 flex-direction: row;
 flex-flow: row wrap;
 padding: ${theme.space[4]+'px'} ${theme.space[4]+'px'} ${theme.space[5]+'px'} ${theme.space[4]+'px'};
`

const StyledProjectListItem = styled.div`
 margin: ${theme.space[4]+'px'};
 position: relative;
 border: 4px solid transparent;
 p {
  position: absolute;
  max-width:200px;
  z-index:1;
  margin:20px;
  color: #fff;
 }
`

function ProjectListItem({project}){
  return (
    <StyledProjectListItem>
      <p> { project.title.en }</p>
      <Image fixed src={project.thumbnailImage} alt={project.title}  height={200} width={200} />
    </StyledProjectListItem>
  )
}

export default function Projects() {
  return (
    <>
      <Layout >
        <Head>
          <title>Works</title>
        </Head>
        <Container>
           
           <h2> PROJECTS </h2>
           <ProjectList>
             {
              projects.map(item => {
                return (
                  <StyledLink href={`/projects/${item.id}`} key={item.id}>
                    <ProjectListItem project={item} />
                  </StyledLink>
                )
              })
             }
           </ProjectList>
        </Container>
      </Layout>
    </>
  )
}

