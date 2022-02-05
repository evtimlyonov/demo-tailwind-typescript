import { Package } from '../components/Package/Package';
import { Package2 } from '../components/Package/Package2';

export const Packages = () => {
  return (
    <>
      <div
        className='fixed -mt-20 w-screen h-screen -z-50 grayscale-[40%] bg-no-repeat bg-cover'
        style={{ backgroundImage: 'url(./images/plans-background.jpg)' }}></div>
      <Package />
      <Package2 />
    </>
  );
};
