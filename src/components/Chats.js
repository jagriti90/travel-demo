import React from 'react'
import Card from '../Card/Card'
import Sdata from '../Card/Sdata'

function Chats() {
  return (
    <>
    <div>
    {

Sdata.map((val,ind)=>{
return <Card 
imgsrc={val.imgsrc}
name={val.name}
chat={val.chat}
/>
}) 
}
    </div>
    </>
  )
}

export default Chats