import React from 'react'
import logo from '../../assets/farmersmartlogo.png'
import LanguageIcon from '@mui/icons-material/Language';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    };

  return (
    <nav className='sticky top-0 z-50 bg-gray-800 text-neutral-200'>
        <div className='container py-2 mx-auto relative'>
            <div className='flex justify-between items-center'>
                <div className='flex items-center w-1/3 md:w-1/2'>
                    <Link to='/'>
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <div className='hidden lg:flex justify-center space-x-12 items-center'>
                    <div className='mr-2 hover:cursor-pointer'>
                        Deliver to: <br/> NIG
                    </div>
                    <div className='mr-2 hover:cursor-pointer'>
                        <LanguageIcon/> English-UK
                    </div>
                    <div className='mr-2 hover:cursor-pointer md:hover:text-slate-400'>
                        <PersonIcon/> Sign in
                    </div>
                    <div className='mr-2'>
                        <Link to='/signup'>
                            <p className='py-2 px-3 border-2 hover:cursor-pointer
                            hover:p-3 rounded-lg border-sky-800 bg-sky-800'>Sign up</p>
                        </Link>
                    </div>
                </div>
                <div className=' lg:hidden md:flex flex-col justify-end'>
                    <MenuIcon onClick={toggleMenu} className="text-white cursor-pointer" />
                </div>
            </div>
            {isMenuOpen && (
                <div className='fixed top-20 right-0 z-20 w-full bg-gray-800
                 flex flex-col justify-center items-center lg:hidden'>
                    <div className='my-2 hover:cursor-pointer'>
                        Deliver to: NIG
                    </div>
                    <div className='my-2 hover:cursor-pointer'>
                        <LanguageIcon/> English-UK
                    </div>
                    <div className='my-2 hover:cursor-pointer'>
                        <PersonIcon/> Sign in
                    </div>
                    <div className='my-2'>
                        <p className='py-2 px-3 border-2 hover:cursor-pointer
                        hover:p-3 rounded-lg border-sky-800 bg-sky-800'>Sign up</p>
                    </div>
                </div>
            )}
        </div>
    </nav>
  )
}

export default NavBar