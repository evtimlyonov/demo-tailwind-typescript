export const Package = () => {
  return (
    <section className='relative mt-10 border-4 border-packageDarkGreen bg-packageBg hover:border-hostingButton w-[80%] overflow-hidden'>
      <div className='p-6'>
        <a href='/'>
          <h1 className='my-4 text-2xl font-bold'>Our PLUS Plan</h1>
          <h2 className='absolute top-0 right-0 px-6 py-2 m-2 text-[0.8rem] font-bold font-montserrat text-white rotate-45 translate-x-[2.8rem] -translate-y-[-1rem] overflow-hidden bg-badge'>
            RECOMMENDED
          </h2>
          <h2 className='my-4 text-xl font-bold text-gray-400'>
            The most popular choice of our customers.
          </h2>
          <p className='p-4 bg-white border text-navColor border-green'>
            Benefit from increased storage and faster support to ensure that
            your mission-critical data and applications are always available!
          </p>
        </a>
      </div>
    </section>
  );
};
