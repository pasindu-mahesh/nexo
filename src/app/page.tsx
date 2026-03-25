import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-white">
      <Navbar />
      <Hero />
      <Services />
    </main>
  );
}
