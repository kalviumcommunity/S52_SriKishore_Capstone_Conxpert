import logo from '../../../public/assets/conxpert_logo1.svg';
import userImage from '../../../public/assets/user3.jpg';
import { NavLink, Link } from 'react-router-dom';
import { BiMenu } from "react-icons/bi";
import { useEffect, useRef } from 'react';

const navLinks = [
  {
    path: "/home",
    display: "Home"
  },
  {
    path: "/mentors",
    display: "Find a Mentors"
  },
  {
    path: "/services",
    display: "Services"
  },
  {
    path: "/contact",
    display: "Contact"
  }
]

const Header = () => {

  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const handleStickyHeader = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky_header')
      }
      else {
        headerRef.current.classList.remove('sticky_header')
      }
    })
  }

  useEffect(() => {
    handleStickyHeader()

    return () => window.removeEventListener('scroll', handleStickyHeader)
  })

  const toggleMenu = () => menuRef.current.classList.toggle('show_menu');



  return (
    <header className='header flex items-center' ref={headerRef}>
      <div className='container'>
        <div className='flex items-center justify-around'>
          {/* =====logo===== */}
          <div className='flex items-center'>
            <img className='h-[70px] w-[70px]' src={logo} alt="logo" />
            {/* <h1>CONXPERT</h1> */}
            <h1 className='-ml-[10px]'><span className="text-2xl lg:text-1xl font-bold pt-1 font-display text-green-900">CON</span><span className="text-2xl lg:text-1xl font-gray font-display text-green-900">X</span><span className="text-2xl lg:text-1xl font-bold pt-1 font-display text-green-900">PERT</span></h1>
          </div>

          {/* ====== menu ====== */}
          <div className='navigation' ref={menuRef} onClick={toggleMenu}>
            <ul className='menu flex items-center gap-[2.5rem]'>
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink to={link.path} className={navClass => navClass.isActive ? "text-primaryColor text-[14px] leading-7 font-[600]" : "text-textColor text-[14px] leading-7 font-[500] hover:text-primaryColor"}>
                    {link.display}
                  </NavLink>
                </li>
              ))}
              {/* Login button in navigation for mobile view */}
              <li className='md:hidden'>
                <Link to="/login">
                  <button className='bg-buttonColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]'>Login</button>
                </Link>
              </li>
            </ul>
          </div>


          {/* ===== nav right ===== */}
          <div className='flex items-center gap-4'>
            <div className='hidden'>
              <Link to='/'>
                <figure className='w-[45px] h-[45px] rounded-full cursor-pointer'>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqu5Pb0lIOEWdjOWB4lctKz3yFaoErlESJXpEHhkMm1g&s" alt="user" className='w-full h-full rounded-full' />
                </figure>
              </Link>
            </div>

            <div className='hidden md:block'>
              <Link to="/login">
                <button className='bg-buttonColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px] mr-[30px]'>Login</button>
              </Link>
            </div>

            <span className='md:hidden' onClick={toggleMenu}>
              <BiMenu className="w-6 h-6 cursor-pointer" />
            </span>

          </div>

        </div>
      </div>
    </header>
  )
}

export default Header;
