import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth} from '../firebase';

function Register() {
  const [err, setErr] = useState(false)
    const handleSubmit = async (e) =>{
        e.preventDefault()
        // console.log(e.target[0].value)
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].file[0];
        try{
          const res= await createUserWithEmailAndPassword(auth, email, password)
        } catch(err){
setErr(true);
        }

    };
    return (
        <>
            <div className='formcontainer flex bg-sky-200 h-[100vh] max-w-[1280px] md:place-content-center mx-auto items-center '>
                <div className='formwrapper  bg-white flex-col gap-2 p-12 rounded-lg items-center md:flex'>
                    <span className='logo  text-2xl font-extrabold text-sky-300'>Gama Chat</span>
                    <span className='title  text-sky-300 font-sm '>Register</span>
                    <div className='md:flex '>
                    <form className='flex flex-col gap-4 ' onSubmit={handleSubmit}>
                        <input  className='p-2 border-b-2 border-sky-300' type='text' placeholder='display name' />
                        <input className='p-2 border-b-2 border-sky-300' type='email' placeholder='email' />
                        <input  className='p-2 border-b-2 border-sky-300' type='password' placeholder='password' />
                        <input  className='p-2 border-b-2 border-sky-300 hidden'  type='file' id='file'/>
                        <label htmlFor='file' className='md:flex items-center'>
                          <img src='https://cdn3d.iconscout.com/3d/premium/thumb/photo-gallery-5175045-4334319.png'
                           className='h-12 rounded-lg' alt='' />
                           <span className='font-sm text-sky-300 cursor-pointer'> Add an Avtar</span>
                        </label>
                        <button className='bg-sky-300 text-white p-2 border-none  cursor-pointer'>Sign up</button>
                    {err &&   <span>Something went wrong</span>}
                    </form>
                </div>
                <p className='text-sky-300 mt-5 text-sm'>You have an account? Login </p>
            </div>
            </div>
        </>
    )
}

export default Register