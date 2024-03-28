import { Link } from 'react-router-dom';
import { RiLinkedinFill } from 'react-icons/ri';
import logo from '../../../public/assets/conxpert_logo1.svg';
import { AiFillGithub, AiFillLinkedin, AiOutlineInstagram } from 'react-icons/ai';


const socialLinks = [
  {
    path: "https://github.com/srikishore5727",
    icons: <AiFillGithub className='group-hover:text-white w-4 h-5' />
  },
  {
    path: "https://www.instagram.com/srikishore5727/",
    icons: <AiOutlineInstagram className="group-hover:text-white w-4 h-5" />
  },
  {
    path: "https://www.linkedin.com/in/srikishore5727/",
    icons: <AiFillLinkedin className='' />
  }
];


const quickLinks01 = [
  {
    path: "/home",
    display: "Home"
  },
  {
    path: "/",
    display: "About Us"
  },
  {
    path: "/Services",
    display: "Services"
  },
  {
    path: "/",
    display: "Blog"
  },
];

const quickLinks02 = [
  {
    path: "/find-a-mentor",
    display: "Find a Mentor"
  },
  {
    path: "/",
    display: "Book a Session"
  },
  {
    path: "/",
    display: "Get a Idea"
  },
];

const quickLinks03 = [
  {
    path: "/",
    display: "Donate"
  },
  {
    path: "/contact",
    display: "Contact Us"
  }
];


const Footer = () => {

  const year = new Date().getFullYear()

  return (
    <footer className='p-[20px] pb-16 pt-10'>
      <div className='container'>
        <div className='flex justify-around flex-col lg:flex-row flex-wrap gap-[30px]'>
          <div>
            <div className='flex items-center -ml-[20px]'>
              <img className='h-[100px] w-[100px] hover:rotate' src={logo} alt="logo" />
              {/* <h1>CONXPERT</h1> */}
              <h1 className='-ml-[10px]'><span className="text-2xl lg:text-1xl font-bold pt-1 font-display text-green-900">CON</span><span className="text-2xl lg:text-1xl font-gray font-display text-green-900">X</span><span className="text-2xl lg:text-1xl font-bold pt-1 font-display text-green-900">PERT</span></h1>
            </div>
            <p className='text-[16px] leading-7 font-[400] text-textColor mt-4'>
              Copyright © {year} developed by <span className='text-[red] underline'>Sri Kishore</span> all right reserved.
            </p>

            <div className='flex items-center gap-3 mt-4'>
              {socialLinks.map((link, index) => <Link to={link.path} target='_blank' key={index} className='w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                {link.icons}
              </Link>)}
            </div>


          </div>
          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>Quick Links</h2>

            <ul>
              {quickLinks01.map((item, index) =>
                <li key={index} className='mb-4'>
                  <Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor hover:underline'>{item.display}</Link>
                </li>)}
            </ul>
          </div>

          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>I want to:</h2>

            <ul>
              {quickLinks02.map((item, index) =>
                <li key={index} className='mb-4'>
                  <Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor hover:underline'>{item.display}</Link>
                </li>)}
            </ul>


          </div>


          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>Support</h2>

            <ul>
              {quickLinks03.map((item, index) =>
                <li key={index} className='mb-4'>
                  <Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor hover:underline'>{item.display}</Link>
                </li>)}
            </ul>


          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer;
