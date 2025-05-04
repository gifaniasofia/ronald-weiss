export const Hero = () => {
  return (
    <div className='relative z-20 isolate overflow-hidden lg:aspect-[1440/1331] min-h-screen'>
      <div className='pt-60 pb-14 sm:pb-32 absolute bottom-0 lg:bottom-1/4 container-center z-10 flex flex-col items-center space-y-10 sm:space-y-16'>
        <h1 className='font-poppins text-white text-4xl md:text-7xl font-bold'>
          Get a Fresh Start...
          <br />
          On Debt... and Life!
        </h1>
        <button className='bg-light-green rounded-lg font-medium py-1.5 px-4 text-base'>
          CONTACT US TO LEARN MORE
        </button>
      </div>

      <div className='absolute inset-0 lg:[clip-path:polygon(0_0,_100%_0,_100%_78%,_0%_100%)]'>
        <img
          src='/images/hero.webp'
          alt=''
          className='size-full object-cover'
        />

        <div className='absolute inset-0 bg-gradient-to-b from-40% from-bg-white/0 to-100% to-blue' />
      </div>
    </div>
  );
};
