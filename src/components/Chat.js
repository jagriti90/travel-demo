import React from 'react'
import { AiOutlineUserAdd ,AiOutlineVideoCamera,AiOutlineMore} from "react-icons/ai";
import Messages from './Messages';
import Input from './Input';


function Chat() {
  return (
   <>
    <div className='chat'>
      <div className='chatInfo bg-sky-500 p-4 text-white  justify-between flex w-[100vh] '>
        <span>Adam</span>
        <div className='chatIcons sm:flex gap-4 font-bold'>
          <AiOutlineVideoCamera />
          <AiOutlineUserAdd />
          <AiOutlineMore/>
        </div>
      </div>
      <Messages/>
      <Input />
    </div>
   </>
  )
}

export default Chat