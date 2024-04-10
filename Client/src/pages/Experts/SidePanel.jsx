import React from 'react'

const SidePanel = () => {
  return (
    <div className='p-3 lg:p-5 rounded-md shadow-md'>
      <div className='flex items-center justify-between'>
        <p className='mt-0 font-semibold'>Cost</p>
        <span className='text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold'>400Rs</span>
      </div>


        <div className='mt-[30px]'>
            <p className='mt-0 font-semibold text-headingColor'>
                Available Time Slots:
            </p>

            <ul className='mt-3'>
                <li className='flex items-center justify-between mb-2'>
                    <p className='text0[15px] leading-6  text-textColor font-semibold'>
                        Sunday
                    </p>
                    <p className='text-[15px] leading-6 text-textColor font-semibold'>
                        4:00 PM - 9:30 PM
                    </p>
                </li>
                <li className='flex items-center justify-between mb-2'>
                    <p className='text-[15px] leading-6 text-textColor font-semibold'>
                        Wednesday
                    </p>
                    <p className='text-[15px] leading-6 text-textColor font-semibold'>
                        4:00 PM - 9:30 PM
                    </p>
                </li>
                <li className='flex items-center justify-between mb-2'>
                    <p className='text-[15px] leading-6 text-textColor font-semibold'>
                        Thrusday
                    </p>
                    <p className='text-[15px] leading-6 text-textColor font-semibold'>
                        4:00 PM - 9:30 PM
                    </p>
                </li>
            </ul>

        </div>

        <button className='btn w-full rounded-md'>Book Appointment</button>

    </div>
  )
}

export default SidePanel;
