import { cn } from '@/lib/utils';

export const SectionTitle = ({ children, className }) => {
  return (
    <div
      className={cn(
        'max-lg:mb-6 lg:absolute lg:z-40 lg:top-[80%] lg:inset-x-0 w-full container-center',
        className
      )}
    >
      <div className='lg:max-w-2xl'>
        <div className='lg:bg-light-green max-lg:mt-10 lg:p-10 lg:w-fit'>
          <h2 className='text-2xl lg:text-4xl xl:text-6xl/[1.2] font-semibold lg:font-medium'>
            {children}
          </h2>
        </div>
      </div>
    </div>
  );
};
