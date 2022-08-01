import Link from 'next/link';
import styled from 'styled-components';

const Sl = styled.a` 
text-decoration: none;
margin:0;
padding:0;
`

export default function StyledLink({href, children}){
    return (
        <Link href={href} passHref>
        <Sl>
           {children}
        </Sl>
        </Link>
    )
}