import "./globals.css";
import Navbar from '../components/Navbar';
import FooterSection from '../components/FooterSection'; 

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className="bg-white text-black relative z-10">
        <Navbar />
        {children}
        <FooterSection /> 
      </body>
    </html>
  );
}