const destinations = [
  { city: 'Дубай', country: 'ОАЭ', price: '24 500 ₽', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800' },
  { city: 'Париж', country: 'Франция', price: '32 100 ₽', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' },
  { city: 'Бали', country: 'Индонезия', price: '45 600 ₽', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800' },
  { city: 'Нью-Йорк', country: 'США', price: '38 900 ₽', image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800' },
];

export default function PopularRoutes() {
  return (
    <section className="py-20 bg-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Популярные <span className="text-gold-400">направления</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((dest) => (
            <div key={dest.city} className="group relative overflow-hidden rounded-2xl cursor-pointer">
              <div className="aspect-[4/5] relative">
                <img src={dest.image} alt={dest.city} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent opacity-80" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-gray-300 text-sm">{dest.country}</p>
                <h3 className="text-2xl font-bold text-white mb-2">{dest.city}</h3>
                <span className="text-gold-400 font-bold text-lg">{dest.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
