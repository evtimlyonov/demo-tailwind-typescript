export const Package2 = () => {
  return (
    <section className='self-end text-right mt-10 border-4 border-packageDarkGreen bg-packageBg hover:border-hostingButton w-[80%] hover:animate-move-up'>
      <div className='w-full p-6'>
        <a href='/'>
          <h1 className='my-4 text-2xl font-bold'>Our Free Plan</h1>
          <h2 className='my-4 text-xl font-bold text-gray-400'>
            An extremely solid start into our hosting world.
          </h2>
          <p className='p-4 bg-white border text-navColor border-green'>
            Get started immediately at zero cost!
          </p>
        </a>
      </div>
    </section>
  );
};
