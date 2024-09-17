// import React from 'react'
// import logo from '../../assets/farmersmartlogo.png'
// import LanguageIcon from '@mui/icons-material/Language';
// import PersonIcon from '@mui/icons-material/Person';
// import MenuIcon from '@mui/icons-material/Menu';
// import { useState } from 'react';
// import { Link } from 'react-router-dom';

// function NavBar() {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//     };

//   return (
//     <nav className='sticky top-0 z-50 bg-transparent text-neutral-200'>
//         <div className='container py-2 mx-auto relative'>
//             <div className='flex justify-between items-center'>
//                 <div className='flex items-center w-1/3 md:w-1/2'>
//                     <Link to='/'>
//                         <img src={logo} alt="" />
//                     </Link>
//                 </div>
//                 <div className='hidden lg:flex justify-center space-x-12 items-center'>
//                     <div className='mr-2 hover:cursor-pointer'>
//                         Deliver to: <br/> NIG
//                     </div>
//                     <div className='mr-2 hover:cursor-pointer'>
//                         <LanguageIcon/> English-UK
//                     </div>
//                     <div className='mr-2 hover:cursor-pointer md:hover:text-slate-400'>
//                         <Link to='/login'>
//                             <PersonIcon/> Sign in
//                         </Link>
//                     </div>
//                     <div className='mr-2'>
//                         <Link to='/signup'>
//                             <p className='py-2 px-3 border-2 hover:cursor-pointer
//                              md:hover:p-3 rounded-lg border-sky-800 bg-sky-800'>Sign up</p>
//                         </Link>
//                     </div>
//                 </div>
//                 <div className=' lg:hidden md:flex flex-col justify-end'>
//                     <MenuIcon onClick={toggleMenu} className="text-white cursor-pointer" />
//                 </div>
//             </div>
//             {isMenuOpen && (
//                 <div className='fixed top-20 right-0 z-20 w-full bg-gray-800
//                  flex flex-col justify-center items-center lg:hidden'>
//                     <div className='my-2 hover:cursor-pointer'>
//                         Deliver to: NIG
//                     </div>
//                     <div className='my-2 hover:cursor-pointer'>
//                         <LanguageIcon/> English-UK
//                     </div>
//                     <div className='my-2 hover:cursor-pointer'>
//                         <Link to='/login'>
//                             <PersonIcon/> Sign in
//                         </Link>
//                     </div>
//                     <Link to='/signup'>
//                         <p className='py-2 px-3 border-2 hover:cursor-pointer
//                             md:hover:p-3 rounded-lg border-sky-800 bg-sky-800'>Sign up</p>
//                     </Link>
//                 </div>
//             )}
//         </div>
//     </nav>
//   )
// }

// export default NavBar


import React, { useState, useEffect } from 'react';
import logo from '../../assets/farmersmartlogo.png';
import LanguageIcon from '@mui/icons-material/Language';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

function NavBar() {
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

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${scroll ? 'bg-farmersmartDarkGreen text-white' : 'bg-transparent text-white'}`}>    
      <div className='container py-2 relative'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center w-2/5 md:w-1/5'>
            <Link to='/'>
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className='hidden lg:flex justify-between w-4/5 space-x-12 items-center'>
           <div className='flex flex-row text-sm md:ml-12'>
                <div className='mx-4 hover:cursor-pointer'>
                    Home
                </div>
                <div className='mx-4 hover:cursor-pointer'>
                    About
                </div>
                <div className='mx-4 hover:cursor-pointer'>
                    Services
                </div>
                <div className='mx-4 hover:cursor-pointer'>
                    What's New?
                </div>
           </div>
            <div className='flex flex-row items-center'>
                <div className='mr-4 p-2 hover:cursor-pointer border-2 border-farmersmartYellow rounded-3xl md:hover:text-neutral-300'>
                <Link to='/login'>
                    <PersonIcon /> SIGN IN
                </Link>
                </div>
                <div className='mr-4 px-5 py-3 border-2 hover:cursor-pointer border-farmersmartDarkGreen bg-farmersmartDarkGreen rounded-3xl
                    md:hover:text-neutral-300'>
                <Link to='/signup'>
                    <p className=''> SIGN UP</p>
                </Link>
                </div>
            </div>
          </div>
          <div className='lg:hidden md:flex flex-col justify-end'>
            <MenuIcon onClick={toggleMenu} className="text-white cursor-pointer" />
          </div>
        </div>

        {isMenuOpen && (
          <div className='fixed top-14 right-0 z-20 w-full bg-farmersmartDarkGreen
          flex flex-col justify-center items-center lg:hidden'>
            {/* <div className='hidden lg:flex justify-between w-4/5 space-x-12 items-center'> */}
                <div className='flex flex-col justify-center items-center text-sm md:ml-12'>
                    <div className='my-2 hover:cursor-pointer'>
                        Home
                    </div>
                    <div className='my-2 hover:cursor-pointer'>
                        About
                    </div>
                    <div className='my-2 hover:cursor-pointer'>
                        Services
                    </div>
                    <div className='my-2 hover:cursor-pointer'>
                        What's New?
                    </div>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='my-2 p-2 hover:cursor-pointer border-2 border-farmersmartYellow rounded-3xl md:hover:text-neutral-300'>
                    <Link to='/login'>
                        <PersonIcon /> SIGN IN
                    </Link>
                    </div>
                    <div className='my-2 px-5 py-3 border-2 hover:cursor-pointer border-farmersmartGreen bg-farmersmartGreen rounded-3xl
                        md:hover:text-neutral-300'>
                    <Link to='/signup'>
                        <p className=''> SIGN UP</p>
                    </Link>
                    </div>
                </div>
            {/* </div> */}
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
