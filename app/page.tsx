"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden relative">
      
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/918421526195" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl shadow-[#25D366]/40 hover:scale-110 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group"
        aria-label="Chat with me on WhatsApp"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>

      {/* Proper Responsive Navigation Header */}
      <header className="w-full relative z-40 bg-slate-50">
        <nav className="flex items-center justify-between p-4 sm:p-6 max-w-7xl mx-auto">
          <Link href="/">
            <div className="font-extrabold text-xl sm:text-2xl tracking-tighter hover:opacity-80 transition cursor-pointer">
              Stack<span className="text-blue-600">&Scale</span>
            </div>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 font-medium text-slate-600">
            <Link href="services" className="hover:text-blue-600 transition">Services</Link>
            <Link href="portfolio" className="hover:text-blue-600 transition">Special Offer</Link>
            <Link href="/contact" className="hover:text-blue-600 transition">Contact</Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button 
            className="md:hidden p-2 text-slate-600 hover:text-blue-600 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            )}
          </button>
        </nav>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 py-4 px-6 flex flex-col gap-4 font-medium text-slate-600 animate-in slide-in-from-top-2 z-50">
            <Link href="#services" onClick={() => setIsMenuOpen(false)} className="block hover:text-blue-600 py-2">Services</Link>
            <Link href="#portfolio" onClick={() => setIsMenuOpen(false)} className="block hover:text-blue-600 py-2">Special Offer</Link>
            <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="block hover:text-blue-600 py-2">Contact</Link>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-32 flex flex-col items-center text-center relative z-10">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 font-semibold text-xs sm:text-sm tracking-wide uppercase">
          Ready to launch your business online?
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-6 sm:mb-8 leading-tight max-w-4xl">
          I Help Ambitious Brands <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            Dominate Online.
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-slate-600 mb-8 sm:mb-10 max-w-2xl leading-relaxed px-2">
          More than just a website. We design custom, blazing-fast web experiences and provide the marketing strategies you need to turn visitors into loyal customers.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4 sm:px-0">
          <Link href="/contact" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-slate-900 text-white px-8 py-3.5 sm:py-4 rounded-xl text-base sm:text-lg font-bold hover:bg-blue-600 transition duration-300 shadow-xl">
              Start Your Project
            </button>
          </Link>
          <Link href="#portfolio" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-white border-2 border-slate-200 text-slate-900 px-8 py-3.5 sm:py-4 rounded-xl text-base sm:text-lg font-bold hover:border-slate-300 hover:bg-slate-50 transition duration-300">
              View Special Offer
            </button>
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 tracking-tight">
              Everything you need to <span className="text-blue-600">launch and grow</span>.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 px-2">
              We don't just write code. We partner with brands to build complete digital ecosystems that drive traffic and generate revenue.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:-translate-y-1 hover:shadow-xl transition duration-300">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Custom Web Development</h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">Lightning-fast, responsive websites built with modern technologies like Next.js. Designed to look perfect on any device and scale as your business grows.</p>
            </div>
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:-translate-y-1 hover:shadow-xl transition duration-300">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">SEO & Digital Marketing</h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">Technical SEO optimization to ensure your customers can actually find you on Google, paired with marketing strategies that convert clicks into clients.</p>
            </div>
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:-translate-y-1 hover:shadow-xl transition duration-300">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Brand Identity</h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">Establishing a professional, cohesive look for your business online. From typography and color palettes to a user experience (UX) that builds trust.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Founding Client Offer Section */}
      <section id="portfolio" className="py-16 sm:py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-40 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-64 sm:w-96 h-64 sm:h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
          <div className="absolute top-48 -left-24 w-48 sm:w-72 h-48 sm:h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-amber-100 text-amber-800 font-bold text-xs sm:text-sm tracking-wide uppercase mb-6 shadow-sm border border-amber-200">
            <span className="relative flex h-2 sm:h-3 w-2 sm:w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 sm:h-3 w-2 sm:w-3 bg-amber-500"></span>
            </span>
            Limited Launch Offer
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 tracking-tight px-2">
            Become a <span className="text-blue-600">Founding Partner</span>.
          </h2>

          <p className="text-base sm:text-xl text-slate-600 mb-10 sm:mb-12 leading-relaxed max-w-2xl mx-auto px-2">
            We are officially launching our freelance web agency. To build a world-class portfolio, we are taking on our first three clients at a heavily discounted rate. You get premium, dedicated agency service for a fraction of the cost.
          </p>

          <div className="bg-white p-6 sm:p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100 text-left relative overflow-hidden transform hover:-translate-y-1 transition duration-300 mx-2 sm:mx-0">
            <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-blue-50 rounded-bl-full -z-10"></div>
            
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6">The "First Client" Advantage</h3>
            <ul className="space-y-4 sm:space-y-5 mb-8 sm:mb-10">
              <li className="flex items-start gap-3 sm:gap-4 text-slate-700 text-sm sm:text-base">
                <div className="bg-green-100 p-1 rounded-full text-green-600 shrink-0 mt-0.5">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <div>
                  <strong className="block text-slate-900 mb-1">VIP Attention</strong> 
                  Since you are our primary focus, your brand gets 100% of our time, energy, and code. No cutting corners.
                </div>
              </li>
              <li className="flex items-start gap-3 sm:gap-4 text-slate-700 text-sm sm:text-base">
                <div className="bg-green-100 p-1 rounded-full text-green-600 shrink-0 mt-0.5">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <div>
                  <strong className="block text-slate-900 mb-1">Premium Tech Stack</strong> 
                  A blazing-fast, custom-built website optimized for Google rankings and mobile performance.
                </div>
              </li>
              <li className="flex items-start gap-3 sm:gap-4 text-slate-700 text-sm sm:text-base">
                <div className="bg-green-100 p-1 rounded-full text-green-600 shrink-0 mt-0.5">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <div>
                  <strong className="block text-slate-900 mb-1">Portfolio Pricing</strong> 
                  we need an amazing case study to show future clients. You get a high-end digital presence at a fraction of standard agency rates.
                </div>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-slate-100 gap-4 sm:gap-6">
              <div className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wider">
                <span className="text-blue-600 font-bold text-base sm:text-lg">3</span> Spots Remaining
              </div>
              <Link href="/contact" className="w-full sm:w-auto">
                <button className="w-full bg-blue-600 text-white font-bold py-3.5 sm:py-4 px-6 sm:px-8 rounded-xl hover:bg-blue-700 transition duration-300 shadow-xl shadow-blue-200 inline-flex items-center justify-center gap-2 group text-sm sm:text-base">
                  Claim This Offer
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Connect & Follow Section (Replaces the Form) */}
      <section className="py-16 sm:py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl opacity-20 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-500 rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Side: Call to Action */}
            <div className="text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                Ready to transform your <span className="text-blue-400">digital presence?</span>
              </h2>
              <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Skip the generic templates. Let's build a blazing-fast, custom-coded asset that actually grows your business.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/contact">
                  <button className="w-full sm:w-auto bg-blue-600 text-white font-bold py-3.5 sm:py-4 px-8 rounded-xl hover:bg-blue-500 transition duration-300 shadow-xl shadow-blue-900 inline-flex items-center justify-center gap-2 group text-base">
                    Start a Project
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </button>
                </Link>
                <a href="mailto:pratikshinde909090@gmail.com">
                  <button className="w-full sm:w-auto bg-slate-800 border border-slate-700 text-white font-bold py-3.5 sm:py-4 px-8 rounded-xl hover:bg-slate-700 transition duration-300 text-base">
                    Email Us Directly
                  </button>
                </a>
              </div>
            </div>

            {/* Right Side: Instagram Card / Ad Space */}
            <div className="w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
              <a 
                href="https://www.instagram.com/stack__and__scale?igsh=MWZwbWExb3hkdDdpeQ==" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block group relative bg-gradient-to-tr from-purple-600 via-pink-500 to-orange-400 p-[2px] rounded-3xl shadow-2xl hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="bg-slate-900 rounded-[22px] p-8 h-full">
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-500 to-orange-400 flex items-center justify-center text-white">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                      </svg>
                    </div>
                    <span className="text-sm font-bold text-slate-400 group-hover:text-white transition-colors">Follow Me</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">@Stack&Scale</h3>
                  <p className="text-slate-400 mb-6">Connect with us on Instagram , for more updates and insights. </p>
                  <div className="flex items-center text-pink-400 font-semibold group-hover:translate-x-2 transition-transform">
                    Connect on Instagram 
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                  </div>
                </div>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4 sm:gap-6">
          <div className="font-bold text-lg sm:text-xl text-white">
            Stack<span className="text-blue-500">&Scale</span>
          </div>
          <div className="text-xs sm:text-sm">&copy; {new Date().getFullYear()} All rights reserved.</div>
        </div>
      </footer>
    </main>
  );
}
