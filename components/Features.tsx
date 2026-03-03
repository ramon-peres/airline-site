import { Shield, Clock, Headphones, CreditCard } from 'lucide-react';

const features = [
  { icon: Shield, title: 'Безопасная оплата', desc: 'Все транзакции защищены' },
  { icon: Clock, title: '24/7 Поддержка', desc: 'Работаем круглосуточно' },
  { icon: Headphones, title: 'Персональный менеджер', desc: 'Для корпоративных клиентов' },
  { icon: CreditCard, title: 'Лучшие цены', desc: 'Гарантируем низкую цену' },
];

export default function Features() {
  return (
    <section className="py-20 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold-400/10 flex items-center justify-center">
                <feature.icon className="w-8 h-8 text-gold-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
