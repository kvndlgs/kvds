import Navbar from '../components/navbar'
import Meta from '../components/meta'
import Footer from '../components/footer'
import 'normalize.css';



export default function Layout({preview, children}){
    return (
        <>
        <Meta />
        <Navbar />
         <main className="p-0"> {children}</main>
         <Footer />
        </>
    )
}