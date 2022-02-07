import { Logo } from './Logo/Logo';
import { Navigation } from './Navigation/Navigation';
import './Header.style.css';

export const Header = () => {
  return (
    <header className='fixed top-0 z-50 w-screen'>
      <Logo />
      <Navigation />
    </header>
  );
};
