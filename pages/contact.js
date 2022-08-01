import * as React from 'react';
import { theme } from '../theme';
import Layout from '../components/layout';
import Head from 'next/head';


export default function Contact(){
   
    return (
        <>
             <Head><title> CONTACT </title></Head>     
             <Layout>   
             <div>
                <form action="api/form">
                  <label for="name"> Name </label>
                  <input type="text" id="name" />
                  <button type="submit">ENVOYER</button>
                </form>
                </div>                
        </Layout>
        </>
    )
}