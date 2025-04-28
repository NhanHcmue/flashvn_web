import StaticHeroSection from '@/components/StaticHeroSection';
import Section from '@/components/Section';
import Footer from '@/components/Footer';
import JourneySection from '@/components/JourneySection';
import TeamSection from '@/components/TeamSection';

export const metadata = {
  title: 'About Us - FLASH VN',
  description: 'Learn about our journey in empowering Vietnamese youth through digital literacy.',
};

export default function AboutUs() {
  return (
    <main className="min-h-screen bg-white">
      <StaticHeroSection />
      <div className="h-0.5 bg-black my-6" />
      <Section title="">
        <JourneySection />
      </Section>
      <div className="h-0.5 bg-black my-6" />
      <Section title="">
        <TeamSection />
      </Section>
      <Footer />
    </main>
  );
}