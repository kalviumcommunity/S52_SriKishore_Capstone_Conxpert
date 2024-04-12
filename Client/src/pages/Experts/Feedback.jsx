import { useState } from "react"
import avatar from "../../../public/assets/images/avatar-img4.jpg"
import { formatDate } from "../../utils/formatDate"
import {AiFillStar} from "react-icons/ai"
import FeedbackForm from "./FeedbackForm"


const Feedback = () => {

  const [showFeedbackForm,setShowFeedbackForm] = useState(false);

  return (
    <div>
      <div className='mb-[50px]'>
          <h4 className='text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]'>All reviews (75)</h4>

          <div className='flex justify-between gap-10 mb-[30px]'>
            <div className='flex gap-3'>
              <figure className='w-[70px] h-[70px] lg:w-[80px] lg:h-[80px] flex-shrink-0 rounded-full'>
                <img className='w-full h-full object-cover rounded-full' src={avatar} alt="" />
              </figure>

              <div>
                <h5 className="text-[16px] leading-6 text-primaryColor font-bold">Annu</h5>
                <p className="text-[14px] leading-6 text-textColor">
                  {formatDate("04-09-2024")}
                </p>

              <div className="flex gap-1 h-fit mt-2">
              {[...Array(5).keys()].map((_,index)=>(
                <AiFillStar key={index} color="#0067FF" />
              ))}
            </div>
                
                <p className="text_para mt-3 font-medium text-[15px]">
                Invaluable mock interview, highly recommended!
                </p>
              </div>
            </div>
          </div>
      </div>

      {!showFeedbackForm && <div className="text-center">
          <button className="btn" onClick={()=>setShowFeedbackForm(true)}>Give Feedback</button>
      </div>}

      {showFeedbackForm && <FeedbackForm/>}

    </div>
  )
}

export default Feedback
