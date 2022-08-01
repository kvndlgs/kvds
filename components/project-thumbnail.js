import * as React from 'react';
import styled from 'styled-components'
// import { projects } from '../pages/projects'
import { theme } from '../theme';
import StyledLink from './styled-link'


const StyledThumbnail = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: flex-start;
  padding: ${theme.space[4]+'px'};
  
  img {
    width: 300px;
    height: 300px;
  }
`
function Thumbnail({image, title}){
    return (
        <StyledThumbnail>
            <h5> {title }</h5>
            <img src={image} alt={title} />
        </StyledThumbnail>
    )
}


export default function ProjectThumbnail({image, title, href}){
    return (
        <StyledLink href={href}>
            <Thumbnail image={image} title={title} />
        </StyledLink>
    )
}