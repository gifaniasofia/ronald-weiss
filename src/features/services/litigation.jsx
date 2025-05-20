import { SectionService } from './section-service';
import { SectionTitle } from './section-title';

const clientIssues = [
  '“Jurisdictional issues”;',
  '“Procedural defects”',
  '“Discovery issues',
  '“Evidentiary defects”; AND/OR',
  '“Factual and legal errors”.',
];

const advantages = [
  'Time and leverage;',
  'Avoid default;',
  'Create potential risk/expense for creditor;',
  'Manage discovery and motion;',
  'Revisit unfair decisions.',
];

export const Litigation = () => {
  const renderList = (list) => {
    return (
      <ul>
        {list.map((item) => (
          <li key={item} className='relative flex items-baseline gap-2'>
            <span className='size-2.5 lg:size-3.5 bg-dark-green rounded-full inline-block shrink-0' />

            <span className='text-dark-green font-bold italic'>{item}</span>
          </li>
        ))}
      </ul>
    );
  };
  return (
    <div className='pb-20 lg:pb-72'>
      <SectionService
        id='litigation'
        image='/images/services/litigation.webp'
        classNames={{
          navbar:
            'max-lg:flex max-lg:relative max-sm:top-0 max-lg:top-4 max-sm:mb-5 max-lg:mb-12 max-lg:py-2',
        }}
        overlayImage={
          <SectionTitle>
            How Can <br className='max-lg:hidden' />
            “Litigation” <br className='max-lg:hidden' />
            Resolve Debt?
          </SectionTitle>
        }
      >
        <div className='container-center text-sm lg:text-base'>
          <div className='lg:left-[45%] relative lg:w-[55%]'>
            <p>
              Often collection law firms, who legally pursue debt on behalf of
              creditors, assume that their position is certain and beyond
              dispute. However, in court, anything can be litigated. Therefore,
              even with what seems like undisputed debt, once subjected to
              discovery and legal evidentiary rules, the creditor is surprised
              and often lacks proof. These issues that can become questions in
              every litigation, which we review, assess, and potentially raise
              on behalf of our clients include:
            </p>
            {renderList(clientIssues)}
            <p className='mt-6'>
              The issues above are all potential areas of dispute that help us
              obtain litigation advantages for our clients In order to help
              resolve their debts. Our goals in litigation defense, are
              strategic and tactical advantages to achieve the following:
            </p>
            {renderList(advantages)}
            <p>
              Our Law Office litigates many matters including: foreclosure,
              defense, landlord-tenant law, real estate litigation, defense of
              commercial and/or consumer debt collection.
            </p>
          </div>
        </div>
      </SectionService>
    </div>
  );
};
