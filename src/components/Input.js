import React from 'react'
import img1 from '../images/Pablo.jpeg'
import { AiOutlineFolderAdd, AiOutlinePaperClip } from "react-icons/ai";

function Input() {
  return (
    <div className=' input bg-white h-[60px] p-4 sm:flex  items-center justify-between'>
      <input className='w-[100%] border-none outline-none placeholder:text-gray-500 placeholder:font-serif' type='text' placeholder='Type something here.....' />
      <div className='send sm:flex gap-2  cursor-pointer'>
        <AiOutlinePaperClip  className='text-3xl font-extrabold text-gray-400 '/>
        <input type='file' style={{ display: 'none' }} id='file' />
        <label>
          <AiOutlineFolderAdd className='text-3xl font-extrabold text-gray-400 '/>
        </label>
        <button className='font-serif bg-sky-300  text-white p-1 rounded-md text-sm'>Send</button>
      </div>
    </div>
  )
}

export default Input