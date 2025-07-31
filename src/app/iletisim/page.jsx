'use client';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function ContactPage() {
  return (
    <div className="bg-white pt-40">
      <div className="text-black py-16 px-6 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center border-b-2 border-red-600 inline-block">İletişime Geçin</h1>
        <p className="text-center text-gray-600 mb-12">
          Sorularınız, iş birlikleri veya teklif talepleriniz için bize ulaşmaktan çekinmeyin.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form Alanı */}
          <form className="space-y-6 bg-gray-50 p-8 rounded-lg shadow-md">
            <input
              type="text"
              placeholder="Ad Soyad"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
              required
            />
            <input
              type="email"
              placeholder="E-posta"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
              required
            />
            <input
              type="text"
              placeholder="Konu"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
              required
            />
            <textarea
              placeholder="Mesajınız"
              rows="5"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition"
            >
              Gönder
            </button>
          </form>

          {/* Bilgi Alanı */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <FaPhone className="text-red-600 text-2xl" />
              <span className="text-lg">+90 (312) 777 76 67</span>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-red-600 text-2xl" />
              <span className="text-lg">info@vulcantechnolog.com</span>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-red-600 text-2xl" />
              <span className="text-lg">Saray Mah. Saraykent San.Sit. 29. Cad. No: 1/B Kahramankazan / ANKARA</span>
            </div>
            <div className="mt-6">
            <iframe
  src="https://maps.google.com/maps?q=Saraykent%20Sanayi%20Sitesi%2029.%20Cadde%20No%3A1%2FB%2C%20Kahramankazan&t=&z=15&ie=UTF8&iwloc=&output=embed"
  className="w-full h-64 rounded-md border border-gray-300"
  allowFullScreen
  loading="lazy"
></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}