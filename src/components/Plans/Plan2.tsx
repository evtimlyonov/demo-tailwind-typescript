import { PlanInt } from './Plan.model';

export const Plan2: React.FC<PlanInt> = (props) => {
  return (
    <>
      {props.plan.map((plan) => (
        <article
          key={plan.id}
          className='flex flex-col items-center justify-between p-2 plan bg-lightGreen h-80 min-w-plans hover:animate-scale'>
          <h1 className='text-xl font-bold text-navColor'>
            {plan.name.toUpperCase()}
          </h1>
          <h2 className='text-3xl font-bold text-priceGray'>
            ${plan.price}/month
          </h2>
          <h3 className='font-bold'>{plan.subject}</h3>
          <ul className='text-center'>
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
