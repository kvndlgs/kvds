import {ThemeProvider} from 'styled-components'
import { theme } from '../theme'
import { Global } from '../components/globalStyle'
import '../components/fonts.css'
import '../components/aos.css'


export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
    <Global />
    <Component {...pageProps} />
    </ThemeProvider>
  )
}
