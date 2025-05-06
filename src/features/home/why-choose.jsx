import { useState } from 'react';
import { StarIcon } from '@heroicons/react/24/solid';

import { Slider } from '@/components/ui/slider';
import { formatNumber } from '@/lib/utils';

const financialFreedomList = [
  {
    name: 'Stop creditor calls and letters',
    image: '/images/forbidden-call.webp',
  },
  {
    name: 'Keep your assets and wages safe',
    image: '/images/safe-guard.webp',
  },
  {
    name: 'Start <span class="font-bold">100% fresh</span>, without old debts weighing you down',
    image: '/images/chart.webp',
  },
  {
    name: 'Set yourself up to build your <span class="font-bold">long term credit</span>',
    image: '/images/card.webp',
  },
];

const ratings = [
  '/images/avvo-rating.webp',
  '/images/revenue.webp',
  '/images/accreditation.webp',
  '/images/google-reviews.webp',
];

export const WhyChoose = () => {
  const [value, setValue] = useState([25]);

  return (
    <div className='relative'>
      <div className='relative overflow-hidden w-full lg:-my-[25%] z-10 bg-amber-500'>
        <div className='flex max-md:flex-col md:grid md:grid-cols-2 size-full'>
          <div className='bg-white size-full lg:py-[50%]'>
            <div className='flex flex-col items-center gap-3 text-sm lg:text-base px-4 py-10 lg:px-10'>
              <div className='flex items-center gap-1'>
                {Array.from(new Array(5)).map((_, i) => (
                  <StarIcon key={i} className='text-light-green size-6' />
                ))}
              </div>
              <h2 className='font-bold text-2xl lg:text-4xl'>Why choose us?</h2>
              <p>
                Equam ad modit autatem inum quis site estiunt latum sit laborem.
                Elest vollorro tem. Ga. Ut autat audipsamet la voluptas eaque
                viducipide rehenda eperis perem sam, ut dolupta tusdaest,
                similli tasped quidele stiatur suntem ratio. Agnimai
                orepediatusa sequae none.
                <br />
                <span className='font-bold'>- Amanda B</span>
              </p>
              <p>
                Equam ad modit autatem inum quis site estiunt latum sit laborem.
                Elest vollorro tem. Ga. Ut autat audipsamet la voluptas eaque
                viducipide rehenda eperis perem sam, ut dolupta tusdaest,
                similli tasped quidele stiatur suntem ratio. Agnimai
                orepediatusa sequae none. rehenda eperis perem sam, ut dolupta
                tusdaest, similli tasped quidele stiatur suntem ratio. Agnimai
                orepediatusa sequae none.
                <br />
                <span className='font-bold'>- Michael A</span>
              </p>
              <p>
                Rehenda eperis perem sam, ut dolupta tusdaest, similli tasped
                quidele stiatur suntem ratio. Agnimai orepediatusa sequae none.
                rehenda eperis perem sam, ut dolupta tusdaest, similli tasped
                quidele stiatur suntem ratio. Agnimai orepediatusa sequae none.
                ratio. Agnimai orepediatusa sequae none. rehenda eperis perem
                sam, ut dolupta tusdaest, similli tasped quidele stiatur suntem
                ratio. Agnimai orepediatusa sequaesuntem ratio. Agnim
                <br />
                <span className='font-bold'>Michael</span>
              </p>
            </div>
          </div>
          <div className='size-full md:grid md:grid-rows-2 bg-light-green lg:pb-[20%]'>
            <div className='size-full bg-blue text-white lg:pt-[25%] lg:[clip-path:polygon(0_0,_100%_0,_100%_75%,_0%_100%)]'>
              <div className='space-y-6 px-4 py-10 lg:px-10 font-semibold flex flex-col items-center text-center'>
                <h3 className='text-xl lg:text-3xl'>
                  Get a FREE, Personalized Bankruptcy Evaluation
                </h3>
                <div className='flex flex-col items-center'>
                  <p className='text-lg'>How Much Debt Do You Owe?</p>
                  <p className='text-2xl'>{formatNumber(value?.[0] * 1000)}</p>
                </div>
                <div className='w-full max-w-sm'>
                  <Slider
                    value={value}
                    max={100}
                    step={1}
                    onValueChange={setValue}
                  />
                </div>
                <button className='mt-4 rounded-lg bg-light-green text-black px-16 py-2 text-sm lg:text-base'>
                  CONTINUE
                </button>
              </div>
            </div>
            <div className='size-full bg-light-green lg:-mt-[5%]'>
              <div className='flex flex-col items-center text-center px-4 py-10 lg:px-10'>
                <h3 className='text-xl lg:text-3xl font-semibold max-w-[400px] mx-auto'>
                  Financial Freedom
                  <br />
                  is Within Reach
                </h3>
                <div className='mt-6 grid grid-cols-2 gap-4 max-w-md mx-auto'>
                  {financialFreedomList.map((item, index) => (
                    <div
                      key={index}
                      className='flex flex-col items-center text-center space-y-2'
                    >
                      <img src={item.image} alt='' className='h-14 w-auto' />
                      <p
                        dangerouslySetInnerHTML={{ __html: item.name }}
                        className='max-w-[170px] mx-auto'
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='relative isolate overflow-hidden z-20 w-full lg:[clip-path:polygon(0_30%,_100%_0,_100%_70%,_0%_100%)] lg:-mb-[14%]'>
        <img
          src='/images/choose-us.webp'
          alt=''
          className='h-auto w-full object-cover'
        />
      </div>

      <div className='w-full bg-white max-lg:py-20 lg:h-[619px] relative lg:-mb-[9%] z-30 inset-x-0 transform skew-y-[-10deg]'>
        <div className='transform skew-y-[10deg]'>
          <div className='flex max-md:flex-col gap-10 items-center md:justify-between max-w-4xl xl:max-w-5xl mx-auto w-full'>
            <h2 className='text-black text-3xl lg:text-4xl xl:text-5xl text-center font-semibold lg:pt-65'>
              We Deliver
              <br />
              Results
              <br />
              To Our Clients,
              <br />
              And It Shows
            </h2>

            <div className='relative'>
              <div className='grid grid-cols-2 gap-4'>
                {ratings.map((src, srcIdx) => (
                  <img
                    key={srcIdx}
                    src={src}
                    alt=''
                    className='size-40 xl:size-50'
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
