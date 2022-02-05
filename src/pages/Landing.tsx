import { Features } from '../components/Features/Features';
import { Plans } from '../components/Plans/PlanList';
import { ProductOverview } from '../components/ProductOverview/ProductOverview';

export const Landing = () => {
  return (
    <>
      <ProductOverview />
      <Plans />
      <Features />
    </>
  );
};
