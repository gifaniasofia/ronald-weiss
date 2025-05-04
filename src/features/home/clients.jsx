const ratings = [
  '/images/avvo-rating.webp',
  '/images/revenue.webp',
  '/images/accreditation.webp',
  '/images/google-reviews.webp',
];

export const Clients = () => {
  return (
    <div className='relative'>
      <div className='w-full bg-white max-lg:py-20 relative container-center'>
        <div className='flex max-md:flex-col gap-10 items-center md:justify-between max-w-4xl xl:max-w-5xl mx-auto'>
          <h2 className='text-black text-3xl lg:text-4xl xl:text-5xl text-center font-semibold lg:pt-65'>
            We Deliver
            <br />
            Results
            <br />
            To Our Clients,
            <br />
            And It Shows
          </h2>

          <div className='relative lg:pt-10'>
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

      <div className='relative z-20 w-full lg:-mb-[30%] lg:[clip-path:polygon(0_30%,_100%_0,_100%_70%,_0%_100%)]'>
        <img
          src='/images/clients-1.webp'
          alt=''
          className='h-auto w-full object-cover'
        />
      </div>

      <div className='lg:absolute z-40 lg:top-1/2 lg:inset-x-0 w-full container-center'>
        <div className='max-lg:pt-10 max-lg:pb-13'>
          <div className='max-w-2xl max-lg:mx-auto flex flex-col items-start'>
            <h4 className='text-2xl lg:text-4xl font-semibold text-black lg:text-white text-center max-lg:max-w-xl max-lg:mx-auto'>
              Join The 10,000’s of <br className='max-lg:hidden' />
              Long Island Residents <br className='max-lg:hidden' />
              Who Got A Free, <br className='max-lg:hidden' />
              Personalized Consultation
            </h4>
            <div className='mt-4 lg:mt-8 bg-white space-y-8 p-8 text-sm lg:text-base relative w-full max-lg:shadow-lg lg:w-2/3'>
              <p className='text-justify'>
                tusdaest, similli tasped quidele stiatur suntem ratio. Agnimai
                orepediatusa sequae none. rehenda eperis perem sam, ut dolupta
                tusdaest, similli tasped quidele stiatur suntem ratio. Agnimai
                orepediatusa sequae none. ratio. enda eperis perem sam, ut
                dolupta tusdaest,
              </p>

              <button className='absolute -bottom-3 inset-x-8 py-3 px-4 text-sm lg:text-base font-normal bg-light-green rounded-lg'>
                GET MY FREE CONSULTATION
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full overflow-hidden relative lg:[clip-path:polygon(0_0,_100%_0,_100%_100%,_0_44%)] lg:-mb-[26%]'>
        <img
          src='/images/clients-2.webp'
          alt=''
          className='w-full h-auto object-top object-cover transform scale-x-[-1]'
        />
      </div>
    </div>
  );
};
