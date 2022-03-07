import '../styles/globals.css'
// import type { AppProps } from 'next/app'

// @ts-ignore TYPE NEEDS FIXING
function MyApp({ Component, pageProps }) {

  // Allows for conditionally setting a layout to be hoisted per page
  const Layout = Component.Layout

  return <Component {...pageProps} />
}

export default MyApp
