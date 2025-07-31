'use client';
import Image from 'next/image';

export default function LazerKesimPage() {
  return (
    <div className="bg-white text-black py-30 px-6"> 
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-[#C8102E] mb-6">Lazer Kesim</h1>
        <div className="h-[2px] bg-gray-300 mb-6"></div>

        <p className="text-md md:text-lg text-[#C8102E] font-medium mb-10 leading-relaxed">
          Sac kesim ve şekillendirme kabiliyetlerimiz; 6 kW ve 4 kW fiber lazer kesim makinelerimiz ile
          normal saclarda 25 mm, paslanmaz çelikte 12 mm, Alüminyum’da 15 mm kalınlığa kadar hassas kesim
          yapabilen yeni nesil fiber lazer makineleri ile çapaksız yüksek kesim kalitesi ile hizmet verebilmekteyiz.
        </p>

        <div className="w-full">
          <Image
            src="/images/hero/hlazer_kesim.png"
            alt="Lazer Kesim"
            width={1000}
            height={600}
            className="w-full h-auto object-cover rounded-md shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}