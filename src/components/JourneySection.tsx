'use client';

import Image from 'next/image';
import { useState } from 'react';

interface JourneyStep {
  year: string;
  title: string;
  content: string;
  icon: string;
  illustration: string;
}
const journeySteps: JourneyStep[] = [
  {
    year: '2021',
    title: 'The First Spark',
    content: 'FLASH VN, then known as the FLASH initiative, was born from a small but heartfelt idea at the YSEALI Summit\'s Project Pitch competition. The concept was simple yet deeply meaningful: to empower Vietnamese youth through digital literacy. Concerned about by the pandemic, winning 3rd place and a $5,000 grant from Arizona State University marked the beginning of our story. With support from the US Embassy in Vietnam, YSEALI Network, and NSE Making Innovative Educators, we brought the idea to life and our first training sessions in both Vietnam and abroad.',
    icon: '/images/journey/spark.png',
    illustration: '/images/journey/2021.jpg'
  },
  {
    year: '2022',
    title: 'Taking Root',
    content: 'Encouraged by strong feedback, we expanded our work across the Mekong Delta. Local educators, departments throughout the area began to take notice. Our impact grew significantly, more than the U.S. Embassy Summit in Ho Chi Minh City. Phase 2 launched in six provinces. We also forged crucial educational bonds and fortified our network with more schools, ultimately reaching around 650 teachers and school leaders.',
    icon: '/images/journey/root.png',
    illustration: '/images/journey/2022.jpg'
  },
  {
    year: '2023',
    title: 'Becoming a Social Enterprise',
    content: 'To strengthen our foundation and reach, we officially registered as FLASH VN Social Enterprise LLC in July. This change enabled us to receive new funding, find university interns, and collaborate more deeply with nonprofits and educational networks. Our work expanded to include digital literacy training, educational content and toolkits tailored to different learning environments.',
    icon: '/images/journey/enterprise.png',
    illustration: '/images/journey/2023.jpg'
  },
  {
    year: '2024',
    title: 'Reaching Wider Communities',
    content: 'With the motto "Building Future-ready Communities", we expanded our focus to serve more diverse groups of learners and educators. We developed innovative, low-tech solutions like the VN-Tiny Board game to teach learners with limited digital access. Through partnerships with schools and organizations, we helped develop grassroots partnerships to promote digital and media literacy.',
    icon: '/images/journey/community.png',
    illustration: '/images/journey/2024.jpg'
  },
  {
    year: '2025',
    title: 'Moving Forward with Purpose',
    content: 'Looking ahead, FLASH VN is committed to:\n• Strengthening digital literacy programs for teachers and high school students\n• Developing inclusive digital competency programs for diverse audiences\n• Co-creating adaptable educational toolkits and lesson models\n\nWe believe that meaningful change begins with small steps—through every teacher trained, every learner empowered, and every story shared. Stay here for the journey, growing hand-in-hand with our communities.',
    icon: '/images/journey/purpose.png',
    illustration: '/images/journey/2025.jpg'
  }
];



export default function JourneySection() {
  const [expandedIndices, setExpandedIndices] = useState<number[]>([]);

  const toggleStep = (index: number) => {
    if (expandedIndices.includes(index)) {
      setExpandedIndices(expandedIndices.filter(i => i !== index));
    } else {
      setExpandedIndices([...expandedIndices, index]);
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-black mb-12">Our journey</h2>
      
      <div className="relative">
        <div className="absolute left-[39px] top-0 bottom-0 w-0.5 bg-black" />
        
        <div className="space-y-8">
          {journeySteps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 z-10 bg-white border border-black rounded-full px-4 py-2 text-center text-black font-bold">
                  {step.year}
                </div>
                <button
                  onClick={() => toggleStep(index)}
                  className="flex-1 text-left hover:bg-gray-50 p-4 rounded-lg transition-colors"
                >
                  <h3 className="text-lg font-semibold text-black">{step.title}</h3>
                </button>
              </div>
              {expandedIndices.includes(index) && (
                <div className="mt-4 ml-8 pl-8">
                  <div className="grid md:grid-cols-2 gap-8 animate-fadeIn">
                    <div>
                      <p className="text-black whitespace-pre-line">{step.content}</p>
                    </div>
                    <div className="relative aspect-video">
                      <Image
                        src={step.illustration}
                        alt={`${step.title} illustration`}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
