import { PlanInt } from './Plan.model';

export const RecPlan: React.FC<PlanInt> = (props) => {
  return (
    <>
      {props.plan.map((plan) => (
        <article
          key={plan.id}
          className='flex flex-col items-center justify-between p-2 shadow-2xl plan bg-recPlan h-96 min-w-plans'>
          {plan.recommended && (
            <h1 className='w-full p-2 font-bold text-center bg-white rounded-md shadow-2xl text-recPlan'>
              RECOMMENDED
            </h1>
          )}
          <h1 className='text-xl font-bold text-white'>
            {plan.name.toUpperCase()}
          </h1>
          <h2 className='text-3xl font-bold text-recPlanPrice'>
            ${plan.price}/month
          </h2>
          <h3 className='font-bold text-white'>{plan.subject}</h3>
          <ul className='text-center text-white'>
            {plan.planFeatures.map((fea) => (
              <li key={Math.random() * 100}>{fea}</li>
            ))}
          </ul>
          <div>
            <button className='p-3 font-bold text-white border rounded-md bg-navColor border-navColor hover:bg-white hover:text-navColor'>
              {plan.btn}
            </button>
          </div>
        </article>
      ))}
    </>
  );
};
