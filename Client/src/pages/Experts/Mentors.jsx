import { mentors } from '../../../public/assets/data/mentors'

import MentorCard from '../../Components/Mentors/MentorCard'
import testimonials from "../../../public/assets/images/testimonials.jpg"
import MentorsFilter from './MentorsFilter'


const Mentors = () => {
  return (
    <>
      <section className='bg-[#FFFBF2]'>
        <div className='container text-center lg:-mt-[30px] p-[20px] lg:p-[0px]'>
          <h2 className='text-[26px] leading-[45px] font-[800] md:text-[40px] md:leading-[60px] px-[0px] md:px-[50px] text-introColor mb-[20px] md:mb-[10px]'>Unlock Job Offers at Unicorn Startups and FAANG Companies with Our Prime 1:1 Interview Platform!</h2>

          {/* <div className='max-w-[500px] mt-[30px] mx-auto bg-[#0066ff2c] flex rounded-md items-center justify-center'>
            <input type="search" className='py-2 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor' placeholder='Search Mentor' />
            <button className='btn mt-0 rounded-[0px] rounded-r-md'>
              Search
            </button>
          </div> */}

          <h3 className='text-[20px] leading-[35px] font-[400] md:text-[18px] md:leading-[30px] px-[0px] md:px-[50px] text-[#505050] mb-[20px] md:mb-[10px]'>Level up with personalized one-on-one sessions led by industry experts. Gain invaluable insights, refine your answers, get immediate feedback, and apply it directly to your interview success!</h3>

          <p className='lg:mt-[30px] font-[500] text-[#4a4a4a] lg:text-[15px]'><span className='underline'>8765</span> candidates coached . <span className='underline'>4.96</span> average rating</p>

          <div>
          <img src={testimonials} alt="" className='h-[45px] mt-5 mx-auto'/>
          </div>

        </div>
      </section>

      <section>
          <h3 className='text-[17px] text-center leading-[50px] font-[700] md:text-[30px] px-[50px] mb-10'><span>63</span> Mentors  available right now</h3>

          <div>
            <MentorsFilter/>
          </div>


      </section>

      <section className='bg-[#FBFBFB]'>
        <div className="container">
          <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 lg:px-5'>
            {mentors.map((mentor) => <MentorCard key={mentor.id} mentor={mentor} />)}
          </div>
        </div>
      </section>

    </>
  )
}

export default Mentors;
