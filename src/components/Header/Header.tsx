import { Logo } from './Logo/Logo';
import { Navigation } from './Navigation/Navigation';
import './Header.style.css';

export const Header = () => {
  return (
    <header>
      <Logo />
      <Navigation />
    </header>
  );
};
