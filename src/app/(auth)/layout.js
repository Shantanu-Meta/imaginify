import React from 'react'

const layout = ({children}) => {
  return (
    <main className='auth flex justify-center items-center w-full min-h-screen'>
      {children}
    </main>
  )
}

export default layout
