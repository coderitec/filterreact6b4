import React from 'react'
import Navbar from '../components/Navbar'

export default function layout({children}) {
  return (
    <div>
        <Navbar />
        <div className='relative top-[280px]'>
        {children}

        </div>
    </div>
  )
}
