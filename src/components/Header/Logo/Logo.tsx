import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Logo.style.css';

export const Logo = () => {
  const [mobileNav, setMobileNav] = useState(false);

  const modal: React.MouseEventHandler = (e) => {
    e.preventDefault();
    setMobileNav((prevState) => !prevState);
  };

  return (
    <>
      {mobileNav && (
        <>
          <div
            className='fixed top-0 left-0 z-40 w-full h-full bg-backdrop'
            onClick={modal}></div>

          <nav className='fixed top-0 left-0 z-50 h-screen bg-white w-[80%]'>
            <ul
              className='flex flex-col justify-center items-center mx-4 w-[90%] h-full text-2xl font-montserrat font-bold'
              onClick={modal}>
              <li className='my-4'>
                <Link to='/'>Home</Link>
              </li>
              <li className='my-4'>
                <Link to='/packages'>Packages</Link>
              </li>
              <li className='my-4'>
                <Link to='/customers'>Customers</Link>
              </li>
              <li className='px-5 py-2 my-4 font-bold text-white rounded-md bg-hostingButton hover:text-hostingButton hover:bg-white'>
                <Link to='/start-hosting'>Start Hosting</Link>
              </li>
            </ul>
          </nav>
        </>
      )}
      <div className='flex items-center justify-center' onClick={modal}>
        <div className='mr-4 -ml-4 space-y-2 sm:hidden'>
          <span className='block w-8 h-1 bg-gray-600'></span>
          <span className='block w-8 h-1 bg-gray-600'></span>
          <span className='block w-8 h-1 bg-gray-600'></span>
        </div>
        <Link to='/'>
          <img
            className='h-10'
            src='images/uhost-icon.png'
            alt='uHost - Your favorite hosting company'
          />
        </Link>
      </div>
    </>
  );
};
