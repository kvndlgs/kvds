import Head from 'next/head'
import * as Constants from '../lib/constants';


export default function Meta() {
    return (
        <Head>
            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/images/favicon/apple-touch-icon.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/images/favicon/favicon-32x32.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/images/favicon/favicon-16x16.png"
            />
            <link
                rel="mask-icon"
                href="/images/favicon/safari-pinned-tab.svg"
                color="#000000"
            />
            <link rel="shortcut icon" href="/images/favicon/favicon.ico" />
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta name="msapplication-config" content="/images/favicon/browserconfig.xml" />
            <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
            <meta
                name="description"
                content={`${Constants.NAME} Portfolio.`}
            />
            <meta property="og:image" content={Constants.MAIN_OG_IMAGE_URL} />
        </Head>
    )
}