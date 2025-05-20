import { Footer } from '@/components/ui/footer';
import { Clients } from '@/features/home/clients';
import { Hero } from '@/features/home/hero';
import { Legal } from '@/features/home/legal';
import { Service } from '@/features/home/service';
import { WhyChoose } from '@/features/home/why-choose';

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChoose />
      <Clients />
      <Service />
      <Legal />
      <Footer />
    </>
  );
}
