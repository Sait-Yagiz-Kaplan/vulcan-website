'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef, useEffect } from 'react';

const heroItems = [
  {
    title: 'Lazer Kesim',
    href: '/hizmetler/lazer-kesim',
    img: '/images/hero/hhlazer.jpg',
  },
  {
    title: 'Talaşlı İmalat',
    href: '/hizmetler/talasli-imalat',
    img: '/images/hero/talas.jpg',
  },
  {
    title: 'Sac Büküm',
    href: '/hizmetler/sac-bukum',
    img: '/images/hero/sacc.png',
  },
  {
    title: 'Kaynaklı İmalat',
    href: '/hizmetler/kaynakli-imalat',
    img: '/images/hero/kaynak.jpg',
  },
];

export default function HeroSection() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => { });
    }
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/videos/video.mov"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Paralelkenar Resimler */}
      <div className="relative z-10 flex items-end justify-center h-full gap-6 px-6 pb-16">
        {heroItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="group w-[17vw] h-[45vh] relative overflow-hidden border-[5px] border-red-600 transform -skew-x-12"
          >
            <Image
              src={item.img}
              alt={item.title}
              fill
              className="object-cover transform skew-x-12 scale-150 transition-transform duration-500 ease-in-out group-hover:scale-[1.65]"
            />
            {/* --- DEĞİŞİKLİK --- */}
            {/* 'bottom-3' sınıfı 'top-3' olarak değiştirildi */}
            <div className="absolute top-3 left-3 z-10 text-white-600 font-semibold text-lg drop-shadow-lg">
              {item.title}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}