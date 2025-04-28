import Image from 'next/image';

export default function TeamSection() {
  const teamMembers = [
    {
      name: 'Mr. Khang LÊ',
      role: 'Founder/ Project Lead',
      description: 'Google for Edu Certified Trainer\nYSEALI Professional Fellows',
      image: '/images/team/khang.jpg',
    },
    {
      name: 'Mr. Kiệt CHANG',
      role: 'Operation Manager',
      description: 'Coordinator of Vietnam School of Development Operation Lead - Books in the City\nYSEALI Professional Fellows',
      image: '/images/team/kiet.jpg',
    },
    {
      name: 'Mr. Kiệt CHANG',
      role: 'Operation Manager',
      description: 'Coordinator of Vietnam School of Development Operation Lead - Books in the City\nYSEALI Professional Fellows',
      image: '/images/team/kiet.jpg',
    },
  ];

  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold text-black mb-4">Meet our team 🎓💻</h2>
      <p className="text-gray-700 mb-8">
        We&apos;re a small team of educators with big dreams—using tech to empower learners and close the digital gap.
      </p>
      <h3 className="text-xl font-semibold text-black mb-6">🌟 Core team 🌟</h3>
      <div className="grid md:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="text-center">
            <div className="relative w-32 h-32 mx-auto mb-4">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <h4 className="text-lg font-bold text-black">{member.name}</h4>
            <p className="inline-block border border-black rounded-full px-4 py-1 text-center text-black font-bold">{member.role}</p>
            <p className="text-sm text-gray-700 whitespace-pre-line">{member.description}</p>
          </div>
        ))}
      </div>
      <p className="text-gray-700 mt-8">
        💪💪💪 With a <span className="font-bold">flexible, project-based model</span>, we welcome talented interns to grow with us while creating real impact.
      </p>
    </section>
  );
}