import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    <h1>
      <Link to='/'>
        <img
          className='h-10'
          src='images/uhost-icon.png'
          alt='uHost - Your favorite hosting company'
        />
      </Link>
    </h1>
  );
};
