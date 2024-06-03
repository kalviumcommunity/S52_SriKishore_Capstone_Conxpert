import signupImg from "../../public/assets/signup-images/signupGif1.gif";
import mentorDP from "../../public/assets/DP-images/mentorDP.jpg";
import { GoogleAuthProvider,signInWithPopup } from 'firebase/auth';
import {auth} from '../../firebase/firebaseConfig.js';
import { Link } from "react-router-dom";
import { useState } from "react";
import uploadImageToCloudinary from "../utils/uploadCloudinary.js";
import { BASE_URL } from "../../config.js";
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify';
import HashLoader from 'react-spinners/RiseLoader.js'

const Signup = () => {

  const navigate = useNavigate();


  const handleGoogle = async (e) =>{
    e.preventDefault();
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Google Sign-In Error: ", error);
    }
  };


  const [selectedFile,setSelectedFile] = useState(null);
  const [previewURL,setPreviewURL] = useState("");
  const [loading,setLoading] = useState(false);

  const [formData,setFormData] = useState({
    name:"",
    email:"",
    password:"",
    photo:selectedFile,
    gender:"",
    role:"mentee"
  })

  const handleInputChange = e => {
    setFormData({ ...formData,[e.target.name] : e.target.value});
  }

  const handleFileInputChange = async event =>{
    const file = event.target.files[0]

    const data = await uploadImageToCloudinary(file)

    console.log(data)

    setPreviewURL(data.url)
    setSelectedFile(data.url)
    setFormData({...formData, photo:data.url})


  }

  const sumbitHandler = async event=>{
    // console.log(formData);
    event.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/auth/register`,{
        method:'post',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(formData)
      })

      const {message} = await res.json()

      if(!res.ok){
        throw new Error(message)
      }
      
      setLoading(false)
      toast.success(message)
      navigate('/login')


    } catch (err) {
      toast.error(err.message)
      setLoading(false)
    }

  }
  
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
            <form onSubmit={sumbitHandler}>
              <div className='mb-5'>  
                <input type="text" placeholder='FullName' name='name' value={formData.name} 
                onChange={handleInputChange}
                className='md:w-[25rem] px-4 py-3 border-b border-solid border-[#fca594] focus:outline-none focus:border-b-[#E65F46] text-[15px] leading-7 text-headingColor placeholder:text-textColor bg-[white] rounded-md cursor-pointer' required autoComplete="fullname" />
              </div>

              <div className='mb-5'>
                <input type="email" placeholder='Enter Your Email' name='email' value={formData.email} onChange={handleInputChange} className='md:w-[25rem] px-4 py-3 border-b border-solid border-[#fca594] focus:outline-none focus:border-b-[#E65F46] text-[15px] leading-7 text-headingColor placeholder:text-textColor bg-[white] rounded-md cursor-pointer' required autoComplete="email" />
              </div>


              <div className='mb-5'>
                <input type="password" placeholder='Password' name='password' value={formData.password} onChange={handleInputChange} className='md:w-[25rem] px-4 py-3 border-b border-solid border-[#fca594] focus:outline-none focus:border-b-[#E65F46] text-[15px] leading-7 text-headingColor placeholder:text-textColor bg-[white] rounded-md cursor-pointer' required autoComplete="current-password" />
              </div>


              <div className="mb-5 flex items-center justify-between">
                <label className="text-headingColor font-bold text-[13px] leading-7">
                  Are you a:
                  <select name="role" value={formData.role} onChange={handleInputChange} className="text-textColor font-semibold text-[13px] leading-7 px-2 py-2 focus:outline-none">
                    <option value="mentee">Mentee</option>
                    <option value="mentor">Mentor</option>
                  </select>
                </label>

                <label className="text-headingColor font-bold text-[13px] leading-7">
                  Gender:
                  <select name="gender" value={formData.gender} onChange={handleInputChange} className="text-textColor font-semibold text-[13px] leading-7 px-2 py-2 focus:outline-none">
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="others">Other</option>
                  </select>
                </label>
              </div>

              <div className="mb-5 flex items-center gap-3">
                {selectedFile && <figure className="w-[40px] h-[40px] rounded-full border-2 border-solid border-[#3E9DF5] flex items-center justify-center">
                  <img src={previewURL} className="h-full w-full rounded-full" />
                </figure>}

                <div className="relative w-[123px] h-[40px]">
                  <input type="file" name="photo" id="customFile" accept=".jpg, .png" onChange={handleFileInputChange} className="absolute top-0 left-0 w-full opacity-0 cursor-pointer" />

                  <label htmlFor="customFile" className="absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#3e9df5] text-headingColor font-semibold rounded-lg truncate cursor-pointer">
                    Upload Photo
                  </label>
                </div>
              </div>

              <div className='mt-7 text-end'>
              <button disabled={loading && true} type='submit' className='w-full mx-auto bg-[#FF8570] text-white text-[15px] leading-[30px] rounded-lg px-4 py-3'>
                {/* Register */}
                {loading ? <HashLoader size={5} color="#ffffff"/>: 'Register'}
              </button>
          </div>

          <p className='text-[13px] md:text-[15px] mt-5 text-textColor text-center'>
            Already have an account? <Link to="/login" className='text-primaryColor ml-1'>Login</Link>
          </p>

          <button onClick={handleGoogle}>
            Signup with google
          </button>

            </form>
          </div>

        </div>
      </div>

    </section>
  )
}

export default Signup
