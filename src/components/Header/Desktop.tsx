import Container from 'app/components/Container'
import { NAV_CLASS } from 'app/components/Header/styles'
import useMenu from 'app/components/Header/useMenu'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'

const HEADER_HEIGHT = 64

const Desktop: FC = () => {
  const menu = useMenu()
  return (
    <>
      <header className="fixed z-20 w-full hidden lg:block" style={{ height: HEADER_HEIGHT }}>
        <nav className={NAV_CLASS}>
          <Container maxWidth="7xl" className="mx-auto">
            <div className="flex gap-4 px-6 items-center justify-between">
              <div className="flex gap-4">
                <div className="flex w-6 mr-4 items-center">
                  <Image src="https://app.sushi.com/images/logo.svg" alt="Sushi logo" width="24px" height="24px" />
                </div>
                {menu.map((node) => {
                  return `${node.key}.`
                  // return <NavigationItem node={node} key={node.key} />
                })}
              </div>
            </div>
          </Container>
        </nav>
      </header>
      <div style={{ height: HEADER_HEIGHT, minHeight: HEADER_HEIGHT }} />
    </>
  )
}

export default Desktop
