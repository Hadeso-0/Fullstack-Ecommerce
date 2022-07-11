import '../styles/globals.css'
import { Provider, createClient } from 'urql'
import Nav from '../components/nav'
import { StateContext } from '../lib/context'
const { AnimatePresence } = require('framer-motion')

const client = createClient({ url: process.env.NEXT_PUBLIC_BACKEND_API })

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence>
      <StateContext>
        <Provider value={client}>
          <Nav />
          <Component {...pageProps} />
        </Provider>
      </StateContext>
    </AnimatePresence>
  )
}

export default MyApp
