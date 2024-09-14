import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center
         bg-slate-800 px-8 py-3'>
            <Link className='text-white font-bold' href={"/"}>NextJS</Link>
            <button type="submit" className="btn btn-outline-primary py-2 px-6 w-fit bg-light text-dark">
                    Add Topic
                </button>
        </nav>
    )
}

export default Navbar
