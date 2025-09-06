import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import ForWhomSection from '../components/ForWhomSection';
import WhyBetterSection from '../components/WhyBetterSection';
import HowToUseSection from '../components/HowToUseSection';
import TestimonialsSection from '../components/TestimonialsSection';
import MarketSection from '../components/MarketSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ForWhomSection />
      <WhyBetterSection />
      <HowToUseSection />
      <TestimonialsSection />
      <MarketSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default LandingPage;