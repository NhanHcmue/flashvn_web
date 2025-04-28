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
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="space-y-8">
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
      <div className="relative aspect-[4/3]">
        <Image
          src="/images/asean-map.png"
          alt="ASEAN Map"
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
} 