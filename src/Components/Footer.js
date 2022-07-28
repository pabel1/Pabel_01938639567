import React from 'react'
import logoimg from '../Assests/image/logo.png'

const Footer = () => {
  return (
    <div className='dark:bg-black dark:text-white flex justify-around items-center py-10'>
        <h3 className=" dark:text-zinc-400 font-bold">BUILT FROM SCRATCH BY ME</h3>
        <img className=" invert brightness-150" src={logoimg} alt="" />
    </div>
  )
}

export default Footer