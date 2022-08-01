import { useRouter } from 'next/router'
import Layout from '../../components/layout';
import { theme } from '../../theme';
import { projects } from '../projects';


export default function Project(){

    const router = useRouter()
    const { projects } = router.query

    return (
        <Layout>
      </Layout>
    )
}