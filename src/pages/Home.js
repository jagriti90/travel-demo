import React from 'react'
import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat';

function Home() {
  return (
   <>
   <div className='home bg-sky-200 h-[100vh] md:flex items-center text-center justify-center  mx-w-[1248px]'>
    <div className='container  md:flex-cols border-2 border-white h-[90%] w-[65%] md:flex rounded-lg overflow-hidden'>
        <Sidebar />
        <Chat />
    </div>
   </div>
   </>
  )
}

export default Home