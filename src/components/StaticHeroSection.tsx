import Image from 'next/image';

export default function StaticHeroSection() {
  return (
    <div className="relative w-full min-h-[600px] bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center py-10">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-black">
              Building a{' '}
              <span className="text-blue-600">#future-ready</span> community
              eliminating inequalities in education{' '}
              <span className="text-blue-600">through technology</span>
            </h1>
          </div>
          <div className="relative h-[400px] w-full">
            <Image
              src="/images/banner/banner1.jpg"
              alt="Building a future-ready community"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}