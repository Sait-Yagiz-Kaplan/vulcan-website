'use client';

import { FaCogs, FaBoxOpen, FaTools, FaWrench, FaIndustry, FaCube } from 'react-icons/fa';

const features = [
  { title: 'Lazer Kesim', icon: <FaTools />, description: 'Hassas ve kaliteli lazer kesim hizmeti.' },
  { title: 'Sac Büküm', icon: <FaCogs />, description: 'Farklı kalınlık ve açılarda sac şekillendirme.' },
  { title: 'Talaşlı İmalat', icon: <FaWrench />, description: 'CNC destekli talaşlı imalat çözümleri.' },
  { title: 'Kaynaklı İmalat', icon: <FaBoxOpen />, description: 'Dayanıklı ve hassas kaynak çözümleri.' },
  { title: 'Makine Parkı', icon: <FaIndustry />, description: 'Geniş ve güçlü makine parkurumuzla hizmetinizdeyiz.' },
  { title: 'Ürünlerimiz', icon: <FaCube />, description: 'Sunduğumuz ürünleri keşfedin.' },
];

export default function FeatureGrid() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-black">Neler Yapıyoruz?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="border border-gray-200 p-6 rounded-lg shadow-md hover:shadow-xl transition bg-white text-center h-full flex flex-col justify-between"
            >
              <div className="text-red-600 text-4xl mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-black">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}