'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  const banners = [
    {
      image: '/images/banner/banner1.jpg',
      alt: 'Students collaborating',
    },
    {
      image: '/images/banner/banner2.jpg',
      alt: 'Empowering educators',
    },
    {
      image: '/images/banner/banner3.jpg',
      alt: 'Inspiring youth',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <div className="relative w-full min-h-[600px] bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center py-10">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-black">
              Building a{' '}
              <span className="text-blue-600">
                #future-ready
              </span>
              {' '}community
            </h1>
            <p className="text-lg text-black max-w-lg">
              By providing digital-capacity training and innovative solution for youth and educators
            </p>
            <div>
              <Link
                href="/what-we-do"
                className="inline-block px-8 py-3 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors rounded-full text-lg font-medium"
              >
                Find out more
              </Link>
            </div>
          </div>
          <div className="relative h-[400px] w-full">
            <Image
              src={banners[currentIndex].image}
              alt={banners[currentIndex].alt}
              fill
              className="object-cover rounded-lg"
              priority
            />
            <div className="absolute bottom-4 right-4 flex space-x-2">
              {banners.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    index === currentIndex ? 'bg-white' : 'bg-white opacity-50'
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}