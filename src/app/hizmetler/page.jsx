'use client';

import Link from 'next/link';
import { FaCut, FaCompressArrowsAlt, FaCogs, FaWrench, FaProjectDiagram, FaIndustry } from 'react-icons/fa';

const hizmetler = [
  {
    title: 'Lazer Kesim',
    path: '/hizmetler/lazer-kesim',
    description: 'Yüksek hassasiyetli lazer kesim hizmetleri.'
  },
  {
    title: 'Sac Büküm',
    path: '/hizmetler/sac-bukum',
    description: 'Sac metal şekillendirme ve büküm çözümleri.'
  },
  {
    title: 'Talaşlı İmalat',
    path: '/hizmetler/talasli-imalat',
    description: 'CNC ve konvansiyonel işleme hizmetleri.'
  },
  {
    title: 'Kaynaklı İmalat',
    path: '/hizmetler/kaynakli-imalat',
    description: 'Kaynak teknolojileri ve uygulamaları.'
  },
  {
    title: 'Mekanik Montaj',
    path: '/hizmetler/mekanik-elektronik-tasarim',
    description: 'Projelere özel tasarım ve mühendislik desteği.'
  },
  {
    title: 'Hidrolik Pres & Sıvama',
    path: '/hizmetler/hidrolik-pres-ve-sivama',
    description: 'Hidrolik teknolojisi ile şekillendirme çözümleri.'
  }
];

const icons = [
  <img src="/icons/lazer_kesim.png" alt="Lazer Kesim" className="w-12 h-12" />,
  <img src="/icons/sac.png" alt="Sac Büküm" className="w-12 h-12" />,
  <img src="/icons/talasli_imalat.png" alt="Talaşlı İmalat" className="w-12 h-12" />,
  <img src="/icons/kaynakli_imalat.png" alt="Kaynaklı İmalat" className="w-12 h-12" />,
  <img src="/icons/montaj.png" alt="Mekanik Montaj" className="w-12 h-12" />,
  <img src="/icons/hidrolik.png" alt="Hidrolik Pres & Sıvama" className="w-12 h-12" />
];

export default function HizmetlerPage() {
  return (
    <div className="bg-white min-h-screen py-24 px-6">
      <h1 className="text-4xl font-bold text-center text-black mb-4">Hizmetlerimiz</h1>
      <p className="text-center text-gray-500 max-w-2xl mx-auto mb-12">
        Şirketimizin sunduğu tüm hizmet alanlarını aşağıda inceleyebilirsiniz.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {hizmetler.map((hizmet, idx) => (
          <Link key={idx} href={hizmet.path}>
            <div className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg shadow hover:shadow-lg transition cursor-pointer">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                {icons[idx]}
              </div>
              <h2 className="text-lg font-semibold text-black mb-2">{hizmet.title}</h2>
              <p className="text-gray-600 text-sm italic">{hizmet.description}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link href="/iletisim">
          <button className="bg-red-100 text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-red-200 transition">
            Daha Fazla Bilgi
          </button>
        </Link>
      </div>
    </div>
  );
}