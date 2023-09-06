import Layout from '@components/Layout/Layout'
import { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

// // MyApp.getInitialProps = async (
// //   context: AppContexts
// // ): Promise<AppOwnProps & AppInitialProps> => {
// //   const ctx = await App.getInitialProps(context)

// //   return { ...ctx, example: 'data' }
// }
