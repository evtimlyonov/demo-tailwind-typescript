import { Logo } from './Logo/Logo';
import { Navigation } from './Navigation/Navigation';

export const Header = () => {
  return (
    <header className='bg-green flex justify-between items-center px-10 h-16'>
      <Logo />
      <Navigation />
    </header>
  );
};
