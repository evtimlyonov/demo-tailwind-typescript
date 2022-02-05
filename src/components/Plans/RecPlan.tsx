export const RecPlan = () => {
  return (
    <article className='flex flex-col items-center justify-between p-2 shadow-2xl plan bg-recPlan h-96 min-w-plans'>
      <h1 className='w-full p-2 font-bold text-center bg-white rounded-md shadow-2xl text-recPlan'>
        RECOMMENDED
      </h1>
      <h1 className='text-xl font-bold text-white'>PRO</h1>
      <h2 className='text-3xl font-bold text-recPlanPrice'>$29/month</h2>
      <h3 className='font-bold text-white'>For ambitious projects.</h3>
      <ul className='text-center text-white'>
        <li>5 Workspaces</li>
        <li>Unlimited Traffic</li>
        <li>100GB Storage</li>
        <li>Plus Support</li>
      </ul>
      <div>
        <button className='p-3 font-bold text-white border rounded-md bg-navColor border-navColor hover:bg-white hover:text-navColor'>
          CHOOSE PLAN
        </button>
      </div>
    </article>
  );
};
