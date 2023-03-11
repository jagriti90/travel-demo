import React from 'react'
import Navbar from './Navbar'
import Search from './Search'
import Chats from './Chats'
function Sidebar() {
  return (
    <>
   
    <div className='sidebar bg-sky-400'>
         <Navbar />
         <Search />
         <Chats/>
         </div>
    </>
  )
}

export default Sidebar