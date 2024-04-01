import signupImg from "../../public/assets/signup-images/signupGif1.gif"
import mentorDP from "../../public/assets/DP-images/mentorDP.jpg"
import { Link } from "react-router-dom"

const Signup = () => {
  
  return (
    <section className="px-5 xl:px-0 bg-[#FDF3F1]">
      <div className="max-w-[1170px] mx-auto md:-mt-[20px] ">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* ====== img box ====== */}
          <div className="hidden lg:block rounded-l-lg w-full">
            <figure className="rounded-l-lg flex justify-end">
              <img src={signupImg} alt="signup gif" className="h-[31rem] w-[34rem] border-[40px] lg:-mt-[45px] border-solid border-[white] rounded-l-lg" />
            </figure>
          </div>

          {/* ====== signup form ====== */}
          <div className="rounded-r-lg lg:-mt-[45px] flex flex-col items-center md:w-fit px-[80px] md:mx-auto">
            <h3 className="text-[20px] text-headingColor md:text-[25px] leading-9 font-bold mb-[15px] w-full text-left">
              Create an <span className="text-[rgb(230,95,70)]">account</span>
            </h3>
            <form>
              <div className='mb-5'>
                <input type="text" placeholder='FullName' name='name' value="" className='md:w-[25rem] px-4 py-3 border-b border-solid border-[#fca594] focus:outline-none focus:border-b-[#E65F46] text-[15px] leading-7 text-headingColor placeholder:text-textColor bg-[white] rounded-md cursor-pointer' required />
              </div>

              <div className='mb-5'>
                <input type="email" placeholder='Enter Your Email' name='email' value="" className='md:w-[25rem] px-4 py-3 border-b border-solid border-[#fca594] focus:outline-none focus:border-b-[#E65F46] text-[15px] leading-7 text-headingColor placeholder:text-textColor bg-[white] rounded-md cursor-pointer' required />
              </div>


              <div className='mb-5'>
                <input type="password" placeholder='Password' name='password' value="" className='md:w-[25rem] px-4 py-3 border-b border-solid border-[#fca594] focus:outline-none focus:border-b-[#E65F46] text-[15px] leading-7 text-headingColor placeholder:text-textColor bg-[white] rounded-md cursor-pointer' required />
              </div>


              <div className="mb-5 flex items-center justify-between">
                <label className="text-headingColor font-bold text-[13px] leading-7">
                  Are you a:
                  <select name="role" className="text-textColor font-semibold text-[13px] leading-7 px-2 py-2 focus:outline-none">
                    <option value="mentee">Mentee</option>
                    <option value="mentor">Mentor</option>
                  </select>
                </label>

                <label className="text-headingColor font-bold text-[13px] leading-7">
                  Gender:
                  <select name="role" className="text-textColor font-semibold text-[13px] leading-7 px-2 py-2 focus:outline-none">
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="others">Other</option>
                  </select>
                </label>
              </div>

              <div className="mb-5 flex items-center gap-3">
                <figure className="w-[40px] h-[40px] rounded-full border-2 border-solid border-[#3E9DF5] flex items-center justify-center">
                  <img src={mentorDP} className="h-full rounded-full" />
                </figure>

                <div className="relative w-[123px] h-[40px]">
                  <input type="file" name="photo" id="customFile" accept=".jpg, .png" className="absolute top-0 left-0 w-full opacity-0 cursor-pointer" />

                  <label htmlFor="customFile" className="absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#3e9df5] text-headingColor font-semibold rounded-lg truncate cursor-pointer">
                    Upload Photo
                  </label>
                </div>
              </div>

              <div className='mt-7 text-end'>
              <button type='submit' className='w-full mx-auto bg-[#FF8570] text-white text-[15px] leading-[30px] rounded-lg px-4 py-3'>
                Register
              </button>
          </div>

          <p className='text-[13px] md:text-[15px] mt-5 text-textColor text-center'>
            Already have an account? <Link to="/login" className='text-primaryColor ml-1'>Login</Link>
          </p>

            </form>
          </div>

        </div>
      </div>

    </section>
  )
}

export default Signup
