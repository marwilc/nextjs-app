import KawaiiHeader from '@components/KawaiiHeader/KawaiiHeader'
import Layout from '@components/Layout/Layout'
import ProductList from '@components/ProductList/ProductList'
import fetch from 'isomorphic-unfetch'

export const getStaticProps = async () => {
  const response = await fetch('https://nextjs-app-ay8o.vercel.app/api/avo')
  const { data: productList }: TAPIAvoResponse = await response.json()

  return {
    props: {
      productList,
    },
  }
}

const HomePage = ({ productList }: { productList: TProduct[] }) => {
  return (
    <Layout>
      <KawaiiHeader />
      <ProductList products={productList} />
    </Layout>
  )
}

export default HomePage
