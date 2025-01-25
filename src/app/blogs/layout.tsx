import React, { ReactNode } from 'react'

const Layout = ({children}:{children:ReactNode}) => {
  return (
    <div className='relative'>
        {children}
    </div>
  )
}

export default Layout