import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    <div className='flex items-center justify-center'>
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
  );
};
