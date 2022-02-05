import { Package } from '../components/Package/Package';
import { Package2 } from '../components/Package/Package2';
import { Package3 } from '../components/Package/Package3';

export const Packages = () => {
  return (
    <>
      <div
        className='absolute -mt-20 w-screen h-screen -z-50 grayscale-[40%] bg-no-repeat bg-cover'
        style={{ backgroundImage: 'url(./images/plans-background.jpg)' }}></div>
      <div className='flex flex-col justify-between'>
        <Package />
        <Package2 />
        <Package3 />
      </div>
    </>
  );
};
