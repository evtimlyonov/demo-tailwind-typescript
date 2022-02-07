import { Customer1 } from '../components/Customers/Customer1';
import { Customer2 } from '../components/Customers/Customer2';
import { CustomerBasic } from '../components/Customers/CustomerBasic';

const customers = [
  {
    id: 1,
    name: 'Mike Statham',
    img: '../images/customer-1.jpg',
    subject: 'Founder of tech-analysis.com',
    text: 'uHost helped me realize my project with a highly constrained budget in like no time.',
    float: 'left',
  },
  {
    id: 2,
    name: 'John Mellow',
    img: '../images/customer-2.jpg',
    subject: 'Hosts his private videos on uHost',
    text: 'I worked as a blogger and always looked for an integrated hosting and file storage solution. I found it in uHost!',
    float: 'right',
  },
];

export const Customers = () => {
  return (
    <>
      <CustomerBasic customers={customers} />
    </>
  );
};
