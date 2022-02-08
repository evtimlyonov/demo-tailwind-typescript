import { Customers } from './Customers.model';

export const Customer: React.FC<Customers> = (props) => {
  return (
    <>
      {props.customers.map((customer) => (
        <div className='flex flex-col justify-center mt-16 lg:mx-2 lg:flex-row'>
          {customer.float === 'left' && (
            <div className='lg:w-[80%] max-w-40'>
              <img
                src={customer.img}
                alt={`${customer.name} - Customer`}
                className='shadow-xl'
              />
            </div>
          )}
          <div className='flex flex-col justify-center p-2 text-right'>
            <h1 className='text-4xl font-bold text-customers'>
              {customer.name}
            </h1>
            <h2 className='text-xl font-bold text-lightGray'>
              {customer.subject}
            </h2>
            <p className='testimonial__text'>{customer.text}</p>
          </div>
          {customer.float === 'right' && (
            <div className='lg:w-[80%] max-w-40'>
              <img
                src={customer.img}
                alt={`${customer.name} - Customer`}
                className='shadow-xl'
              />
            </div>
          )}
        </div>
      ))}
    </>
  );
};
