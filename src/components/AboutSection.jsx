export default function AboutSection() {
    return (
      <section className="bg-white text-black py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-red-500 mb-8">Biz Kimiz?</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Vulcan Technology olarak imalat sektöründe yüksek kalite standartlarıyla lazer kesim, sac büküm ve sistem entegrasyonu gibi birçok alanda hizmet veriyoruz. Teknoloji ve mühendisliği birleştirerek, güvenilir ve yenilikçi çözümler sunuyoruz.
          </p>
  
          <div className="grid md:grid-cols-2 gap-10 text-left">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl text-red-400 font-semibold mb-3">Misyonumuz</h3>
              <p className="text-gray-700">
                Müşterilerimize kaliteli, güvenilir ve zamanında üretim hizmetleri sunmak; teknolojik gelişmeleri yakından takip ederek sektöre yön veren çözümler üretmek.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl text-red-400 font-semibold mb-3">Vizyonumuz</h3>
              <p className="text-gray-700">
                Türkiye’nin ve dünyanın önde gelen üretim ve sistem entegrasyon firmalarından biri olmak; sürekli gelişim ve sürdürülebilir başarıyı ilke edinmek.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }