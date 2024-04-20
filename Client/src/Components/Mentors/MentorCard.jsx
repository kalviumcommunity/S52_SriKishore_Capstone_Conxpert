import React from 'react'
import starIcon from '../../../public/assets/Star.png'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'
import companyIcon from "../../../public/assets/images/icon-company.jpg"
import mentorRole from "../../../public/assets/images/role.jpg"
import mentorRatings from "../../../public/assets/images/icon-reviews.jpg"

const MentorCard = ({ mentor }) => {

    const { name, avgRating, totalRating, photo, specialization, totalMentees, position, company } = mentor

    return (
        <div className='p-3 lg:pb-10 lg:pt-5 lg:px-5 border border-solid border-[#d1d1d1] hover:border-[blue] bg-[#FFFFFF] cursor-pointer'>
            <div className='flex gap-5'>
                <div>
                    <figure className='w-[90px] h-[90px] object-fill flex-shrink-0'>
                        <img src={photo} alt="image" className='h-full w-full object-cover rounded-full' />
                    </figure>
                </div>
                <div>
                    <h2 className='mt-2 text-[18px] leading-[30px] lg:text-[26px] lg:leading-9 text-headingColor font-[700] '>{name}</h2>

                    <div className='mt-2 lg:mt-2 flex items-center justify-between mb-3'>
                        <span className='bg-[#CCD0F3] text-irisBlueColor py-1 px-2 lg:py-2 lg:px-3 text-[12px] leading-4 lg:text-[12px] lg:leading-5 font-semibold rounded'>{specialization}</span>
                    </div>

                </div>
            </div>

            <div className='mt-[18px] lg:mt-5 flex items-end justify-between'>
                <div>
                    <h3 className='text-[16px] leading-7 lg:text-[18px] lg:leading-[30px] font-semibold text-headingColor'>
                        <div className='flex items-center gap-3 mb-3'>
                            <img className='h-[18px] w-[18px]' src={companyIcon} alt="company-icon" />
                            <span>{company}</span>
                        </div>
                    </h3>
                    <p className='text-[14px] leading-6 font-[400] text-textColor mb-3'>
                        <div className='flex gap-3'>
                            <img className='h-[18px] w-[18px]' src={mentorRole} alt="mentor-role" />
                            <span>
                                {position}
                            </span>
                        </div>
                    </p>
                    <div className='flex items-center'>
                        <span className='flex items-center gap-3 text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-semibold text-headingColor'>
                            <img className='h-[18px] w-[18px]' src={mentorRatings} alt="rating star" />
                            <div>
                                <span>
                                    {avgRating}
                                </span>
                                <span className='text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-[400] text-textColor'>({totalRating})</span>
                            </div>
                        </span>
                    </div>
                </div>
                <div>
                    <Link to="/mentors" className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                        <BsArrowRight className='group-hover:text-white w-6 h-5' />
                    </Link>
                </div>
            </div>
        </div>


    )
}

export default MentorCard
