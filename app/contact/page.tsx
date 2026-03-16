"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "c6e93123-fd49-4c99-bb4e-0e899425a7fc", 
          subject: `New Freelance Lead from ${formData.name}`,
          name: formData.name,
          phone: formData.phone,
          email: formData.email || "Not provided",
          message: formData.message || "Not provided",
        }),
      });

      const textData = await response.text();

      try {
        const result = JSON.parse(textData);
        
        if (result.success) {
          setStatus('success');
          setFormData({ name: '', email: '', phone: '', message: '' }); 
          setTimeout(() => setStatus('idle'), 5000); 
        } else {
          console.error("Submission failed", result);
          setStatus('idle');
          alert("Something went wrong. Please try again.");
        }
      } catch (parseError) {
        console.error("Blocked by Network/ISP. Received HTML instead of JSON:", textData.substring(0, 100));
        setStatus('idle');
        alert("Your local network blocked the request. Try a mobile hotspot.");
      }

    } catch (error) {
      console.error("Network Error:", error);
      setStatus('idle');
      alert("Network connection error. Please try again.");
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden">
      
      {/* Navigation (Fixed for Mobile Visibility) */}
      <nav className="flex flex-col md:flex-row items-center justify-between p-4 sm:p-6 max-w-7xl mx-auto gap-4 md:gap-0">
        <Link href="/">
          <div className="font-extrabold text-xl sm:text-2xl tracking-tighter hover:opacity-80 transition cursor-pointer text-center md:text-left">
             Stack<span className="text-blue-600">&Scale</span>
          </div>
        </Link>
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 font-medium text-slate-600 text-sm sm:text-base">
          <Link href="/#services" className="hover:text-blue-600 transition">Services</Link>
          <Link href="/#portfolio" className="hover:text-blue-600 transition">Special Offer</Link>
          <Link href="/contact" className="text-blue-600 transition">Contact</Link>
        </div>
      </nav>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-24">
        <div className="text-center md:text-left mb-10 md:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4 sm:mb-6">
            Let's build something <span className="text-blue-600">great.</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl leading-relaxed mx-auto md:mx-0">
            Whether you are looking to launch a new brand, completely revamp an existing website, or just need some advice on your digital strategy, We are here to help.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 lg:gap-24">
          
          {/* Direct Contact Info Side */}
          <div className="flex flex-col justify-center space-y-8 md:space-y-10">
            <div>
              <h3 className="text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-widest mb-2 sm:mb-3">Direct Email</h3>
              <a href="mailto:pratikshinde909090@gmail.com" className="text-base sm:text-lg lg:text-2xl font-semibold text-slate-900 hover:text-blue-600 transition flex items-center gap-3 group">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 text-blue-600 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                <span className="break-all sm:break-normal">pratikshinde909090@gmail.com</span>
              </a>
            </div>

            <div>
              <h3 className="text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-widest mb-2 sm:mb-3">Phone & WhatsApp</h3>
              <a href="https://wa.me/918421526195" target="_blank" rel="noopener noreferrer" className="text-lg sm:text-xl lg:text-2xl font-semibold text-slate-900 hover:text-green-500 transition flex items-center gap-3 group">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 text-green-500 group-hover:-translate-y-1 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                +91 84215 26195
              </a>
            </div>
            
            
          </div>

          {/* Contact Form Side */}
          <div className="bg-white p-6 sm:p-8 md:p-10 rounded-3xl shadow-2xl border border-slate-100 relative">
            {/* Success Overlay */}
            {status === 'success' && (
              <div className="absolute inset-0 bg-white/95 rounded-3xl flex flex-col items-center justify-center z-10 px-6 text-center">
                <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Message Sent!</h3>
                <p className="text-slate-600 mt-2">I'll get back to you shortly.</p>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-4 sm:mb-5">
                <label className="block text-slate-700 text-sm font-bold mb-2" htmlFor="name">Name <span className="text-red-500">*</span></label>
                <input required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition text-base text-slate-900" id="name" type="text" placeholder="Your Name/ Company Name" />
              </div>
              
              <div className="mb-4 sm:mb-5">
                <label className="block text-slate-700 text-sm font-bold mb-2" htmlFor="phone">Contact Number <span className="text-red-500">*</span></label>
                <input required value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition text-base text-slate-900" id="phone" type="tel" placeholder="+91 00000 00000" />
              </div>

              <div className="mb-4 sm:mb-5">
                <label className="block text-slate-700 text-sm font-bold mb-2" htmlFor="email">Email <span className="text-slate-400 font-normal">(Optional)</span></label>
                <input value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition text-base text-slate-900" id="email" type="email" placeholder="Your Email" />
              </div>

              <div className="mb-6 sm:mb-8">
                <label className="block text-slate-700 text-sm font-bold mb-2" htmlFor="message">Tell us about your brand or business <span className="text-slate-400 font-normal">(Optional)</span></label>
                <textarea value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition h-28 sm:h-32 resize-none text-base text-slate-900" id="message" placeholder="What are your goals or ideas?..."></textarea>
              </div>
              
              <button type="submit" disabled={status === 'submitting'} className="w-full bg-slate-900 text-white font-bold py-3.5 sm:py-4 px-4 rounded-xl hover:bg-blue-600 transition duration-300 shadow-xl disabled:opacity-70 text-base">
                {status === 'submitting' ? 'Sending Message...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 sm:py-12 mt-8 sm:mt-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4 sm:gap-6">
          <div className="font-bold text-xl text-white">
            Stack<span className="text-blue-500">&Scale</span>
          </div>
          <div className="text-sm">&copy; {new Date().getFullYear()} All rights reserved.</div>
        </div>
      </footer>
    </main>
  );
}
