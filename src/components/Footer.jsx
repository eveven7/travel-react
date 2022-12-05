import React from 'react'
import { MdTravelExplore } from "react-icons/md";

export const Footer = () => {
  return (
    <div>
<div className='max-w-[1140px] w-full py-8 m-auto border-t-4'>
        <div className='flex items-center m-auto justify-center'>
        <MdTravelExplore size={30} className='text-[var(--primary-dark)] mr-2' />
        <h1 className='text-xl font-bold text-gray-700'>Travel</h1>

        </div>
    </div></div>
  )
}

export default Footer