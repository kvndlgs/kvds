import { useRouter } from 'next/router'
import * as React from 'react';
import Layout from '../../components/layout';
import { theme } from '../../theme';
import { projects } from '../projects';
import styled from 'styled-components'
import 'aos';
import Aos from 'aos';

const ProjectWrapper = styled.div`
  width: 100%;
  height: auto;
  padding: ${theme.space[3]+'px'} ${theme.space[4]+'px'};
  @media(max-width: 960px) {
    padding: ${theme.space[2]+'px'} ${theme.space[2]+'px'};
  }
`

const FlexRow = styled.div`
 display: flex;
 flex-direction: row;
 align-items:center;
 justify-content: space-between;
 padding: ${theme.space[4]+'px'} 0;
 @media(max-width: 960px){
    flex-direction: column;
 }
 h2, h3, h4, h5 {
        text-align:center;
    }
 .animation-item, .text-content {
    padding: ${theme.space[2]+"px"};
    p {
        text-align:justify;
    }
 }
`


const ProjectHero = styled.div`
  width: 100%;
  height: auto;
  h2 {
    margin-bottom:${theme.space[3]+'px'};
  }
  span {
    font-size: 1.2rem;
    line-height:0;
    font-family: Outfit-Bold, sans-serif;
    margin-top: 0;
    margin-left: ${theme.space[2]+'px'};
    letter-spacing:0.2rem;
    color: #d1d1d1;
  }
  img {
    max-width: 100%;
    margin-top: ${theme.space[4]+'px'};
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  }
`

const Animation = styled.div`

`

export default function Project(){

    const router = useRouter()
    const { id } = router.query

    React.useEffect(() => {
        Aos.init({
            duration: 1000
        })
    })

    return (
        <Layout>
            <ProjectWrapper>
            <ProjectHero>
            <h2>{projects[0].title.en}</h2> 
            <span> CASE STUDY </span>
            <img src={projects[0].coverImage} alt="" />
            </ProjectHero>
            <div className="text-content">
            <h4> THE CHALLENGE </h4>
                <p>
                    {projects[0].text1.en}
                </p>
            </div>
            <div className="text-content">
                <h4> THE PLAN </h4>
                <p>
                Now that there is the Tec-9, a crappy spray gun from South Miami. 
                This gun is advertised as the most popular gun in American crime. 
                Do you believe that shit? It actually says that in the little book 
                that comes with it: the most popular gun in American crime. 
                Like they're actually proud of that shit. 
                </p>
            </div>
            <div className="text-content">
                <h4> THE RESULT </h4>
            </div>
            <FlexRow>
            <div className="text-content">
                <h5> HOME PAGE </h5>
            
                <p>
                You think water moves fast? You should see ice. 
                It moves like it has a mind. Like it knows it killed the world once and got a taste for murder.
                After the avalanche, it took us a week to climb out. Now, I don't know exactly when we turned on each other,
                but I know that seven of us survived the slide... and only five made it out. Now we took an oath, 
                that I'm breaking now. We said we'd say it was the snow that killed the other two, but it wasn't.
                </p>
            
            </div>
            <div className="animation-item" data-aos="zoom-out-down">
                <img src={projects[0].contentImage1} alt="intro" />
            </div>
            </FlexRow>
            <FlexRow>
            <div className="animation-item" data-aos="zoom-out-down">
                <img src={projects[0].contentImage2} alt="services" />
            </div>
            <div className="text-content">
               <h5>SERVICES </h5>
                 <p>
                 Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, 
                 and on the strength of that one show they decide if they're going to make more shows.
                </p>
            </div>
            </FlexRow>
            <div className="text-content">
                <h5>PRICE LIST </h5>
            </div>

            <div className="text-content">
                <h5> MEDIAS </h5>
                <h5> CUSTOM MUSIC PLAYER </h5>
            </div>
            <div className="text-content">
                <h5>EVENTS </h5>
            </div>
            <div className="text-content">
                <h5>CONTACT </h5>
            </div>
            </ProjectWrapper>
      </Layout>
    )
}