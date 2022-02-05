import { Plan } from './Plan';
import { RecPlan } from './RecPlan';

interface PlanInt {
  id: number;
  recommended: boolean;
  name: string;
  price: number;
  subject: string;
  planFeatures: string[];
  btn: string;
}

const plan: PlanInt[] = [
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
      <div className='flex items-center justify-center flex-column'>
        <Plan />
        <RecPlan />
        <Plan />
      </div>
    </div>
  );
};
