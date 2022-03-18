import React, { Fragment, useEffect } from 'react'
import { RecoilRoot } from 'recoil'
import '../styles/globals.css'
// import type { AppProps } from 'next/app'
import getLibrary from 'app/functions/getLibrary'
import DefaultLayout from 'app/layouts/Default'
import { i18n } from '@lingui/core'
import { I18nProvider } from '@lingui/react'
import { Web3ReactProvider } from '@web3-react/core'
import Web3ReactManager from 'app/components/Web3ReactManager'
import dynamic from 'next/dynamic'

const Web3ProviderNetwork = dynamic(() => import('../components/Web3ProviderNetwork'), { ssr: false })

// @ts-ignore TYPE NEEDS FIXING
function MyApp({ Component, pageProps }) {

  // Allows for conditionally setting a provider to be hoisted per page
  const Provider = Component.Provider || Fragment

  // Allows for conditionally setting a layout to be hoisted per page
  const Layout = Component.Layout || DefaultLayout

  // Allows for conditionally setting a guard to be hoisted per page
  const Guard = Component.Guard || Fragment

  return (
    <>
      <I18nProvider i18n={i18n} forceRenderOnLocaleChange={false}>
        <Web3ReactProvider getLibrary={getLibrary}>
          <Web3ProviderNetwork getLibrary={getLibrary}>
            <Web3ReactManager>
              <RecoilRoot>
                <Provider>
                  <Layout>
                    <Guard>
                      <Component {...pageProps} />
                    </Guard>
                  </Layout>
                </Provider>
              </RecoilRoot>
            </Web3ReactManager>
          </Web3ProviderNetwork>
        </Web3ReactProvider>
      </I18nProvider>
    </>
  )
}

export default MyApp
