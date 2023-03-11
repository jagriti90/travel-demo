import React from 'react'
import img1 from '../images/Pablo.jpeg'
function Search() {
  return (
    <>
      <div className='search border-b border-slate-200'>
        <div className='searchForm'>
          <input className='bg-sky-400 border-none text-white placeholder-slate-300' type='text' placeholder='find a user' />
        </div>
        <div className='userChat p-2 md:flex  items-center gap-2 text-white cursor-pointer hover:bg-sky-800/60 '>
          <img className='h-[50px] rounded-full object-cover w-[50px]' src={img1} alt='' />
          <div className='userchatinfo'>
            <span className=''>Pablo Gracia</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Search