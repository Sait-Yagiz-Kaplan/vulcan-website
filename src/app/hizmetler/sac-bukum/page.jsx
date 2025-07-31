'use client';
import Image from "next/image";

export default function SacBukumPage() {
  return (
    <div className="bg-white text-black py-30 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-[#C8102E] mb-6">Sac Büküm</h1>
        <div className="h-[2px] bg-gray-300 mb-6"></div>

        <p className="text-md md:text-lg text-[#C8102E] font-medium mb-10 leading-relaxed">
          4 metreye kadar sac büküm boyunda abkant makinelerimiz ile talep edilen açılarda ürünler şekillendirebilmekteyiz.
        </p>

        <div className="w-full">
          <Image
            src="/images/hero/hsac.png"
            alt="Sac Büküm"
            width={1000}
            height={600}
            className="w-full h-auto object-cover rounded-md shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}