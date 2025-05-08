import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import ChatWidget from './components/ChatWidget';
import Footer from './components/Footer';
import { ThemeProvider}  from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="w-full bg-white dark:bg-gray-900 min-h-screen font-sans">
        <Navbar />
        <HeroSection />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        <ContactForm />
        <ChatWidget />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;