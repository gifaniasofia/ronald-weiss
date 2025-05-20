import { Bankruptcy } from '@/features/services/bankruptcy';
import { Litigation } from '@/features/services/litigation';
import { LoanModif } from '@/features/services/loan-modif';
import { Negotiations } from '@/features/services/negotiations';

export default function Services() {
  return (
    <div className='font-light'>
      <Litigation />
      <Bankruptcy />
      <Negotiations />
      <LoanModif />
    </div>
  );
}
