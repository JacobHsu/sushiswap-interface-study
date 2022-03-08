import React, { Fragment, useEffect } from 'react'
import '../styles/globals.css'
// import type { AppProps } from 'next/app'
import DefaultLayout from 'app/layouts/Default'

// @ts-ignore TYPE NEEDS FIXING
function MyApp({ Component, pageProps }) {

  // Allows for conditionally setting a layout to be hoisted per page
  const Layout = Component.Layout || DefaultLayout

  // Allows for conditionally setting a guard to be hoisted per page
  const Guard = Component.Guard || Fragment

  return (
    <>
      <Layout>
        <Guard>
          <Component {...pageProps} />
        </Guard>
      </Layout>
    </>
  )
}

export default MyApp
