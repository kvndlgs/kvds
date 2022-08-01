import * as React from 'react';
import styled from 'styled-components'
import { theme } from '../theme';
import StyledLink from './styled-link'
import Image from 'next/image';


const StyledThumbnail = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: flex-start;
  padding: ${theme.space[4]+'px'};

`
function Thumbnail({image, title}){
    return (
        <StyledThumbnail>
            <h5> {title }</h5>
            <Image src={image} alt={title} />
        </StyledThumbnail>
    )
}


export default function ProjectThumbnail({image, title, href}){
    return (
        <StyledLink href={href}>
            <Thumbnail width={300} height={300} image={image} title={title} />
        </StyledLink>
    )
}