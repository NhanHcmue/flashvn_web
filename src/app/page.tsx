import HeroSection from '@/components/HeroSection';
import Section from '@/components/Section';
import SolutionCard from '@/components/SolutionCard';
import ImpactSection from '@/components/ImpactSection';
import SponsorsAndPartners from '@/components/SponsorsAndPartners';
import UpdateSection from '@/components/UpdateSection';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'FLASH VN - Building Future-Ready Communities',
  description: 'Empowering individuals and organizations with cutting-edge solutions and sustainable development programs.',
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
    <div className="h-0.5 bg-black my-6" />
      <main>
        <Section title="Our solution" >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SolutionCard title="Capacity training" />
            <SolutionCard title="Innovative solution" />
            <SolutionCard title="Social media content" />
          </div>
        </Section>
    <div className="h-0.5 bg-black my-6" />
        <Section title="Our impact" >
          <ImpactSection />
        </Section>
    <div className="h-0.5 bg-black my-6" />
        <Section title="">
          <SponsorsAndPartners />
        </Section>
    <div className="h-0.5 bg-black my-6" />
        <Section title="">
          <UpdateSection />
        </Section>
      </main>
      <Footer />
    </div>
  );
}
