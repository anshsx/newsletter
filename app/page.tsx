"use client";

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image'
import Link from 'next/link'
import era from '../era.png'
import company from '../company.png'

// Import CSS for fonts and global styles
import '../app/globals.css';

export default function Component() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const screens = [
    {
      text: (
        <>
          <span className="block">Could a browser keep us</span>
          <span className="block">focused, organized, and</span>
          <span className="block">in control?</span>
        </>
      ),
      bgColor: 'bg-[#131315]',
      textColor: 'text-[#C9CDD9]',
      fontSize: 'text-2xl md:text-xl lg:text-6xl',
      showFooter: true,
      centerText: true,
      fontWeight: 'font-semibold',
      buttonWidth: 'w-full max-w-md',
    },
    {
      text: (
        <>
          At <span className="bg-[#4C7DF6] text-white px-1 py-1 rounded hover:bg-blue-500 transition-colors cursor-pointer">the Era Inc,</span> we&apos;re building a better way to use the internet.
        </>
      ),
      bgColor: 'bg-[#0D50FF]',
      textColor: 'text-white',
      fontSize: 'text-2xl md:text-xl lg:text-2xl',
      showFooter: true,
      fontWeight: 'font-semibold',
    },
    {
      text: "When we think about browsing the internet, we often ignore the browser itself. Instead, we think about all the things we do online—the articles we read, the emails we send, the shows we watch. The software that enables it all, the browser, is so ubiquitous that it's ignored.",
      bgColor: 'bg-[#0D50FF]',
      textColor: 'text-[#e0ecff]',
      fontSize: 'text-lg md:text-xl lg:text-2xl',
      showFooter: true,
      fontWeight: 'font-normal',
    },
    {
      text: "Despite the ways our internet use has evolved, the browser has remained relatively unchanged. While all of our other software tools are changing for the better—with more collaborative features, flexible interfaces, and powerful functionality—the browser largely still does what it did twenty-five years ago.",
      bgColor: 'bg-[#0D50FF]',
      textColor: 'text-[#e0ecff]',
      fontSize: 'text-lg md:text-xl lg:text-2xl',
      showFooter: true,
      fontWeight: 'font-normal',
    },
    {
      text: "What's more, we blame ourselves for the browser's shortcomings. When our browser has an overwhelming number of tabs, we call ourselves inefficient; when we get distracted online, we tell ourselves we need more discipline; when we can't find a URL, we think we're disorganized. Why does the browser get a free pass?",
      bgColor: 'bg-[#0D50FF]',
      textColor: 'text-[#e0ecff]',
      fontSize: 'text-lg md:text-xl lg:text-2xl',
      showFooter: true,
      fontWeight: 'font-normal',
    },
    {
      text: (
        <>
          That&apos;s why we&apos;re building a new browser, <span className="bg-[#4C7DF6] text-white px-1 py-1 rounded hover:bg-blue-500 transition-colors cursor-pointer underline">which we call Arc</span>, because we believe browsers can do so much more to empower us. We&apos;re imagining a browser that can think as quickly as we do, take work off of our plates, and pull our creativity forward. A browser equipped for the way we use the internet in 2024, and foundational for how we hope to use it in the future.
        </>
      ),
      bgColor: 'bg-[#0D50FF]',
      textColor: 'text-[#e0ecff]',
      fontSize: 'text-lg md:text-xl lg:text-2xl',
      showFooter: true,
      fontWeight: 'font-normal',
    },
    {
      title: "Our Team",
      text: (
        <>
          We&apos;re a team of founders who sold their last company, ex-Instagram engineers, former Heads of Design at Tesla and Medium, multiple Google Chrome alums, alumni from Snap, Slack, and Pinterest, and so many other people who have done it before. <span className="bg-[#4C7DF6] text-white px-1 py-1 rounded hover:bg-blue-500 transition-colors cursor-pointer underline">Work with us →</span>
        </>
      ),
      bgColor: 'bg-[#0D50FF]',
      textColor: 'text-[#e0ecff]',
      fontSize: 'text-lg md:text-xl lg:text-2xl',
      showFooter: true,
      fontWeight: 'font-normal',
    },
    {
      title: "Support",
      text: (
        <>
          Beyond our team, we&apos;re lucky to be supported by our family and friends, as well as investors who played a role in some of our favorite software companies over the years. We&apos;ve raised over $17 million dollars from a diverse group that includes the founders of Instagram, Stripe, Twitter, Zoom, Figma, and LinkedIn. We&apos;re always grateful for new perspectives and shared learnings from experience. If you&apos;d like to lend a hand, <span className="bg-[#4C7DF6] text-white px-1 py-1 rounded hover:bg-blue-500 transition-colors cursor-pointer underline">please send us a note</span>.
        </>
      ),
      bgColor: 'bg-[#0D50FF]',
      textColor: 'text-[#e0ecff]',
      fontSize: 'text-lg md:text-xl lg:text-2xl',
      showFooter: true,
      fontWeight: 'font-normal',
    },
    {
      text: (
        <>
          Otherwise, feel free to <span className="bg-[#4C7DF6] text-white px-1 py-1 rounded hover:bg-blue-500 transition-colors cursor-pointer underline">join our friends and family newsletter</span>, and we promise you&apos;ll be among the first to play with our new browser.
        </>
      ),
      bgColor: 'bg-[#0D50FF]',
      textColor: 'text-[#C9CDD9]',
      fontSize: 'text-lg md:text-xl lg:text-2xl',
      showFooter: true,
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
      showFooter: false,
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

      <main className="flex-grow flex flex-col justify-center items-center px-4 md:px-8 lg:px-12 relative">
        <div className={`w-full ${screens[currentScreen].buttonWidth || ''} ${screens[currentScreen].centerText ? 'text-center' : 'text-left'}`}>
          {screens[currentScreen].title && (
            <h2 className={`text-3xl md:text-2xl lg:text-3xl font-bold mb-4 text-white pb-4`}>
              {screens[currentScreen].title}
            </h2>
          )}
          {screens[currentScreen].image ? (
            <div className="flex justify-center items-center h-full">
              <img
                src="/placeholder.svg?height=300&width=300"
                alt="Placeholder image"
                className="max-w-full max-h-full"
              />
            </div>
          ) : (
            <div className={`${screens[currentScreen].fontSize} ${screens[currentScreen].textColor} ${screens[currentScreen].fontWeight} leading-relaxed`}>
              {screens[currentScreen].text}
            </div>
          )}
        </div>

        {/* Navigation arrows */}
        <div className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2">
          {currentScreen > 0 && (
            <button onClick={prevScreen} aria-label="Previous" className="text-white opacity-50 hover:opacity-100 transition-opacity">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z" fill="currentColor"/>
              </svg>
            </button>
          )}
        </div>
        <div className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2">
          {currentScreen < screens.length - 1 && (
            <button onClick={nextScreen} aria-label="Next" className="text-white opacity-50 hover:opacity-100 transition-opacity">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.59 16.59L10 18L16 12L10 6L8.59 7.41L13.17 12L8.59 16.59Z" fill="currentColor"/>
              </svg>
            </button>
          )}
        </div>
      </main>

      {/* Footer */}
      {screens[currentScreen].showFooter && (
        <footer className="flex flex-col items-center pb-12">
          <button className="flex items-center justify-center space-x-2 px-4 py-2.5 bg-[#404450] text-[#C9CDD9] rounded-lg border border-gray-300">
            <img
              src="{era}?height=50&width=200"
              alt="Custom footer image"
              className="w-10 h-10"
            />
            <span>Get Era -&gt;</span>
          </button>
        </footer>
      )}
    </div>
  );
}
