export const Footer = () => {
  return (
    <footer className='flex justify-center p-5 mt-5 text-white bg-black'>
      <nav>
        <ul className='flex flex-col items-center lg:flex-row'>
          <li className='lg:mr-5'>
            <a href='/'>Support</a>
          </li>
          <li>
            <a href='/'>Terms of Use</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};
