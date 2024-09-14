import MainNavbar from '@/components/mainNavbar/mainNavbar'
import React from 'react'

const layout = ({children}) => {
  return (
    <>
    <MainNavbar/>
      {children}
    </>
  )
}

export default layout
