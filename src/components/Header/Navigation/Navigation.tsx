import './Navigation.style.css';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav className='menu'>
      <ul>
        <li>
          <Link to='/packages'>Packages</Link>
        </li>
        <li>
          <Link to='/customers'>Customers</Link>
        </li>
        <li className='nav__menu--like-btn'>
          <Link to='/start-hosting'>Start Hosting</Link>
        </li>
      </ul>
    </nav>
  );
};
