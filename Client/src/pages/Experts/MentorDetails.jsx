import { useState } from "react"
import mentorImg from "../../../public/assets/Mentors-images/mentor1.jpeg"
import starIcon from '../../../public/assets/Star.png'
import MentorsAbout from "./MentorsAbout";
import Feedback from "./Feedback";


const MentorDetails = () => {
  const [tab, setTab] = useState("about");
  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        <div className="grid md:grid-cols-3 gap-[50px]">
          <div className="md:col-span-2">
            <div className="flex gap-5">
              <figure className="max-w-[200px] max-h-[300px] my-auto">
                <img src={mentorImg} alt="mentors-img" className="md:w-[300px] md:h-[200px] object-cover rounded-[8px]" />
              </figure>

              <div className="pt-[10px]">
                <span className="bg-[#a3d8c3] text-irisBlueColor py-1 px-6 lg:py-2 lg:px-5 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">
                  Mock Interview
                </span>
                <h3 className="text-headingColor text-[22px] leading-9 mt-3 font-bold">Alexander</h3>

                <div className="flex items-center gap-[6px]">
                  <span className="flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingColor">
                    <img src={starIcon} />
                    4.8
                  </span>
                  <span className="text-[14px] leading-5 lg:text[16px] lg:leading-7 font-[400] text-textColor">
                    (75)
                  </span>
                </div>

                <p className="text-[14px] leading-5 md:text-[15px] text-textColor">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab necessitatibus voluptates maiores in, facere placeat veritatis voluptatem obcaecati alias distinctio.</p>

              </div>
            </div>

            <div className="mt-[50px] border-b border-solid border-[#0066ff34]">
              <button onClick={()=>setTab("about")} className={` ${tab === "about" && "border-b border-solid border-primaryColor"} py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}>
                About
              </button>
              <button onClick={()=>setTab("feedback")} className={` ${tab === "feedback" && "border-b border-solid border-primaryColor" } py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}>
                Feedback
              </button>
            </div>

            <div className="mt-[50px]">
              {tab==="about" && <MentorsAbout/>}
              {tab==="feedback" && <Feedback/>}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default MentorDetails
