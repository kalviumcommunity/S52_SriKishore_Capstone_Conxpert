import { Link } from 'react-router-dom'
import hero1 from '../../public/assets/heroContent-1.png'
import findMentor from '../../public/assets/kickstart-images/findMentor.png'
import interviewPay from '../../public/assets/kickstart-images/interview-pay.png'
import BookSession from '../../public/assets/kickstart-images/bookSession.png'
import BulletIcon from '../../public/assets/kickstart-images/bulletIcon.png'
import { BsArrowRight } from 'react-icons/bs'
import HeaderTwo from '../Components/Header/HeaderTwo'

const Home = () => {
  return (
    <>
      {/* ===== Hero Section ===== */}
      <>
        <section className='hero_section pt-[40px] 2xl:h-[800px]'>

          <div className='container'>
            <div className='flex flex-col lg:flex-row items-center'>
              {/*gap-[90px]===== Hero content ===== */}
              <div className='ml-[10px] w-[250px] md:-ml-[200px] lg:ml-[100px]'>
                <div className='lg:w-[800px]'>
                  {/* pl-[30px] lg:pl-[110px] */}
                  <h1 className='text-[36px] leading-[46px] text-introColor font-[800] md:w-[700px] md:text-[60px] md:leading-[70px]'>Virtual 1:1 Sessions with Industry Experts</h1>

                  <p className="text_para2 md:w-[500px]">Unlock your potential with Conxpert virtual one-on-one sessions, guided by industry experts. Ace your interviews from anywhere with instant feedback and personalized support.</p>

                  <button className="btn">EXPLORE</button>
                </div>

                {/* ====== advantage counter ===== */}

                <div className="mt-[20px] lg:mt-[30px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[40px]">
                  <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[38px] lg:leading-[54px] font-[700] text-headingColor">
                      15+
                    </h2>
                    <span className="w-[70px] h-2 bg-introColor rounded-full block mt-[-14px]"></span>
                    <p className="text_para1">Years of Experience</p>
                  </div>
                  <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[38px] lg:leading-[54px] font-[700] text-headingColor">
                      100%
                    </h2>
                    <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                    <p className="text_para1">User Satisfaction</p>
                  </div>
                </div>
              </div>

              {/* ===== hero content images ==== */}

              <div className="flex justify-end items-end lg:h-[80vh] lg:-ml-[200px] w-full">
                {/* gap-[30px] */}
                <div>
                  <img className='h-[14rem] lg:h-[25rem]' src={hero1} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </>

      {/* ====== hero section end ====== */}
      <section className='hero_section2'>
        <div className='container lg:-mt-[40px]'>
          <div className='lg:w-[470px] mx-auto'>
            <h2 className='heading text-center text-white'>Kickstart by Conxpert</h2>
          </div>

          <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[40px]'>

            <div className='px-5'>
              <div className='flex items-center justify-center'>
                <img className='h-[220px]' src={findMentor} alt="find a mentor" />
              </div>
              <div className='mt-[10px]'>
                <h2 className='text-[26px] leading-9 text-white font-[700] text-center'>Find a Mentor</h2>

                <p className='text-[16px] leading-7 text-[#cfcfcf] font-[400] mt-4 text-center'>
                  Get help from experts on ConXpert! Find a Mentor easily and reach your goals with their support.
                </p>

                <Link
                  to='/mentors' className="w-[44px] h-[44px] rounded-full border border-solid border-[rgb(246,246,246)] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                  <BsArrowRight className='text-white' />
                </Link>

              </div>
            </div>

            <div className='px-5'>
              <div className='flex items-center justify-center'>
                <img className='h-[220px]' src={interviewPay} alt="payment" />
              </div>
              <div className='mt-[10px]'>
                <h2 className='text-[26px] leading-9 text-white font-[700] text-center'>Payment</h2>

                <p className='text-[16px] leading-7 text-[#cfcfcf] font-[400] mt-4 text-center'>
                Join interviews with ease on ConXpert! Pay a low cost and open doors to your future career journey.
                </p>

                <Link
                  to='/mentors' className="w-[44px] h-[44px] rounded-full border border-solid border-[rgb(246,246,246)] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                  <BsArrowRight className='text-white' />
                </Link>

              </div>
            </div>

            <div className='px-5'>
              <div className='flex items-center justify-center'>
                <img className='h-[220px]' src={BookSession} alt="Booking Session" />
              </div>
              <div className='mt-[10px]'>
                <h2 className='text-[26px] leading-9 text-white font-[700] text-center'>Book Session</h2>

                <p className='text-[16px] leading-7 text-[#cfcfcf] font-[400] mt-4 text-center'>
                Ready to take the next step? Book your session now and embark on your journey to success with ConXpert!
                </p>

                <Link
                  to='/mentors' className="w-[44px] h-[44px] rounded-full border border-solid border-[rgb(246,246,246)] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                  <BsArrowRight className='text-white' />
                </Link>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ====== second navbar ====== */}
      <HeaderTwo/>


      {/* ====== detail section ===== */}
      <section className='detailSection'>
        <h2 className='p-[10px] text-[20px] md:text-[26px] leading-9 font-[700] text-center'>What can you expect out of this 1:1 Sessions?</h2>
        <p className='p-[20px] text-[13px] md:text-[16px] leading-7 font-[500] mt-4 text-center lg:w-[60rem] mx-auto text-[#6b6a6a]'>In our 1:1 sessions with industry experts, you can expect personalized guidance to improve your interview skills. Gain insights into your strengths and areas for improvement, while building confidence in your responses. Receive instant feedback to refine your approach and increase your chances of success.</p>

        {/* ====== plan section ====== */}
        <div>
        <div className='text-[28px] mt-[100px] text-center'>
          <h2 className='font-[600]'><span className='py-[5px] px-[15px] bg-[#FFF0BE] text-center'>Interview</span> <span className='text-[#ff8570]'>Plan</span></h2>
        </div>

        <div className='px-[30px] py-[40px] mt-[50px] w-[270px] lg:w-[400px] mx-auto md:px-[50px] md:py-[80px] rounded-[20px] bg-white'>
            <div>
            <h3 className='w-[100px] font-[500]'>Invest on yourself just</h3>
            {/* <img src="" alt="" /> */}
            </div>
            
            <h2 className='text-[20px] lg:text-[30px] font-[800]'>₹ 299 to ₹999</h2>

            <div className='mt-[20px]'>
              <div className='flex items-center mb-[5px]'>
              <img className='h-[25px]' src={BulletIcon} alt="bullet icon" />
              <p className='text-[10px] lg:text-[15px] font-[700] ml-[5px]'>Know how to tackle placements</p>
              </div>

              <div className='flex items-center mb-[5px]'>
              <img className='h-[25px]' src={BulletIcon} alt="bullet icon" />
              <p className='text-[10px] lg:text-[15px] font-[700] ml-[5px]'>Guidelines to do certifications and projects</p>
              </div>

              <div className='flex items-center'>
              <img className='h-[25px]' src={BulletIcon} alt="bullet icon" />
              <p className='text-[10px] lg:text-[15px] font-[700] ml-[5px]'>Guidelines to learn skills</p>
              </div>

            </div>

            <div className='text-center'>
            <button className='px-[10px] py-[8px] md:px-[15px] md:py-[12px] mt-[30px] rounded-[10px] bg-[#ff8570]'>I'm Stepping In</button>
            </div>

        </div>
        </div>

      </section>
    </>
  )
}

export default Home;