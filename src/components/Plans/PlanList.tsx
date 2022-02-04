import { Plan } from './Plan';
import { RecPlan } from './RecPlan';

export const Plans = () => {
  return (
    <div className='mt-10'>
      <h1 className='text-3xl font-bold text-center text-green mb-5'>
        Choose Your Plan
      </h1>
      <div className='flex flex-column justify-center items-center'>
        <Plan />
        <RecPlan />
        <Plan />
      </div>
    </div>
  );
};
