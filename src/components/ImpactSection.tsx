import Image from 'next/image';

interface ImpactStat {
  value: string;
  label: string;
}

const impactStats: ImpactStat[] = [
  {
    value: '2,300',
    label: 'beneficiaries'
  },
  {
    value: '32',
    label: 'conducted programs'
  },
  {
    value: '13K+',
    label: 'social media followers'
  }
];

export default function ImpactSection() {
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row gap-12">
        <div className="flex-1 space-y-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Our impact</h2>
          {impactStats.map((stat, index) => (
            <div key={index} className="space-y-1">
              <div className="text-5xl font-bold text-gray-900">
                {stat.value}
              </div>
              <div className="text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
        <div className="relative w-full min-h-[300px] md:min-h-[500px] mx-auto">
          <Image
            src="/images/asean-map.png"
            alt="ASEAN Map"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
