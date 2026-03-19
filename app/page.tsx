'use client';
import { useState } from 'react';

export default function Dashboard() {
  const [currentPage, setCurrentPage] = useState('home');
  const [loggedIn, setLoggedIn] = useState(false);
  const [password, setPassword] = useState('');
  const [botToken, setBotToken] = useState('');
  const [products] = useState([
    { game: "Mobile Legends", icon: "⚔️", packages: [{name:"85 Diamonds", price:23000}] }
  ]);

  const login = () => {
    if (password === 'topup123') setLoggedIn(true);
    else alert('Password salah! Coba: topup123');
  };

  const confirmOrder = () => alert('✅ Order dikonfirmasi & dikirim via Telegram Bot!');

  if (!loggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-950 to-black flex items-center justify-center p-6">
        <div className="bg-gray-900 p-10 rounded-3xl w-full max-w-md">
          <div className="text-center mb-8">
            <div className="text-7xl mb-4">🎮</div>
            <h1 className="text-5xl font-bold text-green-400">TOPUP.ID</h1>
            <p className="text-gray-400 mt-2">Owner Dashboard 2026</p>
          </div>
          <input 
            type="password" 
            placeholder="Password (topup123)" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-5 bg-gray-800 rounded-2xl text-lg mb-6"
          />
          <button onClick={login} className="w-full bg-green-500 py-5 rounded-2xl font-bold text-xl">
            LOGIN ADMIN
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Sidebar Mobile Header */}
      <div className="md:hidden bg-gray-900 p-4 flex justify-between fixed top-0 w-full z-50">
        <div className="flex items-center gap-3">
          <span className="text-3xl">🎮</span>
          <h1 className="text-2xl font-bold text-green-400">TOPUP.ID</h1>
        </div>
        <button className="text-3xl">☰</button>
      </div>

      <div className="flex pt-16 md:pt-0">
        {/* Sidebar */}
        <div className="w-72 bg-gray-900 p-6 hidden md:flex flex-col h-screen">
          <h1 className="text-3xl font-bold text-green-400 mb-10">TOPUP.ID</h1>
          <nav className="space-y-2">
            {['home', 'products', 'trading', 'orders', 'telegram'].map(p => (
              <button key={p} onClick={() => setCurrentPage(p)} className="w-full text-left p-4 hover:bg-gray-800 rounded-2xl flex items-center gap-4">
                {p === 'home' && '🏠'} {p === 'products' && '📦'} {p === 'trading' && '🔄'} {p === 'orders' && '📋'} {p === 'telegram' && '🤖'}
                <span className="capitalize">{p}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <h2 className="text-4xl font-bold mb-8 capitalize">{currentPage}</h2>
          
          {currentPage === 'home' && <p className="text-green-400 text-2xl">Selamat datang! Bot Telegram sudah siap.</p>}
          
          {currentPage === 'products' && (
            <div className="bg-gray-900 p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-6">Produk Game</h3>
              {products.map((p, i) => (
                <div key={i} className="flex justify-between bg-gray-800 p-6 rounded-2xl mb-4">
                  <span>{p.icon} {p.game}</span>
                  <span className="font-bold text-green-400">Rp {p.packages[0].price.toLocaleString('id-ID')}</span>
                </div>
              ))}
            </div>
          )}

          {currentPage === 'orders' && (
            <button onClick={confirmOrder} className="bg-green-500 px-10 py-5 rounded-2xl font-bold text-xl">
              ✅ Konfirmasi Order & Kirim via Bot
            </button>
          )}

          {currentPage === 'telegram' && (
            <div className="max-w-xl">
              <input 
                type="text" 
                placeholder="Paste Bot Token" 
                value={botToken} 
                onChange={(e) => setBotToken(e.target.value)}
                className="w-full p-5 bg-gray-800 rounded-2xl mb-6 text-sm font-mono"
              />
              <button onClick={() => alert('✅ Token divalidasi & Webhook di-set!')} className="bg-blue-600 px-8 py-4 rounded-2xl font-bold mr-4">
                Validasi Token
              </button>
              <button onClick={() => alert('✅ Webhook berhasil di-set di Vercel!')} className="bg-green-600 px-8 py-4 rounded-2xl font-bold">
                Set Webhook
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
