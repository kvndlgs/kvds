// import {ThemeProvider} from 'styled-components'
// import { theme } from '../theme'
// import { Global } from '../components/globalStyle'
import '../styles/global.css';
import '../styles/fonts.css'
import '../components/aos.css'


export default function MyApp({ Component, pageProps }) {
  return (
    <>
    <Component {...pageProps} />
    </>
  )
}
