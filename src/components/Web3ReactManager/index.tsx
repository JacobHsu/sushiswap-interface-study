import React, { FC, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

const GnosisManagerNoSSR = dynamic(() => import('./GnosisManager'), {
  ssr: false,
})

export const Web3ReactManager: FC = ({ children }) => {
  return (
    <>
      <GnosisManagerNoSSR />
      {children}
    </>
  )
}

export default Web3ReactManager
