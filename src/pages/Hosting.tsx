export const Hosting = () => {
  return (
    <div className='flex flex-col items-center mt-20'>
      <h1 className='my-10 text-2xl font-bold text-customers'>
        Awesome! Let's dive right in!
      </h1>
      <div className='w-full max-w-sm'>
        <form className='px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-xl'>
          <div className='mb-4'>
            <label
              className='block mb-2 text-sm font-bold text-gray-700'
              htmlFor='firstName'>
              First Name
            </label>
            <input
              className='w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
              id='firstName'
              type='text'
              placeholder='First Name'
            />
          </div>
          <div className='mb-4'>
            <label
              className='block mb-2 text-sm font-bold text-gray-700'
              htmlFor='lastName'>
              Last Name
            </label>
            <input
              className='w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
              id='lastName'
              type='text'
              placeholder='Last Name'
            />
          </div>
          <div className='mb-4'>
            <label
              className='block mb-2 text-sm font-bold text-gray-700'
              htmlFor='email'>
              Email
            </label>
            <input
              className='w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
              id='email'
              type='email'
              placeholder='Email'
            />
          </div>
          <div className='mb-6'>
            <label
              className='block mb-2 text-sm font-bold text-gray-700'
              htmlFor='password'>
              Password
            </label>
            <input
              className='w-full px-3 py-2 mb-3 leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline'
              id='password'
              type='password'
              placeholder='******************'
            />
            <p className='text-xs italic text-red-500'>
              Please choose a password.
            </p>
          </div>
          <div className='flex items-center justify-between'>
            <button
              className='px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline'
              type='button'>
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
