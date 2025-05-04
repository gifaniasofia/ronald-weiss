import { forwardRef } from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';

import { cn } from '@/lib/utils';

const Slider = forwardRef(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      'relative flex w-full touch-none select-none items-center',
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className='relative h-1.5 w-full grow overflow-hidden rounded-full bg-white/60'>
      <SliderPrimitive.Range className='absolute h-full bg-white' />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className='block h-5 w-5 rounded-full border border-light-green bg-light-green shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50' />
  </SliderPrimitive.Root>
));

Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
