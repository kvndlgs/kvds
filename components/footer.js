import * as React from 'react';
import styled from 'styled-components';
import { theme } from '../theme';

const StyledFooter = styled.footer` 
 width: 100%;
 height: auto;
 display: flex;
 padding: ${theme.space[3]+'px'};
`

export default function Footer(){
    return (
        <StyledFooter>
        <small> Kevin Desloges © {new Date().getFullYear()} </small>
        </StyledFooter>
    )
}