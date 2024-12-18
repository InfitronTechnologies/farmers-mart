import React, { useState, useEffect } from 'react';
import logo from '../../assets/farmersmartlogo.png';
import LanguageIcon from '@mui/icons-material/Language';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

function NavBar({ bgColor }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Scroll effect to change navbar background color
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Use bgColor from props or default to dynamic scroll effect
  const navBarBgColor = scroll ? 'bg-farmersmartDarkGreen' : (bgColor || 'bg-transparent');

  return (
    <nav className={`fixed top-0 w-full z-50 transition-colors duration-300 ${navBarBgColor} text-white`}>
      <div className='py-2 relative w-full'>
        <div className='flex justify-between w-full'>
          <div className='flex flex-1 items-center w-2/5 md:w-1/5'>
            <Link to='/'>
              <img src={logo} alt="Farmersmart logo" />
            </Link>
          </div>
          <div className='hidden lg:flex justify-between w-4/5 space-x-12 items-center'>
            <div className='flex flex-row text-sm md:ml-12 font-semibold'>
              <div className='mx-4 hover:cursor-pointer'>
                <Link to='/'>
                  Home
                </Link>
              </div>
              <div className='mx-4 hover:cursor-pointer'>
                <Link to='/about'>
                  About
                </Link>
              </div>
              <div className='mx-4 hover:cursor-pointer'>
                <Link to='/services'>
                  Services
                </Link>
              </div>
              {/* <div className='mx-4 hover:cursor-pointer'>
                <Link to='/faq'>
                  FAQ
                </Link>
              </div> */}
              <div className='mx-4 hover:cursor-pointer'>
                <Link to='/updates'>
                  What's New?
                </Link>
              </div>
            </div>
            <div className='lg:hidden md:flex flex-col justify-end'>
              <MenuIcon onClick={toggleMenu} className="text-white cursor-pointer" />
            </div>
            <div className='flex flex-row flex-1 justify-end items-center'>
              <div className='mr-4 px-4 py-2 hover:cursor-pointer border-2 border-farmersmartYellow rounded-3xl md:hover:text-neutral-300'>
                <Link to='/login'>
                  LOGIN
                </Link>
              </div>
              <div className='px-4 py-2 mr-8 border-2 hover:cursor-pointer border-farmersmartDarkGreen bg-farmersmartDarkGreen rounded-3xl md:hover:text-neutral-300'>
                <Link to='/signup'>
                  SIGN UP
                </Link>
              </div>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className='fixed top-14 right-0 z-20 w-full bg-farmersmartDarkGreen flex flex-col justify-center items-center lg:hidden'>
            <div className='flex flex-col justify-center items-center text-sm md:ml-12'>
              <div className='my-2 hover:cursor-pointer'>
                <Link to='/'>
                  Home
                </Link>
              </div>
              <div className='my-2 hover:cursor-pointer'>
                <Link to='/about'>
                  About
                </Link>
              </div>
              <div className='my-2 hover:cursor-pointer'>
                <Link to='/services'>
                  Services
                </Link>
              </div>
              {/* <div className='my-2 hover:cursor-pointer'>
                <Link to='/faq'>
                  FAQ
                </Link>
              </div> */}
              <div className='my-2 hover:cursor-pointer'>
                <Link to='/updates'>
                  What's New?
                </Link>
              </div>
            </div>
            <div className='flex flex-col items-center'>
              <div className='my-2 p-2 hover:cursor-pointer border-2 border-farmersmartYellow rounded-3xl md:hover:text-neutral-300'>
                <Link to='/login'>
                  LOGIN
                </Link>
              </div>
              <div className='my-2 px-5 py-3 border-2 hover:cursor-pointer border-farmersmartGreen bg-farmersmartGreen rounded-3xl md:hover:text-neutral-300'>
                <Link to='/signup'>
                  SIGN UP
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
