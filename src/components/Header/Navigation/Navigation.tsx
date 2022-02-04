export const Navigation = () => {
  return (
    <nav>
      <ul className='flex'>
        <li className='px-5 py-2 font-bold text-navColor hover:text-white'>
          <a href='./packages'>Packages</a>
        </li>
        <li className='px-5 py-2 font-bold text-navColor hover:text-white'>
          <a href='./customers'>Customers</a>
        </li>
        <li className='px-5 py-2 font-bold text-white bg-hostingButton hover:text-hostingButton hover:bg-white rounded-md'>
          <a href='./start-hosting'>Start Hosting</a>
        </li>
      </ul>
    </nav>
  );
};
