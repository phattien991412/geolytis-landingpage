import React from 'react'

// import Header from './Header'
// import Footer from './Footer'
import LenisScroller from '../Lenis'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {/* <Header /> */}
      <LenisScroller>
        <main>{children}</main>
      </LenisScroller>
      {/* <Footer /> */}
    </>
  )
}

export default Layout
