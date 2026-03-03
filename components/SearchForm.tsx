'use client';

import { useState } from 'react';
import { Search, ArrowRightLeft } from 'lucide-react';

export default function SearchForm() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [departDate, setDepartDate] = useState('');
  const [adults, setAdults] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams({
      marker: '518583',
      origin_iata: 'MOW',
      destination_iata: 'LED',
      depart_date: departDate,
      adults: String(adults),
      sub1: 'kimit'
    });
    window.location.href = `https://www.aviasales.ru/search?${params.toString()}`;
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/10">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="relative">
            <label className="block text-sm text-gray-300 mb-1">Откуда</label>
            <input
              type="text" value={origin} onChange={(e) => setOrigin(e.target.value)}
              placeholder="Москва"
              className="w-full bg-navy-800 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gold-400"
            />
            <ArrowRightLeft className="absolute right-[-20px] top-[50%] translate-y-[-50%] w-5 h-5 text-gold-400 cursor-pointer hidden md:block" onClick={() => { const t = origin; setOrigin(destination); setDestination(t); }} />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-1">Куда</label>
            <input type="text" value={destination} onChange={(e) => setDestination(e.target.value)} placeholder="Санкт-Петербург" className="w-full bg-navy-800 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gold-400" />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-1">Туда</label>
            <input type="date" value={departDate} onChange={(e) => setDepartDate(e.target.value)} min={new Date().toISOString().split('T')[0]} className="w-full bg-navy-800 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-400" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-end">
          <div className="w-full md:w-48">
            <label className="block text-sm text-gray-300 mb-1">Пассажиры</label>
            <select value={adults} onChange={(e) => setAdults(Number(e.target.value))} className="w-full bg-navy-800 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-400">
              <option value={1}>1 взрослый</option>
              <option value={2}>2 взрослых</option>
              <option value={3}>3 взрослых</option>
            </select>
          </div>

          <button type="submit" className="w-full md:flex-1 bg-gradient-to-r from-gold-400 to-gold-500 text-navy-900 font-bold py-4 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition">
            <Search className="w-5 h-5" /> Найти билеты
          </button>
        </div>
      </form>
    </div>
  );
}
