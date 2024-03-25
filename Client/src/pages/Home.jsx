import hero1 from '../../public/assets/heroContent-1.png'

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
                  <h1 className='text-[36px] leading-[46px] text-introColor font-[800] md:w-[500px] md:text-[60px] md:leading-[70px]'>Virtual 1:1 Sessions with Industry Experts</h1>

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
    </>
  )
}

export default Home