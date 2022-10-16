import '../styles/globals.css'
import Layout from '../components/Layout'
import NoFooterLayout from '../components/NoFooterLayout'
import {useRouter} from 'next/router';



const dontUseLayout = ['/signup']
const dontUseFooter = ['/contactuspage']

function MyApp({ Component, pageProps }) {
  const router = useRouter();


  if( dontUseLayout.includes(router.pathname))  {
    return (
      <Component {...pageProps} />
    )
  }

  if( dontUseFooter.includes(router.pathname))  {
    return (
      <NoFooterLayout> <Component {...pageProps} /> </NoFooterLayout>
    )
  }

  return (
    <Layout> <Component {...pageProps} /></Layout>
  )
}

export default MyApp