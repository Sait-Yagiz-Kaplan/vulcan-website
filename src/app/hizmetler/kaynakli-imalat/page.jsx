'use client';
import Image from 'next/image';

export default function KaynakliImalatPage() {
  return (
    <section className="max-w-screen-xl mx-auto px-4 py-30">
      {/* Başlık ve açıklama */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#C8102E] mb-2">Kaynaklı İmalat</h1>
        <p className="text-red-700 leading-relaxed mb-2">
          Üretimlerimiz arasında kaynaklı imalat geniş bir skalada yer almaktadır. Kaynaklı imalat sürecinde temel prensiplerimiz;
          uygulanan kaynağın dayanıklılığı, yüksek kalitesi ve kozmetik olarak kusursuz olmasıdır. Tecrübeli kaynak ekibimiz ile
          karbon ve paslanmaz çelik, alüminyum, pirinç ve titanyum malzemelerinde kaynak yapabilmekteyiz.
        </p>
        <p className="text-gray-600 text-sm">Certificate<br />ISO3834-2</p>
      </div>

      {/* Kaynak türleri */}
      <div className="space-y-16">
        {/* 1. Satır */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex flex-col items-center md:w-1/3">
            <Image src="/icons/ikaynakiki.png" alt="Tig Kaynağı İkon" width={112} height={112} />
            <p className="text-red-700 font-bold mt-3 text-lg">Tig Kaynağı</p>
          </div>
          <div className="md:w-2/3">
            <Image
              src="/images/hero/kaynakbir.png"
              alt="Tig Kaynağı"
              width={800}
              height={300}
              className="rounded-md w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* 2. Satır */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex flex-col items-center md:w-1/3">
            <Image src="/icons/ikaynakiki.png" alt="Mig Kaynağı İkon" width={112} height={112} />
            <p className="text-red-700 font-bold mt-3 text-lg">Mig Kaynağı</p>
          </div>
          <div className="md:w-2/3">
            <Image
              src="/images/hero/kaynakiki.png"
              alt="Mig Kaynağı"
              width={800}
              height={300}
              className="rounded-md w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* 3. Satır */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex flex-col items-center md:w-1/3">
            <Image src="/icons/ikaynakuc.png" alt="Lazer Kaynağı İkon" width={112} height={112} />
            <p className="text-red-700 font-bold mt-3 text-lg">Lazer Kaynağı</p>
          </div>
          <div className="md:w-2/3">
            <Image
              src="/images/hero/kaynakuc.png"
              alt="Lazer Kaynağı"
              width={800}
              height={300}
              className="rounded-md w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}