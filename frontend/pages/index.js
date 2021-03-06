import Head from 'next/head'
import { useQuery } from 'urql'
import Product from '../components/product'
import { PRODUCT_QUERY } from '../lib/query'
import { Gallery } from '../styles/Gallery'

const cards = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { delayChildren: 0.3, staggerChildren: 0.1 },
  },
}

export default function Home() {
  // Fetch Products from strapi
  const [result] = useQuery({ query: PRODUCT_QUERY })
  const { data, fetching, error } = result

  if (fetching) {
    return <p>Fetching...</p>
  }
  if (error) {
    return <p>Facing an Error</p>
  }

  const products = data.products.data

  return (
    <div>
      <Head>
        <title>Styled Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Gallery variants={cards} initial="hidden" animate="show" layout>
          {products.map((product) => (
            <Product key={product.attributes.slug} product={product} />
          ))}
        </Gallery>
      </main>
    </div>
  )
}
