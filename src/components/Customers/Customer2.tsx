export const Customer2 = () => {
  return (
    <div className='flex justify-center mt-20 ml-2'>
      <div className='flex flex-col justify-center p-2 text-left'>
        <h1 className='text-4xl font-bold text-customers'>John Mellow</h1>
        <h2 className='text-xl font-bold text-lightGray'>
          Hosts his private videos on <a href='tech-analysis.com'>uHost</a>.
        </h2>
        <p className='testimonial__text'>
          I worked as a blogger and always looked for an integrated hosting and
          file storage solution. I found it in uHost!
        </p>
      </div>
      <div className='w-[80%] max-w-40'>
        <img
          src='../images/customer-2.jpg'
          alt='John Mellow - Customer'
          className='shadow-xl'
        />
      </div>
    </div>
  );
};
