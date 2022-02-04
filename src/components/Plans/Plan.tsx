export const Plan = () => {
  return (
    <article className='plan bg-lightGreen flex flex-col justify-between items-center h-80 p-2 min-w-plans'>
      <h1 className='text-navColor text-xl font-bold'>FREE</h1>
      <h2 className='text-priceGray text-3xl font-bold'>$0/month</h2>
      <h3 className='font-bold'>For hobby projects or small teams.</h3>
      <ul className='text-center'>
        <li>1 Workspace</li>
        <li>Unlimited Traffic</li>
        <li>10GB Storage</li>
        <li>Basic Support</li>
      </ul>
      <div>
        <button className='text-white font-bold bg-navColor p-3 rounded-md border border-navColor hover:bg-white hover:text-navColor'>
          CHOOSE PLAN
        </button>
      </div>
    </article>
  );
};
