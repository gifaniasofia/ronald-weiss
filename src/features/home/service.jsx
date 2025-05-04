const services = [
  'tusdaest, similli tasped quidele stiatur suntem r',
  'orepediatusa sequae none. rehendalupta tusdaest, similli tasped quidele stiatur suntem ratio. Agnimai',
  'orepediatusa sequae none. rehenda eperis perem sam, ut',
  'none. rehendalupta tusdaest, similli tasped quidele stiatur suntem ratio. Agnimai orepediatusa se',
  'orepediatusa sequae none. rehenda eperis perem sa',
  'none. rehendalupta tusdaest, similli tasped quidele stiatur suntem ratio. Agnimai orepediatusa se',
];

const solutions = [
  'BANKRUPTCY',
  'NEGOTIATIONS',
  'LITIGATION',
  'LOAN MODIFICATION',
];

export const Service = () => {
  return (
    <div className='relative'>
      <div className='container-center relative py-10 z-40'>
        <div className='space-y-3 max-w-xl'>
          <h2 className='font-bold text-2xl lg:text-4xl'>
            What Personalized
            <br />
            Service Means To You
          </h2>
          <ul className='list-disc marker:text-light-green list-outside ml-4'>
            {services.map((service, serviceIdx) => (
              <li key={serviceIdx} className='text-sm lg:text-base'>
                {service}
              </li>
            ))}
          </ul>
        </div>

        <div className='max-w-4xl mt-16'>
          <h2 className='mb-3 font-bold text-2xl lg:text-4xl'>
            Our Approach: "Legal Debt Solutions"
          </h2>
          <div className='space-y-6 text-sm lg:text-base'>
            <p>
              “Legal debt solutions” are debt solutions that integrate legal
              methods and tools into the debt resolution process. By
              incorporating the threat, and/or the actual use, of legal
              procedure and substance, legal debt solutions, are a
            </p>
            <p>
              strategically powerful approach for debt resolution, and are used
              by our Law Office, the Law Office of Ronald D. Weiss, P.C. ( the
              “Law Office”). The legal debt solutions, utilized by our law
              office, are varied and include and encompass
            </p>
          </div>
          <div className='mt-12 grid sm:grid-cols-2 gap-4'>
            {solutions.map((solution) => (
              <div
                key={solution}
                className='bg-light-green text-center text-base md:text-2xl flex items-center justify-center rounded-full py-2 px-4 font-medium'
              >
                {solution}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
