export const Features = () => {
  return (
    <section className='bg-featuresBg mt-20 p-5'>
      <h1 className='text-white text-center text-2xl font-bold'>
        Many Good Reasons to Stick Around
      </h1>
      <ul className='flex justify-center mt-10 text-white font-bold'>
        <li className='flex flex-col items-center min-w-feature'>
          <div className='h-24 w-24 bg-white rounded-full mb-5 border border-black'></div>
          <p className='key-feature__description'>
            3,857,000 Trusting Customers
          </p>
        </li>
        <li className='flex flex-col items-center min-w-feature'>
          <div className='h-24 w-24 bg-white rounded-full mb-5 border border-black'></div>
          <p className='key-feature__description'>99.999% Uptime Guarantee</p>
        </li>
        <li className='flex flex-col items-center min-w-feature'>
          <div className='h-24 w-24 bg-white rounded-full mb-5 border border-black'></div>
          <p className='key-feature__description'>Lightning Fast CDN</p>
        </li>
      </ul>
    </section>
  );
};
