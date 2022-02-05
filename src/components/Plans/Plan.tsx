export const Plan = () => {
  return (
    <article className='flex flex-col items-center justify-between p-2 plan bg-lightGreen h-80 min-w-plans'>
      <h1 className='text-xl font-bold text-navColor'>FREE</h1>
      <h2 className='text-3xl font-bold text-priceGray'>$0/month</h2>
      <h3 className='font-bold'>For hobby projects or small teams.</h3>
      <ul className='text-center'>
        <li>1 Workspace</li>
        <li>Unlimited Traffic</li>
        <li>10GB Storage</li>
        <li>Basic Support</li>
      </ul>
      <div>
        <button className='p-3 font-bold text-white border rounded-md bg-navColor border-navColor hover:bg-white hover:text-navColor'>
          CHOOSE PLAN
        </button>
      </div>
    </article>
  );
};
