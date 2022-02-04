export const RecPlan = () => {
  return (
    <article className='plan bg-recPlan flex flex-col justify-between items-center h-96 p-2 min-w-plans shadow-2xl'>
      <h1 className='p-2 text-recPlan font-bold bg-white w-full rounded-md text-center shadow-2xl'>
        RECOMMENDED
      </h1>
      <h1 className='text-white text-xl font-bold'>PLUS</h1>
      <h2 className='text-recPlanPrice text-3xl font-bold'>$29/month</h2>
      <h3 className='font-bold text-white'>For ambitious projects.</h3>
      <ul className='text-white text-center'>
        <li>5 Workspaces</li>
        <li>Unlimited Traffic</li>
        <li>100GB Storage</li>
        <li>Plus Support</li>
      </ul>
      <div>
        <button className='text-white font-bold bg-navColor p-3 rounded-md border border-navColor hover:bg-white hover:text-navColor'>
          CHOOSE PLAN
        </button>
      </div>
    </article>
  );
};
