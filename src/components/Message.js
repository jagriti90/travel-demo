import React from 'react'

function Message() {
  return (
    <>
    <div className='msg sm:flex gap-2 mb-6 flex-row-reverse'>
      <div className='msgInfo sm:flex flex-col text-gray-400 font-medium	'>
        <img  className='w-[40px] h-[40px] rounded-full object-cover' src='https://lh3.googleusercontent.com/proxy/lEEhJu5NgtL6AW8BUZaVWbFXI9Iw6J64jS7erhapmF-oNJf_IdPwgukISW3nt2fJ5xkA-GX7NfljIc_rx9e-B68aStov41GBmJQkfXGQvxhQwzchuCsEY1EqRQ=w1200-h630-p-k-no-nu' alt='' />
        <span>Just now</span>
      </div>
      <div className='msgContent max-w-[80%] sm:flex flex-col gap-2 place-items-end'>
<p className='bg-sky-300 text-white rounded-r-lg rounded-bl-lg p-2  max-w-max'> hellow</p>
<img  className='w-[50%] ' src='https://i.pinimg.com/originals/0d/cb/24/0dcb24fa7142968e28b3a8b895fdb75a.jpg' alt='' />
      </div>

    </div>
    </>
  )
}

export default Message