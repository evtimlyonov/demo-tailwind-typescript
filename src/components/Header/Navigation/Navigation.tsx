import './Navigation.style.css';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav className='menu'>
      <ul>
        <Link to='/packages'>
          <li>Packages</li>
        </Link>
        <Link to='/customers'>
          <li>Customers</li>
        </Link>
        <Link to='/start-hosting'>
          <li className='nav__menu--like-btn animate-shacke'>Start Hosting</li>
        </Link>
      </ul>
    </nav>
  );
};
