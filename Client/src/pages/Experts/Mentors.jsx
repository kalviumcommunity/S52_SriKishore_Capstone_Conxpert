import {mentors} from '../../../public/assets/data/mentors'

import MentorCard from '../../Components/Mentors/MentorCard'


const Mentors = () => {
  return (
    <>
      <section className='bg-[#FFFBF2]'>
        <div className='container text-center lg:-mt-[30px]'>
          <h2 className='heading'>Find a Mentor</h2>
          <div className='max-w-[500px] mt-[30px] mx-auto bg-[#0066ff2c] flex rounded-md items-center justify-center'>
            <input type="search" className='py-2 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor' placeholder='Search Mentor' />
            <button className='btn mt-0 rounded-[0px] rounded-r-md'>
              Search
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
            {mentors.map((mentor) => <MentorCard key={mentor.id} mentor={mentor} />)}
          </div>
        </div>
      </section>
    </>
  )
}

export default Mentors;
