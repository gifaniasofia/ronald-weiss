export const Legal = () => {
  return (
    <div className='relative lg:-mt-[10%]'>
      <div className='relative z-20 w-full lg:-mb-[30%] lg:[clip-path:polygon(0_30%,_100%_0,_100%_70%,_0%_100%)]'>
        <img
          src='/images/legal-1.webp'
          alt=''
          className='w-full h-auto object-cover'
        />
      </div>
      <div className='w-full overflow-hidden relative lg:[clip-path:polygon(0_0,_100%_0,_100%_100%,_0_44%)] lg:-mb-[26%]'>
        <img
          src='/images/legal-2.webp'
          alt=''
          className='w-full h-auto object-cover object-top'
        />
      </div>
      <div className='container-center relative z-20'>
        <div className='relative flex max-lg:flex-col lg:items-end gap-5 max-w-[930px] max-lg:pt-10'>
          <div className='p-4 lg:p-10 text-sm lg:text-base max-lg:shadow-lg bg-white lg:-mt-30'>
            During a free legal consultation, with a prospective client, our Law
            Office’s attorneys will assess your specific facts, to determine
            which legal debt solution method(s) may be appropriate options to
            deal with your unique situation. The debts that we resolve, through
            these legal debt solution methods, include almost any kind of debt:
            “Unsecured debts”; like credit cards, personal loans, and medical
            bills; “secured debts”; like mortgage arrears, car loans, and
            judgment liens; “business debts”; like commercial leases, business
            loans and disputes over goods and services; “tax debts”; like
            amounts owed on a mortgage, residential lease and/or real estate
            taxes; “government backed loans”, like student loans, SBA loans and
            Covid loans
          </div>
          <h4 className='text-light-green text-3xl/none lg:text-6xl/none font-semibold max-lg:text-center'>
            FREE <br className='max-lg:hidden' />
            LEGAL
            <br />
            CONSULTATION
          </h4>
        </div>

        <div className='mt-20 space-y-6'>
          <h2 className='text-2xl lg:text-4xl font-bold'>
            Why Use Our Law Office To Resolve Debt?
          </h2>
          <p className='text-sm lg:text-base'>
            The staff of Ronald D. Weiss, P.C. has been engaged in legal debt
            solutions since 1993. We offer not just one approach, but usually
            several customized debt solution options for each situation. Our
            staff are very experienced, and are assigned to departments in the
            following areas: negotiation, bankruptcy, litigation and
            modification. The result for you, as a potential client, is an
            informative analysis of your situation in a free legal consultation.
            If you retain What Personalized Service Means To You us, you will
            find our legal services to be excellent and affordable. Visit us at
            one of our convenient law offices on Long Island and in New York
            City. You will see why our motto is:
          </p>
          <h4 className='font-bold text-base'>
            “Our consultations are free, but our legal advice is often
            invaluable.”
          </h4>
        </div>

        <div className='py-6 mt-10 flex flex-col items-center space-y-6 text-center max-w-6xl mx-auto'>
          <h4 className='text-light-green max-sm:leading-none text-2xl lg:text-4xl font-semibold max-w-[680px] mx-auto'>
            Our Firm Has Reduced Hundreds Of Millions Of Dollars Of Debt For
            10,000’s Of NY Residents
          </h4>
          <p className='max-w-[430px] mx-auto'>
            Learn how we can reduce, or even eliminate your debt in a FREE
            consultation with an attorney.
          </p>
          <img src='/images/groups.webp' alt='' className='w-full h-auto' />
          <h5 className='text-xl sm:text-2xl font-semibold max-sm:max-w-[250px] text-white'>
            Talk to an attorney now 555-555-5555
          </h5>
        </div>
      </div>

      <svg
        className='absolute bottom-0 left-0 w-full h-[30%] text-light-green'
        viewBox='0 0 100 100'
        preserveAspectRatio='none'
      >
        <polygon points='0,100 100,0 100,100 0,100' fill='currentColor' />
      </svg>
    </div>
  );
};
