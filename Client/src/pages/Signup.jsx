import signupImg from "../../public/assets/signup-images/signupGif1.gif"

const Signup = () => {
  return (
    <section className="px-5 xl:px-0 bg-[#FDF3F1] border border-solid border-[green]">
      <div className="max-w-[1170px] mx-auto border border-solid border-[red] md:-mt-[20px]">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* ====== img box ====== */}
          <div className="hidden lg:block rounded-l-lg border border-solid border-[green] w-fit">
            <figure className="rounded-l-lg border border-solid border-[red] ">
              <img src={signupImg} alt="signup gif" className="h-[24rem] w-[25rem] border-[40px] border-solid border-[white] rounded-l-lg" />
            </figure>
          </div>

          {/* ====== signup form ====== */}
          <div className="rounded-l-lg lg:pl-16 py-10">
            <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
              Create an <span className="text-[#E65F46]">account</span>
            </h3>
            <form>
              <div className='mb-5'>
                <input type="text" placeholder='FullName' name='name' value="" className='w-[20rem] px-4 py-3 border-b border-solid border-[#3ec75ce6] focus:outline-none focus:border-b-[#01881f] text-[15px] leading-7 text-headingColor placeholder:text-textColor bg-[#F6F6F6] rounded-md cursor-pointer' required />
              </div>

              <div className='mb-5'>
                <input type="email" placeholder='Enter Your Email' name='email' value="" className='w-[20rem] px-4 py-3 border-b border-solid border-[#3ec75ce6] focus:outline-none focus:border-b-[#01881f] text-[15px] leading-7 text-headingColor placeholder:text-textColor bg-[#F6F6F6] rounded-md cursor-pointer' required />
              </div>


              <div className='mb-5'>
                <input type="password" placeholder='Password' name='password' value="" className='w-[20rem] px-4 py-3 border-b border-solid border-[#3ec75ce6] focus:outline-none focus:border-b-[#01881f] text-[15px] leading-7 text-headingColor placeholder:text-textColor bg-[#F6F6F6] rounded-md cursor-pointer' required />
              </div>

            </form>
          </div>

        </div>
      </div>

    </section>
  )
}

export default Signup
