import { SectionService } from './section-service';
import { SectionTitle } from './section-title';

const bankruptcyCases = [
  {
    title: '“Automatic Stay”;',
    desc: 'The bankruptcy <span class="italic">“automatic stay”</span>, <br class="max-lg:hidden" />immediately stops all collection activity and protects <br class="max-lg:hidden" />the debtor and from creditors.',
  },
  {
    title: '“Discharge Order”;',
    desc: 'A bankruptcy <span class="italic">“discharge”</span> gives <br class="max-lg:hidden" />permanent legal forgiveness for the debtor’s debts as listed in the schedules of the bankruptcy case, upon <br class="max-lg:hidden" />completion of the case.',
  },
  {
    title: '“Disclosure”;',
    desc: 'The broad <span class="italic">disclosure</span> by the debtor of its finances - assets, liabilities, income and expenses - to allow for administration of the case.',
  },
  {
    title: '“Fresh Start ”;',
    desc: 'At the conclusion of the bankruptcy case an honest and cooperative debtor is supposed to get a <span class="italic">“fresh start”</span> financially.',
  },
];
export const Bankruptcy = () => {
  return (
    <div className='pb-20 lg:pb-72'>
      <SectionService
        id='bankruptcy'
        image='/images/services/bankruptcy.webp'
        overlayImage={
          <SectionTitle className='lg:top-[60%]'>
            How Can <br className='max-lg:hidden' />
            “Bankruptcy” <br className='max-lg:hidden' />
            Resolve Debt?
          </SectionTitle>
        }
      >
        <div className='container-center text-sm lg:text-base'>
          <div className='lg:columns-2 lg:gap-8'>
            <div className='hidden lg:block lg:mt-44' />
            <h3 className='text-blue font-bold'>
              How Can <span className='italic'>“Bankruptcy”</span> Resolve Debt?
            </h3>
            <p className='mt-3'>
              There are several different kinds of bankruptcy cases filed under
              federal bankruptcy law, which is a set of codified statues under
              title 11 of the United States Code. The goal of bankruptcy law is
              to allow an orderly resolution of debt, where the borrower is
              having difficulty paying part of, or{' '}
              <br className='max-lg:hidden' />
              all of, the debt. There are several unifying concepts in
              <br className='max-lg:hidden' />
              bankruptcy cases:
            </p>
            <ul>
              {bankruptcyCases.map((caseItem) => (
                <li
                  key={caseItem.title}
                  className='relative flex items-baseline gap-2'
                >
                  <span className='size-2.5 lg:size-3.5 bg-dark-green rounded-full inline-block shrink-0' />
                  <span>
                    <span className='font-bold text-dark-green italic'>
                      {caseItem.title}{' '}
                    </span>
                    <span dangerouslySetInnerHTML={{ __html: caseItem.desc }} />
                  </span>
                </li>
              ))}
            </ul>

            <div className='space-y-1 [&_h4]:underline [&_h4]:text-blue [&_h4]:font-bold [&_h4]:underline-offset-3'>
              <p className='font-bold italic text-dark-green'>
                Our Law Of fice can assess potential clients for different kinds
                of debt relief, under the several chapters of the Bankruptcy
                Code, as follows:
              </p>
              <div>
                <h4>Chapter 7 of the Bankruptcy Code</h4>
                <p>
                  Chapter 7 eliminates or discharges unsecured debt such as
                  credit card debt and personal loans. To proceed under Chapter
                  7, a debtor would need to qualify under “means”, budget and
                  asset tests. “Bankruptcy planning” is often critical to
                  Chapter success.
                </p>
              </div>
              <div>
                <h4>Chapter 13 the Bankruptcy Code</h4>
                <p>
                  Chapter 13 allows an individual debtor to offer a plan, up to
                  five (5) years in duration, that allows them to reorganize
                  their debts. The ultimate goal in Chapter 13 is the
                  confirmation of the Chapter 13 plan but Chapter 13 also has
                  more limited collateral benefits, in allowing a stay of
                  creditors.
                </p>
              </div>
              <div>
                <h4>Chapter 11 and Subchapter 5 of the Bankruptcy Code</h4>
                <p>
                  Chapter 11 is usually filed by businesses, or individuals with
                  higher amounts of debt, to reorganize their finances. Sub-
                  chapter 5 , can be filed by smaller businesses .The ultimate
                  goal in Chapter 11 and Subchapter 5 is “confirmation” of a
                  plan of reorganization, but they also have more limited
                  collateral benefits in allowing a stay of creditors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionService>
    </div>
  );
};
