import React from 'react'

function Login() {
    return (
        <>
            <div className='formcontainer flex bg-sky-200 h-[100vh] max-w-[1280px] md:place-content-center mx-auto items-center '>
                <div className='formwrapper  bg-white flex-col gap-1 p-14 rounded-lg items-center md:flex'>
                    <span className='logo  text-2xl font-extrabold text-sky-300'>Gama Chat</span>
                    <span className='title  text-sky-300 font-sm  py-2'>Login</span>
                    <div className='md:flex '>
                    <form className='flex flex-col gap-4 '>
                        <input className='p-2 border-b-2 border-sky-300' type='email' placeholder='email' />
                        <input  className='p-2 border-b-2 border-sky-300' type='password' placeholder='password' />
                        
                        <button className='bg-sky-300 text-white p-2 border-none  cursor-pointer'>Sign in</button>
                    </form>
                </div>
                <p className='text-sky-300 mt-5 text-sm'>You have an account? Register </p>
            </div>
            </div>
        </>
    )
}

export default Login;