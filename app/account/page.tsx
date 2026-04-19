"use client";
import React, { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { Playfair_Display } from 'next/font/google';

import {
  FiSearch, FiUser, FiHeart, FiShoppingCart,
  FiChevronDown, FiChevronLeft, FiCheckCircle, FiX, FiMenu
} from 'react-icons/fi';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri';

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  display: 'swap',
});


const DashboardPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState("");

  const toggleDropdown = (name: string) => {
  setOpenDropdown(openDropdown === name ? "" : name);
  };
  
  return (
  
    <div className={`w-full bg-[#fdfaf5] min-h-screen font-serif text-black pb-0 ${playfair.className}`}>
      
       {/* --- MOBILE HAMBURGER MENU --- */}
      <div 
        className={`fixed inset-0 z-[100] transition-all duration-300 md:hidden ${
          isMenuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-black/20" onClick={() => setIsMenuOpen(false)}></div>
        
        <div className={`relative w-[280px] h-full bg-[#d3cec4] shadow-xl transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } p-6 overflow-y-auto`}>
          
          <div className="flex justify-between items-center mb-6">
            <Image src="/findea1.png" alt="Logo" width={90} height={30} className="object-contain" />
            <FiX size={24} className="text-gray-700 cursor-pointer" onClick={() => setIsMenuOpen(false)} />
          </div>

          <div className="relative mb-8">
            <input 
              type="text" 
              placeholder="Type here..." 
              className="w-full bg-white py-2 px-4 pr-10 text-sm focus:outline-none rounded-none italic"
            />
            <FiSearch className="absolute right-3 top-2.5 text-gray-400" size={18} />
          </div>

          <nav className="flex flex-col gap-5 text-gray-800 tracking-widest text-[14px]">
            <Link href="/" className="uppercase">HOME</Link>
            <Link href="/about" className="uppercase">ABOUT</Link>
            
            <div>
              <button onClick={() => toggleDropdown('products')} className="w-full flex justify-between items-center uppercase">
                PRODUCTS <FiChevronDown className={openDropdown === 'products' ? 'rotate-180' : ''} />
              </button>
              {openDropdown === 'products' && (
                <ul className="pl-5 mt-3 space-y-3 text-[13px] italic text-gray-700">
                  <li><Link href="#">Featured</Link></li>
                  <li><Link href="#">New Arrivals</Link></li>
                  <li><Link href="#">Best Sellers</Link></li>
                  <li><Link href="#">Collection</Link></li>
                </ul>
              )}
            </div>
            
            <div>
              <button onClick={() => toggleDropdown('registries')} className="w-full flex justify-between items-center uppercase">
                REGISTRIES <FiChevronDown className={openDropdown === 'registries' ? 'rotate-180' : ''} />
              </button>
              {openDropdown === 'registries' && (
                <ul className="pl-5 mt-3 space-y-3 text-[13px] italic text-gray-700">
                  <li><Link href="#">Wedding Registry</Link></li>
                  <li><Link href="#">Baby Registry</Link></li>
                  <li><Link href="#">Find a Registry</Link></li>
                </ul>
              )}
            </div>

            <div>
              <button onClick={() => toggleDropdown('services')} className="w-full flex justify-between items-center uppercase">
                SERVICES <FiChevronDown className={openDropdown === 'services' ? 'rotate-180' : ''} />
              </button>
              {openDropdown === 'services' && (
                <ul className="pl-5 mt-3 space-y-3 text-[13px] italic text-gray-700">
                  <li><Link href="#">Wedding Services</Link></li>
                  <li><Link href="#">Baby & Family</Link></li>
                  <li><Link href="#">Home & Lifestyle</Link></li>
                  <li><Link href="#">Wellness & Beauty</Link></li>
                  <li><Link href="#">Photography</Link></li>
                </ul>
              )}
            </div>

            <Link href="/boutiques" className="uppercase">BOUTIQUES</Link>
            <Link href="/signup" className="uppercase mt-2">Sign Up</Link>
          </nav>
        </div>
      </div>


      {/* --- 1. TOP BAR --- */}
      <div className="hidden md:flex bg-white border-b border-gray-100 py-2 px-12 justify-between items-center text-[10px] tracking-[0.15em] uppercase text-gray-500">
        <div className="flex-1"></div>
        <div className="flex-2 text-center font-medium">Livraison gratuite pour toute commande de plus de 250 $</div>
        <div className="flex-1 flex justify-end gap-4">
          <FaFacebookF className="cursor-pointer hover:text-black transition-colors" />
          <FaInstagram className="cursor-pointer hover:text-black transition-colors" />
          <RiTwitterXFill className="cursor-pointer hover:text-black transition-colors" />
          <FaYoutube className="cursor-pointer hover:text-black transition-colors" />
        </div>
      </div>

      {/* --- 2. MAIN HEADER --- */}
      <div className="bg-white px-4 md:px-12 py-5 flex items-center justify-between border-b md:border-b-0 border-gray-100">
        <div className="md:hidden">
          <FiMenu size={24} className="text-black cursor-pointer" onClick={() => setIsMenuOpen(true)} />
        </div>
        <div className="hidden md:block w-1/4">
          <FiSearch size={20} className="text-gray-600 cursor-pointer hover:text-black" />
        </div>
        <div className="flex-1 md:w-2/4 flex justify-center">
          <div className="relative">
            <Image src="/findea1.png" alt="FINDEA Logo" width={120} height={40} className="object-contain" priority />
          </div>
        </div>
        <div className="flex md:w-1/4 justify-end gap-4 md:gap-5 items-center">
          <FiSearch size={22} className="md:hidden text-black cursor-pointer" />
          <FiUser size={20} className="hidden md:block text-gray-600 cursor-pointer hover:text-black" />
          <FiHeart size={20} className="hidden md:block text-gray-600 cursor-pointer hover:text-black" />
          <FiShoppingCart size={22} className="text-black md:text-gray-600 cursor-pointer hover:text-black" />
        </div>
      </div>

      {/* --- 3. DESKTOP NAVIGATION  --- */}
      <nav className="hidden md:block bg-white border-t border-b border-gray-200 py-3 font-serif">
        <ul className="flex justify-center gap-8 text-[11px] font-semibold tracking-[0.18em] text-gray-700 uppercase">
          <li className="hover:text-black cursor-pointer transition-all">Accueil</li>
          <li className="hover:text-black cursor-pointer transition-all">À propos</li>
          <li className="hover:text-black cursor-pointer transition-all">Produits</li>
          <li className="hover:text-black cursor-pointer flex items-center gap-1">Listes <FiChevronDown size={14} /></li>
          <li className="hover:text-black cursor-pointer flex items-center gap-1">Services <FiChevronDown size={14} /></li>
          <li className="hover:text-black cursor-pointer transition-all">Boutiques</li>
        </ul>
      </nav>

      {/* --- 3. TRAPEZOID SECTION (Hidden on Mobile, Visible on Desktop) --- */}
      <section className="hidden md:flex relative w-full justify-center mb-2">
        {/* Trapezoid Background Layer */}
        <div 
          className="absolute inset-0 flex justify-center items-start pointer-events-none"
        >
          <div 
            className="bg-[#e2ddd3] md:w-[45%] h-28"
            style={{ 
              clipPath: 'polygon(10% 0%, 90% 0%, 82% 100%, 18% 100%)' 
            }}
          ></div>
        </div>

        {/* Text Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-28 text-[#1a1a1a] px-4">
          <h1 className="text-2xl font-serif font-bold tracking-[0.15em] uppercase text-center leading-tight">
            Mon compte
          </h1>
        </div>
      </section>

      {/* --- 3. MOBILE ONLY TRAPEZOID SECTION (Hidden on Desktop) --- */}
      <section className="md:hidden relative w-full flex justify-center mb-2">
        {/* Trapezoid Background Layer */}
        <div 
          className="absolute inset-0 flex justify-center items-start pointer-events-none"
        >
          <div 
            className="bg-[#e2ddd3] w-[85%] h-20"
            style={{ 
              clipPath: 'polygon(10% 0%, 90% 0%, 82% 100%, 18% 100%)' 
            }}
          ></div>
        </div>

        {/* Text Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-20 text-[#1a1a1a] px-4">
          <h1 className="text-lg font-serif font-bold tracking-[0.1em] uppercase text-center leading-tight">
            Mon compte
          </h1>
        </div>
      </section>

      {/* --- 5. MOBILE HORIZONTAL MENU  --- */}
      <div className="md:hidden w-full overflow-x-auto flex gap-3 px-4 py-8 bg-transparent custom-scrollbar">
        {['Personal Info', 'My Orders', 'My Registries', 'Manage Address', 'Payment', 'Logout'].map((tab) => (
          <button key={tab} className={`flex-shrink-0 px-6 py-4 text-[13px] uppercase font-bold whitespace-nowrap ${tab === 'Personal Info' ? 'bg-[#f2e6cf] border border-[#d3c7ad]' : 'bg-[#d1cbc1]'}`}>
            {tab}
          </button>
        ))}
      </div>

      {/* --- 6. MAIN CONTENT --- */}
      <main className="max-w-6xl mx-auto px-4 md:px-12 py-10 md:py-20 flex flex-col md:flex-row gap-12">
        
        {/* SIDEBAR  */}
        <aside className="hidden md:block w-full md:w-1/4 space-y-3 font-serif">
          <button className="w-full bg-[#f2e6cf] text-black font-bold py-4 px-6 text-[13px] uppercase tracking-wider text-left border border-[#d3c7ad]">
            Personal Information
          </button>
          {["My Orders", "My Registries", "Manage Address", "Payment Method", "Logout"].map((item) => (
            <button key={item} className="w-full bg-[#e5e1da] text-black font-bold py-4 px-6 text-[13px] uppercase tracking-wider text-left border border-[#cfcbc4]">
              {item}
            </button>
          ))}
        </aside>

        {/* FORM SECTION  */}
        <section className="w-full md:w-3/4">
          <div className="mb-10 flex justify-center md:justify-start">
            <div className="relative w-24 h-24 rounded-full overflow-hidden border border-gray-200">
              <Image src="/naeem.jpeg" alt="User Profile" fill className="object-cover" />
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[14px] font-serif font-bold text-black tracking-tight">Prénom*</label>
                <input type="text" defaultValue="" className="w-full bg-[#e5e1da] border border-[#aba8a1] py-4 px-5 focus:outline-none text-[16px] font-serif font-bold text-black" />
              </div>
              <div className="space-y-2">
                <label className="text-[14px] font-serif font-bold text-black tracking-tight">Nom*</label>
                <input type="text" placeholder="" className="w-full bg-[#e5e1da] border border-[#aba8a1] py-4 px-5 focus:outline-none text-[16px] font-serif font-bold text-black" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[14px] font-serif font-bold text-black tracking-tight">E-mail*</label>
              <input type="email" defaultValue="" className="w-full bg-[#e5e1da] border border-[#aba8a1] py-4 px-5 focus:outline-none text-[16px] font-serif font-bold text-black" />
            </div>

            <div className="space-y-2">
              <label className="text-[14px] font-serif font-bold text-black tracking-tight">Téléphone*</label>
              <div className="relative">
                <input type="text" defaultValue="" className="w-full bg-[#e5e1da] border border-[#aba8a1] py-4 px-5 focus:outline-none text-[16px] font-serif font-bold text-black" />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-1 text-[#2d8a39] text-[11px] font-bold uppercase font-serif">
                  
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[14px] font-serif font-bold text-black tracking-tight">Genre</label>
              <input type="text" placeholder="" className="w-full bg-[#e5e1da] border border-[#aba8a1] py-4 px-5 focus:outline-none text-[16px] font-serif font-bold text-black" />
            </div>
          </div>

          <button className="w-full md:w-auto bg-[#f2e6cf] text-black font-serif font-bold py-5 px-16 text-[15px] border border-[#d3c7ad] mt-10 shadow-sm transition-all hover:bg-[#e9dab9]">
            Mettre à jour
          </button>

          {/* Change Password */}
          <h2 className="text-[24px] font-serif font-bold mb-8 mt-16 tracking-wider text-black">Changer le mot de passe</h2>
          
          <div className="space-y-6">
            {['Recent Password', 'New Password', 'Confirm Password'].map((label) => (
              <div key={label} className="space-y-2">
                <label className="text-[14px] font-serif font-bold text-black tracking-tight">{label}*</label>
                <input type="password" placeholder="••••••••" className="w-full bg-[#e5e1da] border border-[#aba8a1] py-4 px-5 focus:outline-none text-[16px] font-serif font-bold text-black" />
              </div>
            ))}
          </div>

          <button className="w-full md:w-auto bg-[#f2e6cf] text-black font-serif font-bold py-5 px-16 text-[15px] border border-[#d3c7ad] mt-10 shadow-sm transition-all hover:bg-[#e9dab9]">
            Mettre à jour
          </button>
        </section>
      </main>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar { height: 4px; display: block; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #f1f1f1; margin: 0 16px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #cfc7b9; border-radius: 10px; }
        .custom-scrollbar { scrollbar-width: thin; scrollbar-color: #cfc7b9 #f1f1f1; }
      `}</style>

      {/* --- 5. FIXED RESPONSIVE NEWSLETTER SECTION --- */}
      <section className="md:hidden relative w-full h-[450px] flex items-center justify-center mt-10">
        <Image src="/newsletter.png" alt="Newsletter" fill className="object-cover brightness-75" priority />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center px-6 w-full max-w-lg">
          <h2 className="text-white text-3xl font-serif tracking-[0.1em] uppercase mb-4 leading-tight">ENTREZ DANS NOTRE UNIVERS</h2>
          <p className="text-white text-[15px] font-serif italic mb-10 leading-relaxed tracking-wide">Découvrez En Avant-Première Nos Nouvelles Collections Et Nos Trésors Exclusifs.</p>
          
          <div className="flex items-stretch justify-center gap-3 w-full h-[56px]">
            <input 
              type="email" 
              placeholder="Your Email" 
              className="flex-grow min-w-0 bg-transparent border border-white px-5 text-white placeholder:text-white/60 focus:outline-none text-base" 
            />
            <button className="flex-shrink-0 px-6 h-full bg-[#f2e6cf] text-black font-bold uppercase tracking-widest text-[12px] transition-all hover:bg-[#e9dab9] whitespace-nowrap font-serif">
              S'abonner
            </button>
          </div>
        </div>
      </section>

      {/* --- 7. MOBILE FOOTER SECTION --- */}
      <footer className="md:hidden bg-[#f3f0ea] px-6 py-12 text-black">
        <div className="flex flex-col gap-10">
          <div className="space-y-6">
            <Image src="/findea1.png" alt="Footer Logo" width={110} height={30} className="object-contain" />
            <p className="text-[15px] leading-relaxed font-serif text-gray-800">
              Etiam nulla nunc, aliquet vel metus nec, scelerisque tempus enim. Sed eget blandit lectus. Donec facilisis ornare turpis id pretium.
            </p>
            <div className="flex gap-6 text-xl text-gray-900">
              <FaFacebookF className="cursor-pointer" />
              <FaInstagram className="cursor-pointer" />
              <RiTwitterXFill className="cursor-pointer" />
              <FaYoutube className="cursor-pointer" />
            </div>
          </div>

          <div className="space-y-5">
            <h3 className="font-serif font-bold text-[17px] uppercase tracking-widest">Entreprise</h3>
            <ul className="space-y-4 text-[15px] font-serif text-gray-700">
              <li className="cursor-pointer">À propos</li>
              <li className="cursor-pointer">Politique de confidentialité</li>
              <li className="cursor-pointer">Politique de retour et de remboursement</li>
              <li className="cursor-pointer">Conditions générales</li>
              <li className="cursor-pointer">Contactez-nous</li>
            </ul>
          </div>

          <div className="space-y-5">
            <h3 className="font-serif font-bold text-[17px] uppercase tracking-widest">Services</h3>
            <ul className="space-y-4 text-[15px] font-serif text-gray-700">
              <li className="cursor-pointer">Liste de naissance</li>
              <li className="cursor-pointer">Liste de mariage</li>
              <li className="cursor-pointer">Proposer un service</li>
            </ul>
          </div>

          <div className="space-y-5">
            <h3 className="font-serif font-bold text-[17px] uppercase tracking-widest">Contacts</h3>
            <div className="space-y-4 font-serif">
              <div>
                <p className="font-bold text-[15px]">E-mail :</p>
                <p className="text-gray-700">test@test.com</p>
              </div>
              <div>
                <p className="font-bold text-[15px]">Téléphone :</p>
                <p className="text-gray-700">0 000 000 000</p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* --- 7. COPYRIGHT BAR --- */}
      <div className="md:hidden bg-[#ccc7bc] py-5 flex justify-center items-center border-t border-gray-300 px-2">
        <p className="text-[2.8vw] min-[400px]:text-[10px] text-gray-700 font-serif tracking-widest uppercase whitespace-nowrap">
          Copyright © 2026 Findea. Tous droits réservés.
        </p>
      </div>
    </div>
  );
};

export default DashboardPage;