import React from 'react'

function Navbar() {
    return (
        <>
            <div className='Navbar flex items-center bg-sky-800/60 h-[50px] p-[20px] text-white justify-between ' >
                <span className='logo font-bold text-sm flex'>Gama chat</span>
                <div className='user md:flex gap-1'>
                    <img  className='bg-white h-[24px] rounded-full w-[24px] object-cover ml-2' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWyF0UBs_GYRB9KGWJbx27SP2v2Zh6G0d0Tmad2wVqTkIWPwe3a_EEr0A4Po0_NiRzMNI&usqp=CAU' alt='' />
                    <span> Adam</span>
                    <button className='bg-sky-500 text-white font-lg border-none ml-2 p-0.5 rounded-lg text-sm'>Logout</button>
                </div>

            </div>
        </>
    )
}

export default Navbar