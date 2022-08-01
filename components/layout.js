import Navbar from '../components/navbar'
import Meta from '../components/meta'
import Footer from '../components/footer'
import styled from 'styled-components'
import { theme } from '../theme'



export default function Layout({preview, children}){
    return (
        <>
        <Meta />
        <Navbar />
         <main> {children}</main>
         <Footer />
        </>
    )
}