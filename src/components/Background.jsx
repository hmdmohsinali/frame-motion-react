import React from 'react'

function Background() {
  return (
    <>
    <div className='fixed z-[2] w-full h-screen'>
      <div className="absolute top-[5%]  w-full py-10 flex justify-center font-semibold text-zinc-600 text-xl">
        Documents
      </div>
    
    <div className='flex justify-center items-center w-full h-screen bg-zinc-800'>
      <h1 className=' font-semibold text-[13vw] tracking-tighter leading-none'>Docs</h1>
    </div>
    </div>
    </>
  )
}

export default Background
