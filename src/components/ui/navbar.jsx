import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <header className='absolute inset-x-0 top-8 z-50'>
      <nav
        aria-label='Global'
        className='flex items-center justify-between gap-3 relative container-center py-3 h-18'
      >
        <div className='flex flex-1'>
          <Link to='/'>
            <span className='sr-only'>Ronald Weiss</span>
            <img
              alt=''
              src='/images/logo.webp'
              className='w-[130px] sm:w-[211px] h-auto'
            />
          </Link>
        </div>
        <div className='flex flex-1 justify-end'>
          <span className='flex items-center gap-2 font-semibold text-xs sm:text-base'>
            <span className='shrink-0'>
              <img src='/images/call.webp' alt='' className='size-10' />
            </span>
            <span>TALK TO AN ATTORNEY NOW 555-555-555</span>
          </span>
        </div>
      </nav>
    </header>
  );
};
