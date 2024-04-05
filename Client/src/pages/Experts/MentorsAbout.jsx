import React from 'react'
import { formatDate } from '../../utils/formatDate'

const MentorsAbout = () => {
    return (
        <div>
            <div>
                <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2'>
                    About of
                    <span className='text-irisBlueColor font-bold text-[24px] leading-9'>
                        Alexander
                    </span>
                </h3>

                <p className='text_para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius sed enim repellat placeat ducimus saepe accusantium ipsam deleniti? Eum, tenetur.</p>
            </div>

            <div className='mt-12'>
                <h3 className='text-[20px] leading-[30px] text-textColor font-semibold'>
                    Experience
                </h3>

                <ul className='grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5'>
                    <li className='p-4 rounded bg-[#fff9ea]'>
                        <span className='text-yellowColor text-[15px] leading-6 font-semibold'>
                            {formatDate("07-04-2010")} - {formatDate("08-13-2014")}
                        </span>
                        <p className='text-[15px] leading-5 font-medium text-textColor'>
                            FullStack Developer
                        </p>
                        <p className='text-[14px] leading-6 font-medium text-textColor'>
                            Meta
                        </p>
                    </li>
                    <li className='p-4 rounded bg-[#fff9ea]'>
                        <span className='text-yellowColor text-[15px] leading-6 font-semibold'>
                            {formatDate("07-04-2010")} - {formatDate("08-13-2014")}
                        </span>
                        <p className='text-[15px] leading-5 font-medium text-textColor'>
                            FullStack Developer
                        </p>
                        <p className='text-[14px] leading-6 font-medium text-textColor'>
                            Meta
                        </p>
                    </li>
                </ul>

                

            </div>

        </div>
    )
}

export default MentorsAbout
