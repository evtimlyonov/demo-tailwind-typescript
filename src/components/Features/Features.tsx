import './Features.style.css';

export const Features = () => {
  return (
    <section className='p-5 mt-20 bg-featuresBg'>
      <h1 className='text-2xl font-bold text-center text-white'>
        Many Good Reasons to Stick Around
      </h1>
      <ul className='flex flex-col justify-center mt-10 font-bold text-white lg:flex-row'>
        <li className='my-2 key-feature'>
          <div className='key__feature--circle'></div>
          <p>3,857,000 Trusting Customers</p>
        </li>
        <li className='key-feature'>
          <div className='key__feature--circle'></div>
          <p>99.999% Uptime Guarantee</p>
        </li>
        <li className='key-feature'>
          <div className='key__feature--circle'></div>
          <p>Lightning Fast CDN</p>
        </li>
      </ul>
    </section>
  );
};
