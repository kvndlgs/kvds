import { createGlobalStyle } from "styled-components"
import { theme } from '../theme';

export const Global = createGlobalStyle`
* {
  box-sizing: border-box;
  &::before, &::after {
    box-sizing: border-box;
  }
}
html {
  font-size:14px;
}
  body {
    width:100%;
    height: 100%;
    margin:0;
    padding:0;
  }
  img {
    max-width: 100%;
  }
  p  {
    font-family: Outfit-Regular, sans-serif;
    font-size: 17px;
    line-height:32px;
    color: ${theme.colors.text};
  }
  a {
    font-family: Outfit-SemiBold, sans-serif;
    color: ${theme.colors.link};
    font-size: 0.88rem;
    letter-spacing:0.05rem;
  }
  h1 {
    font-family: IntegralCF-Bold, sans-serif;
    font-size: 3.49rem;
    color: ${theme.colors.title};
    letter-spacing: 0.2rem;
  }
  h2 {
    font-family: IntegralCF-Bold, sans-serif;
    font-size: 2.71rem;
    color: ${theme.colors.title};
    letter-spacing: 0.12rem;
  }
  h3 {
    font-family: IntegralCF-Medium, sans-serif;
    font-size: 2.3rem;
    color: ${theme.colors.title};
    letter-spacing: 0.2rem;
  }
  h4 {
    font-family: IntegralCF-Regular, sans-serif;
    font-size: 2rem;
    color: ${theme.colors.title};
    letter-spacing: 0.2rem;
  }
  h5 {
    font-family: IntegralCF-Medium, sans-serif;
    font-size: 1.35rem;
    color: ${theme.colors.title};
    letter-spacing: 0.2rem;
  }
`
