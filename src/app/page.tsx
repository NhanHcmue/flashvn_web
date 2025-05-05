import HeroSection from '@/components/HeroSection';
import ImpactSection from '@/components/ImpactSection';
import SponsorsAndPartners from '@/components/SponsorsAndPartners';
import UpdateSection from '@/components/UpdateSection';
import SolutionsSection from '@/components/SolutionsSection';

export const metadata = {
  title: 'FLASH VN - Building Future-Ready Communities',
  description: 'Empowering individuals and organizations with cutting-edge solutions and sustainable development programs.',
};

export default function Home() {
  return (
    <div className="bg-white">
      <HeroSection />
      <SolutionsSection />
      <ImpactSection />
      <div className="h-0.5 bg-black my-6" />
      <SponsorsAndPartners />
      <div className="h-0.5 bg-black my-6" />
      <UpdateSection />
    </div>
  );
}
