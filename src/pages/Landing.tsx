import { Features } from '../components/Features/Features';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { Plans } from '../components/Plans/PlanList';
import { ProductOverview } from '../components/ProductOverview/ProductOverview';

export const Landing = () => {
  return (
    <>
      <Header />
      <ProductOverview />
      <Plans />
      <Features />
      <Footer />
    </>
  );
};
