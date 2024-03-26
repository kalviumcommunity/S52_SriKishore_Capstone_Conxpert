import React from 'react'

const HeaderTwo = () => {
  return (
    <header className='header flex items-center'>
        <div className='container'>
            <div className='flex justify-center'>
                <ul className='flex items-center gap-[25px] flex-wrap lg:gap-[10rem]'>
                    <li className='navTwo'>INFO</li>
                    <li className='navTwo'>PACKAGES</li>
                    <li className='navTwo'>EXPERTS</li>
                    <li className='navTwo'>REVIEWS</li>
                </ul>
            </div>
        </div>
    </header>
  )
}

export default HeaderTwo
