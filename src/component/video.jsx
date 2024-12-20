import React from 'react'

function Video() {
  return (
    <div className='bg-gradient-to-r from-[#89D1D2] via-[#7D7ED6] mx-4 lg:mx-40 h-96 mt-10'>
        <h1 className='text-black uppercase flex flex-auto justify-center text-2xl lg:text-4xl pt-5 font-bold'>are you ready?</h1>
        <p className='text-white uppercase flex flex-auto justify-center text-2xl lg:text-4xl pt-5 font-bold mt-5'> be a part of the <br></br>next big things</p>
        <a href='/Contact'><button className='text-white bg-black rounded-full flex flex-auto items-center justify-center mt-10 lg:mt-20 py-3 text-xl lg:2xl px-20 mx-auto'>Get started</button></a>
    </div>
  )
}

export default Video;
// #1E1A55