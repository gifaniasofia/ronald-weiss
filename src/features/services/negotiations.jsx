import { SectionService } from './section-service';
import { SectionTitle } from './section-title';

const approachList = [
  { title: 'Mutuality', desc: 'for the debtor and creditor.' },
  {
    title: 'Leverage',
    desc: 'in negotiations, based on bankruptcy <br class="max-lg:hidden" />and litigation alternatives.',
  },
  { title: 'Principal Reduction', desc: 'and interest elimination.' },
  {
    title: 'Engage All Creditors',
    desc: 'from the beginning, and on an ongoing basis.',
  },
  {
    title: 'Exceed Normal Compromise Ranges',
    desc: 'typically offered <br class="max-lg:hidden" />by creditors.',
  },
  { title: 'Always an Option', desc: 'especially during or after litigation.' },
  { title: 'More Affordable', desc: 'to reach negotiated resolutions.' },
  { title: 'High Level Negotiators', desc: 'make a huge difference.' },
  {
    title: 'Customized Approach',
    desc: 'for every client, for every <br class="max-lg:hidden" />file and for every debt.',
  },
];

export const Negotiations = () => {
  return (
    <div className='pb-20 lg:pb-72'>
      <SectionService
        id='negotiations'
        image='/images/services/negotiations-2.webp'
        overlayImage={
          <SectionTitle>
            How Can <br className='max-lg:hidden' />
            “Negotiations” <br className='max-lg:hidden' />
            Legally <br className='max-lg:hidden' />
            Resolve Debt?
          </SectionTitle>
        }
      >
        <div className='container-center text-sm lg:text-base'>
          <div className='lg:left-[45%] relative lg:w-[55%]'>
            <p>
              Negotiation of debt, through our Law Office, is qualitatively
              better — in approach, methodology, resources, and strategy — than
              negotiation services commonly marketed to persons experiencing
              financial hardship. Our improved approach involves:
            </p>
            <ul>
              {approachList.map((approach) => (
                <li
                  key={approach.title}
                  className='relative flex items-baseline gap-2'
                >
                  <span className='size-2.5 lg:size-3.5 bg-dark-green rounded-full inline-block shrink-0' />
                  <span>
                    <span className='font-bold text-dark-green italic'>
                      {approach.title}{' '}
                    </span>
                    <span dangerouslySetInnerHTML={{ __html: approach.desc }} />
                  </span>
                </li>
              ))}
            </ul>
            <p className='font-bold text-dark-green italic'>
              Our Law Office Negotiates Almost Any Kind Of Debt.
            </p>
          </div>
        </div>
      </SectionService>
    </div>
  );
};
