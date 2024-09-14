import Navbar from '@/components/Navbar'
import MainNavbar from '@/components/mainNavbar/mainNavbar'
import React from 'react'

const layout = ({children}) => {
  return (
    <div>
      <div>
            <div className='mb-3'>
              {/* <MainNavbar/> */}
                <Navbar />
            </div>
            {children}
        </div>
    </div>
  )
}

export default layout
