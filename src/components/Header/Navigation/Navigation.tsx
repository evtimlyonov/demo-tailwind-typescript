import './Navigation.style.css';

export const Navigation = () => {
  return (
    <nav className='menu'>
      <ul>
        <li>
          <a href='/packages'>Packages</a>
        </li>
        <li>
          <a href='/customers'>Customers</a>
        </li>
        <li className='nav__menu--like-btn'>
          <a href='/start-hosting'>Start Hosting</a>
        </li>
      </ul>
    </nav>
  );
};
