import { useRouter } from 'next/router'
import Head from 'next/head'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import Layout from '../../components/layout'


export default function Project({ project }) {
  const router = useRouter()

  if (!router.isFallback && !project) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout>
      <Container>
        {router.isFallback ? (
          <h2>Loading…</h2>
        ) : (
          <>
            <article>
              <Head>
                <title>
                  {project.title.en}
                </title>
                <meta property="og:image" content={project.coverImage} />
              </Head>

             <div>
               <img src={project.coverImage} alt="cover" />
             </div>
            </article>
          </>
        )}
      </Container>
    </Layout>
  )
}
