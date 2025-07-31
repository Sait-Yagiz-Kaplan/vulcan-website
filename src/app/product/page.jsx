'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductsPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-white text-black px-4">
      {/* Arka plan transparan logo */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-5 pointer-events-none">
        <Image
          src="/transparan/arkalogo.png"
          alt="Arka Plan Logo"
          width={800}
          height={800}
          className="object-contain"
        />
      </div>

      {/* İçerik */}
      <div className="relative z-10 text-center space-y-6">
        <h1 className="text-5xl font-bold text-red-600 animate-pulse">
          Ürünler Sayfası Yapım Aşamasında
        </h1>
        <p className="text-gray-700 text-lg">
          Şu anda bu sayfa üzerinde çalışıyoruz. Yakında burada tüm ürünlerimizi bulabileceksiniz.
        </p>
        <Link
          href="/"
          className="inline-block mt-4 px-6 py-3 border border-red-600 text-red-600 font-semibold rounded-full hover:bg-red-600 hover:text-white transition"
        >
          Anasayfaya Dön
        </Link>
      </div>
    </div>
  );
}