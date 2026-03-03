import { Plane, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy-800 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Plane className="w-8 h-8 text-gold-400" />
              <span className="text-2xl font-bold text-white">Premier<span className="text-gold-400">Fly</span></span>
            </div>
            <p className="text-gray-400 text-sm">Ваш надежный партнер в мире авиапутешествий</p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Навигация</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="/" className="hover:text-gold-400">Главная</a></li>
              <li><a href="/search" className="hover:text-gold-400">Поиск</a></li>
              <li><a href="/about" className="hover:text-gold-400">О нас</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Контакты</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> 8 (800) 555-35-35</li>
              <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> info@premierfly.ru</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
          © 2026 PremierFly. Все права защищены.
        </div>
      </div>
    </footer>
  );
}
