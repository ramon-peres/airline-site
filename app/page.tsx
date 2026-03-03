import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PopularRoutes from '@/components/PopularRoutes';
import Features from '@/components/Features';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-navy-900">
      <Header />
      <Hero />
      <PopularRoutes />
      <Features />
      <Footer />
    </main>
  );
}
