'use client';
import Image from 'next/image';

export default function TalasliImalatPage() {
  return (
    <section className="max-w-screen-xl mx-auto px-4 py-30">
      {/* Başlık ve açıklama */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-[#C8102E] mb-4">Talaşlı İmalat</h1>
        <p className="text-gray-800 leading-relaxed">
          VULCAN Teknoloji’de hem hızlı prototipleme hem de düşük hacimli son kullanım bileşenleri için hızlı ve kaliteli
          talaşlı işleme sunuyoruz.
        </p>
        <p className="text-gray-800 leading-relaxed mt-2">
          <strong>Eksen Üretim:</strong> 2 - 3 - 4 - 5<br />
          <strong>Ölçüm Aralığı:</strong> 4mm – 4000mm
        </p>
      </div>

      {/* Üst görsel */}
      <div className="mb-10">
        <Image
          src="/images/hero/talasbir.png"
          alt="Talaşlı İmalat Ana Görsel"
          width={1200}
          height={600}
          className="rounded-lg w-full h-auto object-cover"
        />
      </div>

      {/* 2x2 grid - eşit boyutlu resimler */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Torna */}
        <div className="flex flex-col items-center">
          <div className="w-full h-[250px] overflow-hidden rounded-md">
            <Image
              src="/images/hero/talasiki.png"
              alt="Torna"
              width={600}
              height={250}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-red-700 font-semibold text-center mt-2">Torna</p>
        </div>

        {/* Dikey İşleme */}
        <div className="flex flex-col items-center">
          <div className="w-full h-[250px] overflow-hidden rounded-md">
            <Image
              src="/images/hero/talasdort.png"
              alt="Dikey İşleme"
              width={600}
              height={250}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-red-700 font-semibold text-center mt-2">Dikey İşleme</p>
        </div>

        {/* Taşlama */}
        <div className="flex flex-col items-center">
          <div className="w-full h-[250px] overflow-hidden rounded-md">
            <Image
              src="/images/hero/talasuc.png"
              alt="Taşlama"
              width={600}
              height={250}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-red-700 font-semibold text-center mt-2">Taşlama</p>
        </div>

        {/* Delme */}
        <div className="flex flex-col items-center">
          <div className="w-full h-[250px] overflow-hidden rounded-md">
            <Image
              src="/images/hero/talasbes.png"
              alt="Delme"
              width={600}
              height={250}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-red-700 font-semibold text-center mt-2">Delme</p>
        </div>
      </div>
    </section>
  );
}