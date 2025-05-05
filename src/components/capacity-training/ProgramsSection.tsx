"use client";

import Image from 'next/image';
import { useState } from 'react';

function ProgramModal({ program, onClose }: { 
  program: { 
    title: string; 
    date: string; 
    link: string;
    description?: string;
    image?: string;
  } | null; 
  onClose: () => void 
}) {
  if (!program) return null;

  return (
    <div className="fixed inset-0 bg-white text-black flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-6 max-w-6xl border w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold">{program.title}</h3>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            {program.description && (
              <div className="whitespace-pre-line text-gray-700">
                {program.description}
              </div>
            )}
          </div>
          {program.image && (
            <div>
              <Image 
                src={program.image}
                alt={program.title}
                width={600}
                height={400}
                className="rounded-lg object-cover w-full h-auto"
              />
            </div>
          )}
        </div>
      </div>
    </div>

  );
}

function ProgramColumn({ 
  title, 
  programs 
}: { 
  title: string; 
  programs: { title: string; date: string; link: string; description?: string; image?: string }[] 
}) {
  const [selectedProgram, setSelectedProgram] = useState<{ 
    title: string; 
    date: string; 
    link: string;
    description?: string;
    image?: string;
  } | null>(null);

  return (
    <div>
      <h3 className="text-xl font-bold text-black mb-4 md:hidden">{title}</h3>
      <div className="space-y-4">
        {programs.map((program, index) => (
          <div key={index} className="border border-gray-300 rounded-lg p-4 bg-white shadow-sm">
            <h4 className="text-lg font-bold text-black mb-2">{program.title}</h4>
            <p className="text-sm text-gray-600 mb-4">Date: {program.date}</p>
            <button
              onClick={() => setSelectedProgram(program)}
              className="inline-block border border-black rounded-full px-4 py-2 text-sm text-black hover:bg-[#FFCF24] hover:border-2 transition-colors"
            >
              Read more
            </button>
          </div>
        ))}
      </div>
      
      <ProgramModal 
        program={selectedProgram} 
        onClose={() => setSelectedProgram(null)} 
      />
    </div>
  );
}

export default function ProgramsSection() {
  const programs = {
    educator: [
      {
        title: '[Seminar] IT Applications in Teaching for the Digital Age',
        date: 'Mar 19 2024',
        link: '#',
        description: `Transform your teaching methods with cutting-edge technology tools designed for modern classrooms. Learn how to integrate digital solutions to enhance student engagement and learning outcomes.`,
        image: '/images/programs/teaching-tech.jpg'
      },
      {
        title: '[Workshop] Tech for Teach Lap Vo 2 High School, Dong Thap',
        date: 'Sep 23 2023',
        link: '#',
        description: `Hands-on workshop for educators at Lap Vo 2 High School focusing on practical technology applications for daily teaching activities.`,
        image: '/images/programs/workshop-class.jpg'
      },
      {
        title: '[Workshop] Tech for Teach Vinh Thanh Town Sec. School Can Tho',
        date: 'Sep 7 2023',
        link: '#',
      },
      {
        title: '[Workshop] Tech for Teach Vo Van Kiet Gifted High School Vinh Long',
        date: 'Apr 10 2025',
        link: '#',
      },
      {
        title: '[Workshop] Tech for Teach Luong Tam 1 Primary School Hau Giang',
        date: 'Aug 2023',
        link: '#',
      },
      {
        title: '[Workshop] Tech for Teach Nguyen Quang Dieu High School Dong Thap',
        date: 'Dec 13 2023',
        link: '#',
      },
      {
        title: '[Workshop] Tech for Teach Dept. of Foreign Languages An Giang University (AGU)',
        date: 'Nov 2023',
        link: '#',
      },
      {
        title: '[Workshop] The Student Council of the Faculty of Chemistry HCMC University of Education',
        date: 'Apr 14 2023',
        link: '#',
      },
      {
        title: '[Workshop] Tech for Teach Tan Hiep High School Kien Giang',
        date: 'Mar 25 2023',
        link: '#',
      },
      {
        title: '[Workshop] Tech for Teach O Mon Dept. of Education Can Tho',
        date: 'Mar 25 2023',
        link: '#',
      },
      {
        title: '[Workshop] Tech for Teach Vinh Thanh Dept. of Education Can Tho',
        date: 'Mar 29 2022',
        link: '#',
      },
      {
        title: '[Workshop] Tech for Teach Chau Thanh Town High School Soc Trang',
        date: 'Mar 29 2022',
        link: '#',
      },
    ],
    youth: [
      {
        title: '[Workshop] "Applications of AI in scientific research" HCMC University of Education',
        date: 'Apr 19 2025',
        link: '#',
        description: `😍 "Love your fellow gourds as you love your own vines" But… how can we master the use of AI?\n❓ Are you struggling to apply AI in your scientific research?\n❓ Are you wondering how to use AI effectively and accurately?\n✨ Join us to equip yourself with essential digital skills in the special topic "Applications of AI in Scientific Research", hosted by the Faculty of Chemistry Youth Union.\n✨ Get updated instantly and gain valuable knowledge from our amazing guest speaker!\n🌟 Guest Speaker: Mr. Lê Nguyên Khang – Alumni of the 40th cohort, Faculty of Chemistry; Google for Education Trainer; Founder of the social enterprise FLASH VN.\n⌛ Time: 6:00 PM, Saturday, April 19, 2025\n🏫 Venue: Lecture Hall A.113, Campus at 280 An Dương Vương\n💁 Participants: All members of the Faculty of Chemistry Youth Union\n👉 Hurry and register for the workshop via this link: http://tracuu.hcmue.edu.vn/HH_NCKH-cung-AI or scan the QR code below.\n👋 Don't forget to bring internet-connected devices so you can experience AI tools with us!`,
        image: '/images/programs/ai-research.jpg'
      },
      {
        title: '[Workshop] Digital Safety in the AI Era: Raising Awareness and Building Self-Defense Skills NTTU',
        date: 'Apr 10 2025',
        link: '#',
      },
      {
        title: '[Workshop] Digital Skills Enhancement: ChatGPT & Its Application in Learning Korean HCMC University of Education',
        date: 'Mar 17 2025',
        link: '#',
      },
      {
        title: '[Workshop] Digital Skills Training Series for Youth, Student Council of HCMC IT Dept.',
        date: 'Feb 2025',
        link: '#',
      },
      {
        title: 'Enhancing AI Literacy for the Communist youth, leaders to boost productivity (Nhà Bè & Hóc Môn District)',
        date: 'Mar 1 & 15 2025',
        link: '#',
      },
      {
        title: '[Workshop] Leadership in Society 5.0 – 18&21.11.2024 ASEF Multiplier project',
        date: 'Nov 2024',
        link: '#',
      },
      {
        title: '[Workshop] Youth’s Responsibilities in the Digital Age',
        date: 'Apr 17 2023',
        link: '#',
      },
      {
        title: '[Workshop] CYBERSECURITY FSchool Can Tho',
        date: 'Dec 14 2023',
        link: '#',
      },
      {
        title: '[Workshop] READIGI – Effective Reading with Technology - Books in the City (NPO)',
        date: 'Nov 12 2023',
        link: '#',
      },
      {
        title: '[Workshop] STU-DIGITAL – Study Effectively with Technology HCMC University of Education',
        date: 'Nov 12 2023',
        link: '#',
      },
    ],
    digcomp: [
      {
        title: '[Webinar] AI Playground x Rewrite my Life',
        date: 'Dec 20 & 21, 2023',
        link: '#',
        description: `Interactive webinar exploring how AI can transform your personal and professional life. Includes live demonstrations and practical exercises.`,
        image: '/images/programs/ai-webinar.jpg'
      },
      {
        title: '[Workshop] READIGI - Study effectively with technology Books in the City',
        date: 'Nov 12 2023',
        link: '#',
      }
    ],
  };

  return (
    <>
      <div className="bg-blue-100 py-16">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-center text-center">
            <div className="flex flex-col items-center">
              <Image
                src="/images/icons/educator.png"
                alt="FLASH4 Educator"
                width={200}
                height={200}
                className="mb-2"
              />
              <h3 className="text-lg font-bold text-black">FLASH4{' '}<span className="text-black bg-[#FFCF24] px-2 py-2 rounded-2xl">
                Educator
                </span></h3>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/images/icons/youth.png"
                alt="FLASH4 Youth"
                width={200}
                height={200}
                className="mb-2"
              />
              <h3 className="text-lg font-bold text-black">FLASH4{' '}<span className="text-black bg-[#3F99E9] px-2 py-2 rounded-2xl">
                Youth
                </span></h3>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/images/icons/digcomp.png"
                alt="FLASH4 Digcomp"
                width={200}
                height={200}
                className="mb-2"
              />
              <h3 className="text-lg font-bold text-black">FLASH4{' '}<span className="text-black bg-[#E65A00] px-2 py-2 rounded-2xl">
                Digcomp
                </span></h3>
            </div>
          </div>
        </div>
      </div>
      <section className="container mx-auto px-4 pb-5">
        <div className="grid md:grid-cols-3 gap-8 mt-12 space-y-8 md:space-y-0">
          <ProgramColumn title="FLASH4 Educator" programs={programs.educator} />
          <ProgramColumn title="FLASH4 Youth" programs={programs.youth} />
          <ProgramColumn title="FLASH4 Digcomp" programs={programs.digcomp} />
        </div>
      </section>
    </>
  );
}