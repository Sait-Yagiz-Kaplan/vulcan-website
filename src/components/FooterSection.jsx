'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaPhone, FaEnvelope, FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

export default function FooterSection() {
  return (
    <footer className="bg-[url('/images/hero/footer.png')] bg-no-repeat bg-center bg-[length:105%_105%] text-white px-8 pt-12 pb-6 relative">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
        <div className="flex flex-col items-start">
          <div className="mb-4">
            <img src="/logo.png" alt="Vulcan Industry" className="h-32 w-auto object-contain" />
          </div>
          <p className="text-sm text-gray-400">Vulcan Technology</p>
          <div className="mt-2 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <FaPhone className="text-lg" />
              <span>+90 (312) 777 76 67</span>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <FaEnvelope className="text-lg" />
              <span>info@vulcantechnology.com</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-white font-bold mb-4">Hakkımızda</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><Link href="/kurumsal/hakkimizda">Hakkımızda</Link></li>
            <li><Link href="/iletisim">İletişim</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-4">Sık Ziyaret Edilenler</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><Link href="/">Anasayfa</Link></li>
            <li><Link href="/product">Ürünler</Link></li>
            <li><Link href="/iletisim">İletişim</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-4">Sosyal Medya</h3>
          <div className="flex gap-4">
            <a href="#" className="text-white bg-gray-800 p-2 rounded-full hover:bg-red-600 hover:scale-110 transition-transform"><FaFacebookF /></a>
            <a href="#" className="text-white bg-gray-800 p-2 rounded-full hover:bg-red-600 hover:scale-110 transition-transform"><FaLinkedinIn /></a>
            <a href="#" className="text-white bg-gray-800 p-2 rounded-full hover:bg-red-600 hover:scale-110 transition-transform"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-700 pt-4 text-sm text-gray-500 text-center">
        © 2025 Tüm haklar saklıdır. <span className="text-red-500">VULCAN GRUP TEKNOLOJİ SAN. VE TİC. A.Ş.</span>
      </div>

      {/* Yukarı Çık Butonu - Özel icon ile */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-5 right-5 bg-black border border-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-600 transition"
      >
        <Image src="/icons/upicon.png" alt="Yukarı Çık" width={28} height={28} />
      </button>
    </footer>
  );
}