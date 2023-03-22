import React from 'react'
import Sdata from './Sdata'
// import img1 from '..//../public/assest/trai1.avif'

function Card(props) {
  return (
    <>
    <div className='chats'>
      {/* <img src={img1} className='h-[20vh]' /> */}
    <div className='userChat p-1.5 sm:flex items-center gap-2 text-white cursor-pointer hover:bg-sky-800/60 '>
          <img className='h-[50px] rounded-full object-cover w-[50px]' src={props.imgsrc} altimgsrc />
          <div className='userchatinfo'>
            <span className='font-semibold '>{props.name}</span>
            <p className='text-gray-200 text-sm font-serif'>{props.chat}</p>
          </div>
          </div>
      </div>
    </>
  )
}

export default Card