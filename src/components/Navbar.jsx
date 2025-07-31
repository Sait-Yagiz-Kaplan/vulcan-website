'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <header className="w-full absolute top-0 left-0 z-50">
      {/* Üst Bar */}
      <div className="bg-black text-sm py-1 px-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <span className="text-white">📞 +90 (312) 777 76 67</span>
          <span className="text-white">✉️ info@vulcantechnology.com</span>
        </div>
        <div>
          <span className="text-white cursor-pointer hover:underline">🇹🇷 Turkish ▼</span>
        </div>
      </div>

      {/* Logo + Menü */}
      <div className="bg-transparent px-6 pt-2 pb-4 flex justify-between items-start max-w-screen-xl mx-auto">
        {/* Sol Logo */}
        <Link href="/" className="flex-shrink-0 mt-[-40px]">
          <Image
            src="/logo.png"
            alt="Vulcan Logo"
            width={350}
            height={110}
            className="object-contain"
            priority
          />
        </Link>

        {/* Menü */}
        <nav className="hidden md:flex gap-8 text-sm font-medium items-start text-red-600 mt-[10px]">
          <Link href="/" className="hover:text-red-700 transition">Anasayfa</Link>

          {/* Hizmetlerimiz */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setOpenDropdown(openDropdown === 'hizmetlerimiz' ? null : 'hizmetlerimiz')}
              className="hover:text-red-700 flex items-center gap-1"
            >
              Hizmetlerimiz ▼
            </button>
            {openDropdown === 'hizmetlerimiz' && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-md py-2 z-50">
                <Link href="/hizmetler" className="block px-4 py-2 font-semibold border-b border-gray-200 hover:bg-gray-100 transition text-sm text-red-600">
                  Tüm Hizmetlerimiz
                </Link>
                {[
                  'Lazer Kesim',
                  'Sac Büküm',
                  'Talaşlı İmalat',
                  'Kaynaklı İmalat',
                  'Mekanik Montaj',
                  'Hidrolik Pres & Sıvama',
                ].map((item, idx) => {
                  const slug = item
                    .toLowerCase()
                    .replace(/ /g, '-')
                    .replace(/&/g, '')
                    .replace(/ı/g, 'i')
                    .replace(/ç/g, 'c')
                    .replace(/ş/g, 's')
                    .replace(/ğ/g, 'g')
                    .replace(/ü/g, 'u')
                    .replace(/ö/g, 'o')
                    .normalize('NFD')
                    .replace(/[\u0300-\u036f]/g, '');

                  return (
                    <Link
                      key={idx}
                      href={`/hizmetler/${slug}`}
                      className="block px-4 py-2 hover:bg-gray-100 transition text-sm text-red-600"
                    >
                      {item}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {/* Kurumsal */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setOpenDropdown(openDropdown === 'kurumsal' ? null : 'kurumsal')}
              className="hover:text-red-700 flex items-center gap-1"
            >
              Kurumsal ▼
            </button>
            {openDropdown === 'kurumsal' && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-md py-2 z-50">
                <Link
                  href="/kurumsal/hakkimizda"
                  className="block px-4 py-2 hover:bg-gray-100 transition text-sm text-red-600"
                >
                  Hakkımızda
                </Link>
                <Link
                  href="/kurumsal/haberler"
                  className="block px-4 py-2 hover:bg-gray-100 transition text-sm text-red-600"
                >
                  Haberler
                </Link>
                <a
                  href="https://www.kariyer.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 hover:bg-gray-100 transition text-sm text-red-600"
                >
                  Kariyer
                </a>
              </div>
            )}
          </div>

          <Link href="/product" className="hover:text-red-700 transition">Ürünler</Link>
          <Link href="/makineparki" className="hover:text-red-700 transition">Makine Parkı</Link>
          <Link href="/referanslarimiz" className="hover:text-red-700 transition">Referanslarımız</Link>
          <Link href="/iletisim" className="hover:text-red-700 transition">İletişim</Link>
          <Link href="/iletisim">
            <button className="ml-4 px-5 py-2 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 transition">
              Teklif Al
            </button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;