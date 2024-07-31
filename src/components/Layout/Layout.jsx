import React from 'react'
import { LayoutWrapper } from './LayoutStyles'

const Layout = ({children}) => {  /* con children hago que todo lo que ponga en layout en App.js, me lo renderice si o si */
  return (
    <LayoutWrapper>
        {children}
    </LayoutWrapper>
  )
}

export default Layout