import React from 'react'
import { FallingLines } from 'react-loader-spinner'
import { Triangle } from 'react-loader-spinner'
function Loader() {
  return (
    <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid place-items-center w-screen h-screen bg-[rgba(255,255,255,1)] z-[100]'>
      <Triangle
       visible={true}
       height="160"
       width="160"
       color="#4fa94d"
       ariaLabel="triangle-loading"
       wrapperStyle={{}}
       wrapperClass=""
      />
    </div>
  )
}

export default Loader
