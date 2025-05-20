import { Navbar } from '@/components/ui/navbar';
import { cn } from '@/lib/utils';

export const SectionService = ({
  children,
  image,
  overlayImage,
  classNames,
  id,
}) => {
  return (
    <div>
      <div className={cn('relative lg:-mb-[12%]', classNames?.wrapperImage)}>
        <div className='relative overflow-hidden'>
          <Navbar className={cn('max-lg:hidden', classNames?.navbar)} />

          <svg
            width='100%'
            height='100%'
            viewBox='0 0 3650 2945'
            preserveAspectRatio='xMidYMid meet'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='size-full max-lg:hidden'
          >
            <defs>
              <pattern
                id={`imageFill-${id}`}
                patternUnits='userSpaceOnUse'
                width='3650'
                height='2945'
              >
                <image
                  href={image}
                  x='0'
                  y='0'
                  width='3650'
                  height='2945'
                  preserveAspectRatio='xMidYMid slice'
                />
              </pattern>
            </defs>

            <path
              d='M0.0310691 701.707L1982.42 0.00016685L3649.45 0.0014841L3649.45 1683L0.0762775 2945L0.0310691 701.707Z'
              fill={`url(#imageFill-${id})`}
            />
          </svg>

          <div className='relative isolate lg:hidden overflow-hidden w-full'>
            <img
              src={image}
              alt=''
              className='h-auto w-full object-cover object-top'
            />
          </div>
        </div>
        {overlayImage}
      </div>

      {children}
    </div>
  );
};
