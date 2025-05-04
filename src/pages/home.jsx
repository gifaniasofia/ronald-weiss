import { Clients } from '@/features/home/clients';
import { Hero } from '@/features/home/hero';
import { Legal } from '@/features/home/legal';
import { Service } from '@/features/home/service';
import { WhyChoose } from '@/features/home/why-choose';

export default function Home() {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <WhyChoose />
      <Clients />
      <Service />
      <Legal />
    </div>
  );
}
