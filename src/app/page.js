import Header from '../components/Header';
import Hero from '../components/Hero';
import InfoSection from '../components/InfoSection';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import HowItWorks from '../components/HowItWorks';
import Journal from '../components/Journal';
import FAQ from '../components/FAQ';
import GetStarted from '../components/GetStarted';
import Footer from '../components/Footer';
import FramerBadge from '../components/FramerBadge';
import ScrollObserver from '../components/ScrollObserver';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <InfoSection />
        <Features />
        <Testimonials />
        <HowItWorks />
        <Journal />
        <FAQ />
        <GetStarted />
      </main>
      <Footer />
      <FramerBadge />
      <ScrollObserver />
    </>
  );
}
