import Navbar from '@/components/Navbar'
import MainNavbar from '@/components/mainNavbar/mainNavbar'
import React from 'react'

const layout = ({ children }) => {
    return (
        <div>
            <div className='mb-3'>
                <MainNavbar/>
                {/* <Navbar /> */}
            </div>
            {children}
        </div>
    )
}

export default layout