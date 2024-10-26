"use client";

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import company from '../company.png';
// Import CSS for fonts and global styles
import '../app/globals.css';

export default function Component() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const screens = [
    {
      text: (
        <>
          <span className="block">Discover an era where</span>
          <span className="block">privacy meets</span>
          <span className="block">efficiency</span>
        </>
      ),
      bgColor: 'bg-[#131315]',
      textColor: 'text-[#C9CDD9]',
      fontSize: 'text-2xl md:text-xl lg:text-6xl',
      centerText: true,
      fontWeight: 'font-semibold',
      buttonWidth: 'w-full max-w-md',
    },
    {
      text: (
        <>
          At <span className="bg-[#4C7DF6] text-white px-1 py-1 rounded hover:bg-blue-500 transition-colors cursor-pointer">the Era Inc,</span> we&apos;re reinventing your internet experience.
        </>
      ),
      bgColor: 'bg-[#0D50FF]',
      textColor: 'text-white',
      fontSize: 'text-2xl md:text-xl lg:text-2xl',
      fontWeight: 'font-semibold',
    },
    {
      text: "When we think about navigating the internet, the browser often gets overshadowed. Our minds drift to what we do online—the articles we read, the emails we write, the shows we binge. The browser, the tool that powers it all, is so familiar that it often slips from our awareness.",
      bgColor: 'bg-[#0D50FF]',
      textColor: 'text-[#e0ecff]',
      fontSize: 'text-lg md:text-xl lg:text-2xl',
      fontWeight: 'font-normal',
    },
    {
      text: "Even as our internet habits have transformed, the browser has stayed surprisingly static. Other software tools have evolved for the better, offering enhanced collaboration, adaptable interfaces, and robust features. Meanwhile, the browser continues to perform much like it did a quarter-century ago.",
      bgColor: 'bg-[#0D50FF]',
      textColor: 'text-[#e0ecff]',
      fontSize: 'text-lg md:text-xl lg:text-2xl',
      fontWeight: 'font-normal',
    },
    {
      text: "Moreover, we often turn the blame on ourselves for the browser’s limitations. When we have too many tabs open, we label ourselves as inefficient; when we get sidetracked online, we think we lack discipline; when we can’t locate a URL, we believe we’re disorganized. So why does the browser escape scrutiny?",
      bgColor: 'bg-[#0D50FF]',
      textColor: 'text-[#e0ecff]',
      fontSize: 'text-lg md:text-xl lg:text-2xl',
      fontWeight: 'font-normal',
    },
    {
      text: (
        <>
          That&apos;s why we&apos;re developing a new browser, <span className="bg-[#4C7DF6] text-white px-1 py-1 rounded hover:bg-blue-500 transition-colors cursor-pointer underline">which we call Era</span>, as we believe browsers can greatly enhance our online experience. We’re designing ( actually not lying design is inspired by the Browser Company ) ,Era to think as fast as we do, lighten our workload, and boost our creativity. It’s tailored for how we engage with the internet in 2025 and lays the groundwork for our future interactions.
        </>
      ),
      bgColor: 'bg-[#0D50FF]',
      textColor: 'text-[#e0ecff]',
      fontSize: 'text-lg md:text-xl lg:text-2xl',
      fontWeight: 'font-normal',
    },
    {
      title: "Our Team",
      text: (
        <>
          I&apos;m Ansh Sharma, the solo 17-year-old developer behind this app. As the founder and CEO, I&apos;m dedicated to building a better browsing experience.<span className="bg-[#4C7DF6] text-white px-1 py-1 rounded hover:bg-blue-500 transition-colors cursor-pointer underline">Join me →</span>
        </>
      ),
      bgColor: 'bg-[#0D50FF]',
      textColor: 'text-[#e0ecff]',
      fontSize: 'text-lg md:text-xl lg:text-2xl',
      fontWeight: 'font-normal',
    },
    {
      title: "Support",
      text: (
        <>
          Beyond my journey, I&apos;m grateful for the unwavering support of my family and friends, especially my father, Dewarka Nath. If you&apos;re interested in supporting my efforts, I&apos;d love to hear from you! <span className="bg-[#4C7DF6] text-white px-1 py-1 rounded hover:bg-blue-500 transition-colors cursor-pointer underline">support us -></span>.
        </>
      ),
      bgColor: 'bg-[#0D50FF]',
      textColor: 'text-[#e0ecff]',
      fontSize: 'text-lg md:text-xl lg:text-2xl',
      fontWeight: 'font-normal',
    },
    {
      text: (
        <>
          Otherwise, feel free to <span className="bg-[#4C7DF6] text-white px-1 py-1 rounded hover:bg-blue-500 transition-colors cursor-pointer underline">join our friends and family newsletter</span>, and we promise you&apos;ll be among the first to play with our new browser.
        </>
      ),
      bgColor: 'bg-[#0D50FF]',
      textColor: 'text-[#e0ecff]',
      fontSize: 'text-lg md:text-xl lg:text-2xl',
      fontWeight: 'font-normal',
    },
    {
      image: true,
      bgColor: 'bg-[#0D50FF]',
      textColor: 'text-[#C9CDD9]',
    },
    {
      text: (
        <>
          <Link href="/privacy" className="block underline mb-2">Privacy Policy</Link>
          <Link href="/security" className="block underline mb-2">Security</Link>
          <span className="block">Hi there :)</span>
        </>
      ),
      bgColor: 'bg-[#131315]',
      textColor: 'text-[#C9CDD9]',
      fontSize: 'text-lg md:text-xl lg:text-2xl',
      centerText: true,
      fontWeight: 'font-normal',
    },
  ];

  const nextScreen = () => {
    if (currentScreen < screens.length - 1) {
      setCurrentScreen(currentScreen + 1);
    }
  };

  const prevScreen = () => {
    if (currentScreen > 0) {
      setCurrentScreen(currentScreen - 1);
    }
  };

  return (
    <div className={`h-screen w-full flex flex-col transition-colors duration-500 ${screens[currentScreen]?.bgColor || ''} font-technica`}>
      <header className="p-4 flex justify-end">
        <button 
          aria-label={menuOpen ? "Close menu" : "Open menu"} 
          className={`${screens[currentScreen]?.textColor || 'text-white'} hover:opacity-80 z-50`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      <div className={`fixed inset-0 bg-[#0D50FF] z-40 flex items-center justify-center transition-opacity duration-300 ${menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <nav className="text-center">
          {['VALUES', 'CONTACT', 'CAREERS', 'TWITTER', 'NEWSLETTER', 'GET ARC'].map((item, index) => (
            <Link 
              key={index} 
              href="#" 
              className={`block py-2 text-lg md:text-xl lg:text-2xl ${item === 'GET ARC' ? 'text-white' : 'text-gray-300'} hover:text-white transition-colors`}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>

      <main className="flex-grow flex flex-col justify-center items-center px-10 md:px-20 lg:px-40 relative">
        <div className={`w-full ${screens[currentScreen].buttonWidth || ''} ${screens[currentScreen].centerText ? 'text-center' : 'text-left'}`}>
          {screens[currentScreen].title && (
            <h2 className={`text-3xl md:text-2xl lg:text-3xl font-bold mb-4 text-white pb-4`}>
              {screens[currentScreen].title}
            </h2>
          )}
          {screens[currentScreen].image ? (
            <div className="flex justify-center items-center h-full">
              <Image
                src={company} // Ensure your image is properly imported
                alt="Custom footer image"
                width={500} // Set the desired width
                height={500} // Set the desired height
                className="w-500 h-500"
              />
            </div>
          ) : (
            <div className={`${screens[currentScreen].fontSize} ${screens[currentScreen].textColor} ${screens[currentScreen].fontWeight} leading-relaxed`}>
              {screens[currentScreen].text}
            </div>
          )}
        </div>

        {/* Navigation arrows */}
        <div className="absolute left-1 md:left-4 top-1/2 transform -translate-y-1/2">
          {currentScreen > 0 && (
            <button onClick={prevScreen} aria-label="Previous" className="text-white opacity-50 hover:opacity-100 transition-opacity">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z" fill="currentColor"/>
              </svg>
            </button>
          )}
        </div>
        <div className="absolute right-1 md:right-4 top-1/2 transform -translate-y-1/2">
          {currentScreen < screens.length - 1 && (
            <button onClick={nextScreen} aria-label="Next" className="text-white opacity-50 hover:opacity-100 transition-opacity">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.59 16.59L10 18L16 12L10 6L8.59 7.41L13.17 12L8.59 16.59Z" fill="currentColor"/>
              </svg>
            </button>
          )}
        </div>
      </main>
    </div>
  );
        }
