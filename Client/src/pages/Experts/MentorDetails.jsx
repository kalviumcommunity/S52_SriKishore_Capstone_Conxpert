import { useState } from "react"
import mentorImg from "../../../public/assets/Mentors-images/mentor1.jpeg"
import starIcon from '../../../public/assets/Star.png'
import MentorsAbout from "./MentorsAbout";
import Feedback from "./Feedback";
import SidePanel from "./SidePanel";


const MentorDetails = () => {
  const [tab, setTab] = useState("about");
  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        <div className="flex flex-col items-center justify-center lg:flex-row gap-5 border border-solid border-[#c4c4c4] rounded-[8px]">
          <figure className="w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] flex-shrink-0 p-[18px] rounded-b-[100px] bg-[#A3D8C3] rounded-tl-[8px] lg:mb-[30px]">
            <img src={mentorImg} alt="mentors-img" className="w-full h-full object-cover rounded-full border-2 border-solid border-[#0185C5]" />
          </figure>

          <div className="pt-[20px] flex-grow p-[30px]">
            <span className="bg-[#a3d8c3] text-irisBlueColor py-1 px-6 lg:py-2 lg:px-5 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">
              Mock Interview
            </span>


            <div className="flex items-center gap-[6px] mt-[10px] mb-[10px]">
              <h3 className="text-[#3E434D] lg:text-[22px] lg:leading-9 font-bold">Dhana Rooban</h3>
              <span className="flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingColor">
                <img src={starIcon} />
                <span className="text-[#FD9B52]">4.8</span>
              </span>
              <span className="text-[14px] leading-5 lg:text[16px] lg:leading-7 font-[400] text-textColor">
                (75)
              </span>
            </div>
            <p className="text-[14px] leading-7 md:text-[16px] text-textColor">Chief Financial Officer <span className=" text-[black] text-[20px]">|</span> Black Rock <span className=" text-[black] text-[20px]">|</span> United States </p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-[50px]">
          <div className="md:col-span-2">

            <div className="mt-[50px] border-b border-solid border-[#0066ff34]">
              <button onClick={() => setTab("about")} className={` ${tab === "about" && "border-b border-solid border-primaryColor"} py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}>
                About
              </button>
              <button onClick={() => setTab("feedback")} className={` ${tab === "feedback" && "border-b border-solid border-primaryColor"} py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}>
                Feedback
              </button>
            </div>

            
            <div className="mt-[50px]">
              {tab === "about" && <MentorsAbout />}
              {tab === "feedback" && <Feedback />}
            </div>
            
          </div>

          <div className="h-fit lg:mt-[30px]">
            <SidePanel/>
          </div>


        </div>  
      </div>
    </section>
  )
}

export default MentorDetails
