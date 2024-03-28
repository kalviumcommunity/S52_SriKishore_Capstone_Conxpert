import React, { useState } from 'react';
import loginConxpertLogo from '../../public/assets/loginForm-images/login-conxpert-logo.jpg';
import { Link } from 'react-router-dom';

const Login = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = () => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }


  return (
    <section className='px-5 md:px-0 md:-mt-[25px]'>

      <div className='p-[20px] w-full max-w-[500px] mx-auto rounded-lg shadow-md md:p-10 bg-[#F6F6F6]'>
        <img className='hidden lg:block -mt-[80px] mb-[10px] h-[92px] border-t-[12px] border-b-[11px] border-l-[4px] border-solid border-[#305848]' src={loginConxpertLogo} alt="login-conxpert-logo" />
        <h3 className='text-headingColor text-[22px] leading-9 font-bold mb-10'>
          <span className='text-[#095609]'>Welcome!</span>
          <p className='text-[20px]'>Login to continue</p>
        </h3>

        <form className='-mt-[20px] md:px-0 md:-mt-[15px]'>
          <div className='mb-5'>
            <input type="email" placeholder='Enter your Email' name='email' value={FormData.email} onChange={handleInputChange} className='w-full px-4 py-3 border-b border-solid border-[#3ec75ce6] focus:outline-none focus:border-b-[#01881f] text-[15px] leading-7 text-headingColor placeholder:text-textColor bg-[#F6F6F6] rounded-md cursor-pointer' required/>
          </div>
          <div className='mb-5'>
            <input type="password" placeholder='Password' name='password' value={FormData.password} onChange={handleInputChange} className='w-full px-4 py-3 border-b border-solid border-[#3ec75ce6] focus:outline-none focus:border-b-[#01881f] text-[15px] leading-7 text-headingColor placeholder:text-textColor bg-[#F6F6F6] rounded-md cursor-pointer' required/>
          </div>

          <div className='mt-7 text-end'>
              <button type='submit' className='w-full mx-auto bg-[#00553C] text-white text-[15px] leading-[30px] rounded-lg px-4 py-3'>
                Login
              </button>
          </div>

          <p className='text-[13px] md:text-[15px] mt-5 text-textColor text-center'>
            Don&apos;t have an account? <Link to="/register" className='text-primaryColor ml-1'>Register</Link>
          </p>

        </form>

      </div>

    </section>
  )
}

export default Login;
