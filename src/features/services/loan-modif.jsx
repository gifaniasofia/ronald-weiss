import { SectionService } from './section-service';
import { SectionTitle } from './section-title';

export const LoanModif = () => {
  return (
    <div className='pb-20 lg:pb-72'>
      <SectionService
        id='loan'
        image='/images/services/loan.webp'
        overlayImage={
          <SectionTitle>
            How Can <br className='max-lg:hidden' />
            “Loan Modification” <br className='max-lg:hidden' />
            Resolve Debt?
          </SectionTitle>
        }
      >
        <div className='container-center text-sm lg:text-base'>
          <div className='lg:left-[58%] relative lg:w-[42%]'>
            <p>
              usually a mortgage, to incorporate missed payments, into a
              proposed{' '}
              <span className='font-medium text-dark-green'>
                “modification agreement”.
              </span>{' '}
              The new <br className='max-lg:hidden' />
              modification often has better terms - including a lower interest
              rate, a longer term and deferred arrears. Loan{' '}
              <br className='max-lg:hidden' />
              modification is often the main and most promising method of{' '}
              <br className='max-lg:hidden' />
              resolving distressed mortgage loan situations.{' '}
              <br className='max-lg:hidden' />
              However, because secured lenders have discretion as to whether to
              approve a loan modification, the application process can be
              challenging and is often benefited from experienced legal{' '}
              representation
            </p>
          </div>
        </div>
      </SectionService>
    </div>
  );
};
