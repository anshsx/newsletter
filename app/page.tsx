"use client";

import { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import company from '../company.png';
import companyblu from '../companyblu.png';
// Import CSS for fonts and global styles
import '../app/globals.css'

export default function CustomGoogleForm() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const encodedEmail = encodeURIComponent(email)
    const baseURL = 'https://docs.google.com/forms/d/e/1FAIpQLScQy5p73shOqgbtfG_JGZNQ54Gfu_zED0aUk-_TNPmTYGzu-Q/formResponse?'
    const submitURL = `${baseURL}entry.126757335=${encodedEmail}&submit=Submit`

    fetch(submitURL, {
      method: 'POST',
      mode: 'no-cors',
    }).then(() => {
      setIsSubmitted(true)
    })
  }

  const handleGetEra = () => {
    window.location.href = 'https://play.google.com/store/apps/details?id=com.erainc.era'
  }

  if (isSubmitted) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="bg-white p-8 rounded-lg text-center max-w-md w-full">
          <div className="mb-6 relative inline-block">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image 
                src={company} 
                alt="Thank You" 
                width={96} 
                height={96} 
                className="object-cover"
              />
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-4">Thank you!</h2>
          <p className="text-gray-600 mb-6">We appreciate you and all that.</p>
          <Button 
            onClick={handleGetEra}
            className="bg-[#0D50FF] hover:bg-[#0D50FF] text-white font-bold py-2 px-6 rounded-full inline-flex items-center"
          >
            Get Era
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-whit">
      <div className="bg-white p-8 w-full max-w-md rounded-lg ">
        <div className="flex justify-center mb-6">
          <Image src={companyblu} alt="Era Inc Logo" width={150} height={50} />
        </div>
        <h2 className="text-2xl font-bold text-center mb-4">
          We&apos;re inventing a new way to surf the internet
        </h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          Subscribe to the Era Inc Newsletter
        </p>
        <form onSubmit={handleSubmit} className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="w-full px-4 py-2 pr-24 border border-[#0D50FF] rounded-md focus:outline-none focus:ring-2 focus:ring-[#0D50FF]"
            aria-label="Email address"
          />
          <Button
            type="submit"
            className="absolute right-1 top-1 bottom-1 px-4 bg-[#0D50FF] text-white rounded-md hover:bg-[#0D50FF] focus:outline-none focus:ring-2 focus:ring[#0D50FF] focus:ring-offset-2"
          >
            Subscribe
          </Button>
        </form>
      </div>
    </div>
  )
}
