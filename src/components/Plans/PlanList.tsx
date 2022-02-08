import { Plan } from './Plan';
import { Plan2 } from './Plan2';
import { RecPlan } from './RecPlan';

const plan = [
  {
    id: 1,
    recommended: false,
    name: 'free',
    price: 0,
    subject: 'For hobby projects or small teams.',
    planFeatures: [
      '5 Workspaces',
      'Unlimited Traffic',
      '100GB Storage',
      'Plus Support',
    ],
    btn: 'CHOOSE PLAN',
  },
];

const plan2 = [
  {
    id: 2,
    recommended: true,
    name: 'PLUS',
    price: 29,
    subject: 'For ambitious projects.',
    planFeatures: [
      '5 Workspaces',
      'Unlimited Traffic',
      '100GB Storage',
      'Plus Support',
    ],
    btn: 'CHOOSE PLAN',
  },
];

const plan3 = [
  {
    id: 3,
    recommended: false,
    name: 'premium',
    price: 99,
    subject: 'Your enterprise solution.',
    planFeatures: [
      '10 Workspaces',
      'Unlimited Traffic',
      'Unlimited Storage',
      'Priority Support',
    ],
    btn: 'CHOOSE PLAN',
  },
];

export const Plans = () => {
  return (
    <div className='mt-10'>
      <h1 className='mb-5 text-3xl font-bold text-center text-green'>
        Choose Your Plan
      </h1>
      <div className='z-0 flex items-center justify-center flex-column'>
        <Plan plan={plan} />
        <RecPlan plan={plan2} />
        <Plan2 plan={plan3} />
      </div>
    </div>
  );
};
