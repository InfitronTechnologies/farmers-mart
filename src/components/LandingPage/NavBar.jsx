import React, { useState, useEffect } from 'react';
import logo from '../../assets/farmersmartlogo.png';
import LanguageIcon from '@mui/icons-material/Language';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { Menu } from '@mui/icons-material';

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
    let navBarBgColor = bgColor; // Start with the prop
    if (!bgColor && scroll) { // Only change if NO prop is given AND scrolling
      navBarBgColor = 'bg-farmersmartDarkGreen';
    } else if (!bgColor && !scroll) {
      navBarBgColor = 'bg-transparent';
    }

  return (
    <nav className={`fixed justify-between top-0 left-0 w-full z-50 transition-colors duration-300 ${navBarBgColor}`}>    
      <div className='py-2 relative w-full'>
        <div className='flex justify-between w-full'>
          <div className='flex flex-1 items-center w-2/5 md:w-1/5'>
            <Link to='/'>
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className='hidden lg:flex justify-between w-4/5 space-x-12 items-center mt-4'>
            <div className='flex flex-row text-sm md:ml-12 text-white font-semibold'>
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
              <div className='mx-4 hover:cursor-pointer'>
                <Link to='/updates'>
                  What's New?
                </Link>
              </div>
            </div>
            <div className='flex flex-row flex-1 justify-end items-center font-semibold mt-4'>
              <div className='mr-4 py-2 px-4 hover:cursor-pointer border-2 text-white border-farmersmartYellow rounded-3xl md:hover:text-farmersmartGreen'>
                <Link to='/login'>
                    LOGIN
                </Link>
              </div>
              <div className='px-4 py-2 border-2 hover:cursor-pointer text-white border-farmersmartDarkGreen bg-farmersmartDarkGreen rounded-3xl
                  md:hover:text-neutral-300'>
                <Link to='/signup'>
                    <p className=''> SIGN UP</p>
                </Link>
              </div>
            </div>
          </div>
          <div className='lg:hidden md:flex flex-col justify-end'>
            <Menu onClick={toggleMenu} className="text-white cursor-pointer" />
          </div>
        </div>

      {isMenuOpen && (
        <div className='fixed top-14 right-0 z-20 w-full bg-farmersmartYellow
        flex flex-col justify-center items-center lg:hidden'>
          {/* <div className='hidden lg:flex justify-between w-4/5 space-x-12 items-center'> */}
              <div className='flex flex-col justify-center items-center text-sm text-white font-semibold md:ml-12'>
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
                <div className='my-2 hover:cursor-pointer'>
                  <Link to='/updates'>
                    What's New?
                  </Link>
                </div>
              </div>
              <div className='flex flex-col items-center '>
                  <div className='my-2 p-2 hover:cursor-pointer font-semibold text-farmersmartDarkGreen rounded-3xl md:hover:text-farmersmartGreen'>
                  <Link to='/login'>
                      LOGIN
                  </Link>
                  </div>
                  <div className='my-2 px-5 py-3 border-2 hover:cursor-pointer font-semibold text-white border-farmersmartGreen bg-farmersmartGreen rounded-3xl
                      md:hover:text-neutral-300'>
                  <Link to='/signup'>
                      <p className=''> SIGN UP</p>
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
