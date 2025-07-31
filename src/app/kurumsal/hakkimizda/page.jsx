'use client';

export default function HakkimizdaPage() {
  return (
    <div className="bg-white min-h-screen text-black pt-10 px-6 max-w-6xl mx-auto">

      {/* Resim en üstte */}
      <div className="w-full mt-20 mb-10">
        <img
          src="/images/hero/hakkimizdabaslik.png"
          alt="Hakkımızda"
          className="w-full max-h-[500px] object-cover rounded-lg shadow-md"
        />
      </div>

      <h1 className="text-4xl font-bold mb-6 border-b-2 border-red-600 inline-block">
        Hakkımızda
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-gray-700">
        VULCAN Teknoloji; savunma sanayii başta olmak üzere, iş makineleri ve ekipmanları, otobüs-otomobil ve madencilik sektörlerinin alt parça ve sistem bazında başta imalat olmak üzere tasarım, kalite ve proje yönetimi ihtiyaçlarının karşılanması üzerine kurulmuştur. Şirketimizin kuruluş amacı; bahse konu sektörlerin ürün ve alt sistemlerini geliştirme, imalat ihtiyaçlarını hammade’den nihai ürün aşamasına kadar kendi altyapısında dışa bağımlılığı olmadan gerçekleştirerek müşteriye ulaştırmaktır.
      </p>

      <h2 className="text-lg font-semibold mb-3 text-red-600 border-l-2 pl-3 border-red-600">Değerler</h2>
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Şirket kültürümüzde 4 temel değerimiz;
        <br />
        <strong>Takım Çalışması:</strong> VULCAN olarak fikir, verim, çözüm ve sonucu takım çalışması esasına dayandırıyor, ilke olarak benimsiyoruz.
        <br />
        <strong>Yenilikçi Yaklaşım:</strong> Yenilikçi yaklaşım ile efektif çözüme odaklanıyoruz ve daima daha iyisini hedefliyoruz.
        <br />
        <strong>Çözüm Odaklılık:</strong> İş ortaklarımız ile kendi alanlarında öne çıkmaları gereken rekabetçi ürün ve süreç, yenilikçi çözümler sunmaktayız. Proaktif olarak beklentileri daima öngörüyor ve aşıyoruz.
        <br />
        <strong>Bütünlük:</strong> Güvenilirlikte sıfır esneklik misyonumuzla; tüm paydaşlarımızla ilişkilerimizi şeffaflık, dürüstlük ve çözüm odaklılık bütünlüğü temelleri üzerine kuruyoruz.
      </p>

      <h2 className="text-lg font-semibold mb-3 text-red-600 border-l-2 pl-3 border-red-600">VULCAN Hakkında</h2>
      <div className="w-full my-6">
        <img
          src="/images/hero/vulcan_hakkinda.png"
          alt="VULCAN Hakkında"
          className="w-full max-h-[500px] object-cover rounded-lg"
        />
      </div>

      <h2 className="text-lg font-semibold mb-3 text-red-600 border-l-2 pl-3 border-red-600">Yetkinliklerimiz</h2>
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Mekanik Sistemler ve Parça Tasarımı<br />
        Mekanik Entegrasyon / Montaj<br />
        Elektromekanik Montaj<br />
        Talaşlı İmalat<br />
        Lazer Kesim ve Büküm Kalıp Tasarımı ve İmalatı<br />
        Kaynaklı İmalat<br />
        Ölçüm ve Kalite Prosesleri, Pres ve Sıvama Prosesleri<br />
        Hidrolik Hortum Üretim ve Test
      </p>
      <div className="w-full my-6">
        <img
          src="/images/hero/yetkinlik.png"
          alt="Yetkinliklerimiz"
          className="w-full max-h-[500px] object-cover"
        />
      </div>

      <h2 className="text-lg font-semibold mb-3 text-red-600 border-l-2 pl-3 border-red-600">Faaliyet Alanlarımız</h2>
      <div className="w-full my-6">
        <img
          src="/images/hero/faaliyet.png"
          alt="Faaliyet Alanlarımız"
          className="w-full object-cover"
        />
      </div>

      <h2 className="text-lg font-semibold mb-3 text-red-600 border-l-2 pl-3 border-red-600">Kalite Sertifikalarımız</h2>
      <div className="w-full my-6">
        <img
          src="/images/hero/sertifika.png"
          alt="Kalite Sertifikalarımız"
          className="w-full object-cover"
        />
      </div>

      <h2 className="text-lg font-semibold mb-3 text-red-600 border-l-2 pl-3 border-red-600">Kalite Politikamız</h2>
      <p className="text-lg text-gray-700 leading-relaxed mb-12">
        VULCAN Teknoloji olarak, müşteri memnuniyetini en üst seviyede tutmayı, kaliteyi tüm süreçlerimizin merkezine yerleştirmeyi ve sürekli iyileştirme anlayışıyla hareket etmeyi temel ilke olarak benimsemekteyiz. 
        Tüm ürün ve hizmetlerimizde ulusal ve uluslararası kalite standartlarına uygunluğu sağlamak, çalışanlarımızın gelişimini desteklemek ve çevreye duyarlı üretim anlayışıyla hareket etmek kalite politikamızın temel taşlarıdır.
      </p>
    </div>
  );
}