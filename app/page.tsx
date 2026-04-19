"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { AiFillHeart } from "react-icons/ai";

export default function Home() {
  return (
    /* flex-col এবং min-h-screen নিশ্চিত করে যে ফুটার সবসময় নিচে থাকবে */
    <main className="min-h-screen flex flex-col bg-[#fdfaf5] overflow-x-hidden relative">
      
      {/* ব্যাকগ্রাউন্ড ব্লার ইফেক্ট */}
      <div className="absolute top-[-5%] left-[-5%] w-48 h-48 md:w-72 md:h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
      <div className="absolute bottom-[10%] right-[-5%] w-64 h-64 md:w-96 md:h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>

      {/* মেইন কন্টেন্ট সেকশন */}
      <div className="container mx-auto px-6 relative z-10 text-center flex-grow flex flex-col justify-center py-12 md:py-20">
        
        {/* মেইন ওয়েলকাম টেক্সট অ্যানিমেশন */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-7xl font-bold mb-6 tracking-tight text-black leading-tight">
            Welcome to <br className="md:hidden" /> 
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">Findea App</span>
          </h1>
        </motion.div>

        {/* ডেসক্রিপশন সেকশন */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="max-w-2xl mx-auto"
        >
          <p className="text-base md:text-xl text-gray-700 font-medium leading-relaxed mb-10 italic px-2">
            "The best products for your daily life, all under one roof. Welcome to our e-commerce platform, where elegance meets quality."
          </p>
        </motion.div>

        {/* কল টু অ্যাকশন বাটন */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-col md:flex-row gap-4 justify-center items-center"
        >
          {/* Shop Now বাটন যা /order পেজে নিয়ে যাবে */}
          <Link href="/order" className="w-full md:w-auto">
            <button className="w-full md:w-auto px-10 py-4 bg-black text-white rounded-full font-bold uppercase tracking-widest hover:bg-gray-800 transition-all shadow-lg active:scale-95">
              Shop Now
            </button>
          </Link>
          
          <Link href="/about" className="w-full md:w-auto">
            <button className="w-full md:w-auto px-10 py-4 border-2 border-black text-black rounded-full font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all active:scale-95">
              Learn More
            </button>
          </Link>
        </motion.div>

        {/* ফিচার সেকশন */}
        <motion.div 
          className="mt-16 md:mt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <div className="p-6 bg-white/60 backdrop-blur-md rounded-2xl border border-gray-200 shadow-sm">
            <h3 className="text-orange-600 font-bold mb-2 uppercase tracking-wide text-sm md:text-base">Premium Quality</h3>
            <p className="text-xs md:text-sm text-gray-600 font-sans italic">"We ensure the best quality products."</p>
          </div>
          <div className="p-6 bg-white/60 backdrop-blur-md rounded-2xl border border-gray-200 shadow-sm">
            <h3 className="text-pink-600 font-bold mb-2 uppercase tracking-wide text-sm md:text-base">Fast Delivery</h3>
            <p className="text-xs md:text-sm text-gray-600 font-sans italic">"Fastest home delivery across the country."</p>
          </div>
          <div className="p-6 bg-white/60 backdrop-blur-md rounded-2xl border border-gray-200 shadow-sm sm:col-span-2 md:col-span-1">
            <h3 className="text-purple-600 font-bold mb-2 uppercase tracking-wide text-sm md:text-base">Secure Payment</h3>
            <p className="text-xs md:text-sm text-gray-600 font-sans italic">"Secure and seamless payment solutions."</p>
          </div>
        </motion.div>
      </div>

      {/* --- RESPONSIVE FOOTER SECTION --- */}
      <footer className="w-full py-6 md:py-8 bg-white/30 backdrop-blur-sm border-t border-gray-100 relative z-10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-500 text-[10px] md:text-sm tracking-[0.1em] uppercase flex flex-wrap items-center justify-center gap-1 md:gap-2">
            <span>All rights reserved Findea</span>
            <span className="hidden md:inline">|</span>
            <span className="flex items-center gap-1">
              Developed by <span className="font-bold text-black">Naeem</span> 
              <AiFillHeart className="text-red-500 animate-pulse" />
            </span>
          </p>
        </div>
      </footer>
    </main>
  );
}