import React from 'react'
import Message from './Message'

function Messages() {
  return (
   <>
    <div className='message bg-yellow-50 p-2 h-[70vh] overflow-scroll'>
      <Message/>
      <Message/>
      <Message/>
      <Message/>
      <Message/>
      <Message/>
      <Message/>
      <Message/>
      <Message/>
      <Message/>
    </div>
   </>
  )
}

export default Messages