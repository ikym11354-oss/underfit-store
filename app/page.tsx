import React from 'react';

// ==========================================
// PUSAT DATA TOKO UNDERFIT
// ==========================================

// Nomor WhatsApp sudah diformat (0 di depan diganti 62)
const WA_NUMBER = "62895605396539"; 

// Link TikTok & Tokopedia
const TIKTOK_LINK = "https://vt.tokopedia.com/t/ZS9DnVpETYedv-ACPli/";
const TOKOPEDIA_LINK = "https://vt.tokopedia.com/t/ZS9DnVpETYedv-ACPli/";

// ==========================================
// DAFTAR PRODUK (Ganti di sini kalau ada produk baru)
// ==========================================
const products = [
  { 
    id: 1, 
    name: "Boxer Briefs Navy", 
    price: "Rp 25.000", 
    image: "/boxer-navy.jpg" 
  },
  { 
    id: 2, 
    name: "Boxer Briefs Grey", 
    price: "Rp 25.000", 
    image: "/boxer-grey.jpg" 
  },
  { 
    id: 3, 
    name: "Boxer Briefs Black", 
    price: "Rp 25.000", 
    image: "/boxer-black.jpg" 
  },
  { 
    id: 4, 
    name: "Paket Hemat 3 Boxer", 
    price: "Rp 60.000", 
    image: "/boxer-3pack.jpg" 
  },
];

// ==========================================
// FUNGSI BIKIN LINK WHATSAPP
// ==========================================
const getWhatsAppLink = (productName: string) => {
  const message = "Halo Underfit, saya mau order " + productName;
  return "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(message);
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      
      {/* 1. NAVBAR */}
      <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-sm sticky top-0 z-50">
        <h1 className="text-2xl font-bold tracking-wider">UNDERFIT.</h1>
        <div className="hidden md:flex gap-6 font-medium items-center">
          <a href="#" className="hover:text-gray-500">Home</a>
          <a href="#produk" className="hover:text-gray-500">Produk</a>
          <a 
            href={TOKOPEDIA_LINK} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-black hover:text-gray-600 font-bold border border-gray-300 px-4 py-1.5 rounded-full transition"
          >
            Tokopedia
          </a>
          <a 
            href={TIKTOK_LINK} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-black hover:text-gray-600 font-bold border border-gray-300 px-4 py-1.5 rounded-full transition"
          >
            TikTok
          </a>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center px-4 py-24 bg-zinc-900 text-white">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 max-w-3xl leading-tight">
          Tampil Percaya Diri dengan <span className="text-gray-400">Underfit</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl">
          Boxer briefs premium dengan bahan berkualitas tinggi. Nyaman dipakai seharian, cocok untuk aktivitas santai maupun olahraga.
        </p>
        <div className="flex gap-4">
          <a href="#produk" className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition">
            Lihat Produk
          </a>
          <a 
            href={TIKTOK_LINK} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-transparent border border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-black transition flex items-center gap-2"
          >
            Lihat TikTok
          </a>
        </div>
      </section>

      {/* 3. PRODUCT SECTION */}
      <section id="produk" className="px-8 py-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Produk Terbaru</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition group flex flex-col">
              <div className="h-64 overflow-hidden bg-gray-100 flex items-center justify-center">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-500 font-medium mb-4">{product.price}</p>
                
                <a 
                  href={getWhatsAppLink(product.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto block text-center w-full bg-green-500 text-white py-2.5 rounded-lg font-medium hover:bg-green-600 transition"
                >
                  Order via WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. FOOTER */}
      <footer className="bg-white border-t py-8 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Underfit Store. All rights reserved.</p>
      </footer>

    </div>
  );
}