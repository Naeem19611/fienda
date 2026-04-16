"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// Playfair Display ফন্টটি ইম্পোর্ট করা হলো
import { Playfair_Display } from 'next/font/google'; 
import { FiSearch, FiUser, FiHeart, FiShoppingCart, FiChevronDown, FiMenu, FiX } from 'react-icons/fi';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri';

// ফন্ট কনফিগারেশন
const playfair = Playfair_Display({ 
  subsets: ['latin'],
  display: 'swap',
});

const MyAccountPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState("");

  const toggleDropdown = (name: string) => {
  setOpenDropdown(openDropdown === name ? "" : name);
};

  return (
    // মেইন ডিভ-এ playfair.className অ্যাড করা হয়েছে যাতে সব টেক্সট এই ফন্ট পায়
    <div className={`${playfair.className} w-full bg-[#f3f0ea] min-h-screen relative overflow-x-hidden`}>
      
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

      {/* --- 1. TOP ANNOUNCEMENT BAR --- */}
      <div className="hidden md:flex bg-white border-b border-gray-100 py-2 px-12 justify-between items-center text-[10px] tracking-[0.15em] uppercase text-gray-500">
        <div className="flex-1"></div>
        <div className="flex-2 text-center">Livraison gratuite pour toute commande de plus de 250$</div>
        <div className="flex-1 flex justify-end gap-4">
          <FaFacebookF className="cursor-pointer hover:text-black" />
          <FaInstagram className="cursor-pointer hover:text-black" />
          <RiTwitterXFill className="cursor-pointer hover:text-black" />
          <FaYoutube className="cursor-pointer hover:text-black" />
        </div>
      </div>

      {/* --- 2. MAIN LOGO HEADER --- */}
      <div className="bg-white px-4 md:px-12 py-4 flex items-center justify-between border-b border-gray-100 sticky top-0 z-50">
        <div className="flex items-center w-1/4">
          <FiMenu size={24} className="md:hidden text-gray-600 cursor-pointer" onClick={() => setIsMenuOpen(true)} />
          <FiSearch size={22} className="hidden md:block text-gray-600 cursor-pointer" />
        </div>
        <div className="flex justify-center w-2/4">
          <Image src="/findea1.png" alt="Logo" width={120} height={35} className="object-contain md:w-[150px]" priority />
        </div>
        <div className="flex justify-end gap-3 md:gap-6 items-center w-1/4">
          <FiSearch size={24} className="md:hidden text-gray-600 cursor-pointer" />
          <FiUser size={22} className="hidden md:block text-gray-600 cursor-pointer hover:text-black" />
          <FiHeart size={22} className="hidden md:block text-gray-600 cursor-pointer hover:text-black" />
          <FiShoppingCart size={24} className="text-gray-600 cursor-pointer hover:text-black" />
        </div>
      </div>

      {/* --- 3. NAVIGATION (Web Only) --- */}
      <nav className="hidden md:block bg-white border-t border-b border-gray-200 py-3">
        <ul className="flex justify-center gap-8 text-[11px] font-semibold tracking-[0.18em] text-gray-700 uppercase">
          <li className="hover:text-black cursor-pointer">Accueil</li>
          <li className="hover:text-black cursor-pointer">À propos</li>
          <li className="hover:text-black cursor-pointer">Produits</li>
          <li className="hover:text-black cursor-pointer flex items-center gap-1">Registres <FiChevronDown size={14} /></li>
          <li className="hover:text-black cursor-pointer flex items-center gap-1">Services <FiChevronDown size={14} /></li>
          <li className="hover:text-black cursor-pointer">Boutiques</li>
        </ul>
      </nav>

      {/* --- 4. TRAPEZOID SECTION --- */}
      <section className="relative w-full flex justify-center mb-2">
        <div className="absolute inset-0 flex justify-center items-start pointer-events-none">
          <div 
            className="bg-[#e2ddd3] w-[85%] md:w-[45%] h-20 md:h-28"
            style={{ clipPath: 'polygon(10% 0%, 90% 0%, 82% 100%, 18% 100%)' }}
          ></div>
        </div>
        <div className="relative z-10 w-full max-w-7xl px-6 md:px-12 flex items-center justify-center h-20 md:h-28">
          <div className="absolute left-1/2 -translate-x-1/2 text-[#1a1a1a] flex flex-col items-center gap-1">
            <Link href="/fr" className="text-xs md:hidden text-neutral-500 hover:text-[#1a1a1a]">Accueil ❯</Link>
            <h1 className="text-md md:text-xl font-bold tracking-[0.1em] md:tracking-[0.15em] uppercase text-center leading-tight">Suivre la commande</h1>
          </div>
          <div className="ml-auto hidden md:block">
            <button onClick={() => window.history.back()} className="flex items-center gap-1.5 text-sm font-medium text-[#1a1a1a] hover:opacity-70">
              <span className="text-[10px]">❮</span> Retour à la page précédente
            </button>
          </div>
        </div>
      </section>

      {/* --- 5. AUTHENTICATION SECTION --- */}
      <main className="max-w-[480px] md:max-w-6xl mx-auto px-4 py-8 md:py-16 space-y-8 md:space-y-0 md:grid md:grid-cols-2 md:gap-12 text-black">
        <div className="bg-[#e1ddd4] border border-[#ccc7bc] p-8 md:p-14">
          <h2 className="text-xl md:text-3xl font-bold mb-8 tracking-widest uppercase">Se connecter</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-[14px] italic mb-2 text-gray-800">Nom d'utilisateur ou adresse e-mail *</label>
              <input type="text" className="w-full bg-[#ccc7bc] border border-[#b8b3a9] py-3 px-4 focus:outline-none" />
            </div>
            <div>
              <label className="block text-[14px] italic mb-2 text-gray-800">Mot de passe *</label>
              <input type="password" className="w-full bg-[#ccc7bc] border border-[#b8b3a9] py-3 px-4 focus:outline-none" />
            </div>
            <div className="flex items-center justify-between text-[12px] py-1">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="accent-black w-3 h-3" />
                <span>Se souvenir de moi</span>
              </label>
              <span className="italic cursor-pointer hover:underline text-gray-900">Mot de passe oublié ?</span>
            </div>
            <button className="w-full bg-[#f2e6cf] hover:bg-[#e9dab9] py-4 text-[13px] font-bold uppercase tracking-[0.2em] border border-[#d3c7ad]">Se connecter</button>
          </form>
          <div className="relative my-8 flex items-center">
            <div className="flex-grow border-t border-[#b8b3a9]"></div>
            <span className="flex-shrink mx-3 text-[10px] italic text-gray-500 uppercase tracking-tight">Ou connectez-vous with un réseau social</span>
            <div className="flex-grow border-t border-[#b8b3a9]"></div>
          </div>
          <button className="w-full bg-[#f2e6cf] hover:bg-[#e9dab9] py-4 text-[13px] font-bold uppercase tracking-[0.2em] border border-[#d3c7ad]">Facebook</button>
        </div>

        <div className="bg-[#e1ddd4] border border-[#ccc7bc] p-8 md:p-14">
          <h2 className="text-xl md:text-3xl font-bold mb-8 tracking-widest uppercase">S'inscrire</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-[14px] italic mb-2 text-gray-800">Nom d'utilisateur ou adresse e-mail *</label>
              <input type="text" className="w-full bg-[#ccc7bc] border border-[#b8b3a9] py-3 px-4 focus:outline-none" />
            </div>
            <div>
              <label className="block text-[14px] italic mb-2 text-gray-800">Mot de passe *</label>
              <input type="password" className="w-full bg-[#ccc7bc] border border-[#b8b3a9] py-3 px-4 focus:outline-none" />
            </div>
            <div className="md:h-7"></div>
            <button className="w-full bg-[#f2e6cf] hover:bg-[#e9dab9] py-4 text-[13px] font-bold uppercase tracking-[0.2em] border border-[#d3c7ad] mt-4">S'inscrire</button>
          </form>
        </div>
      </main>

      {/* --- 6. NEWSLETTER SECTION --- */}
      <section className="md:hidden relative w-full h-[450px] flex items-center justify-center mt-10">
        <Image src="/newsletter.png" alt="Newsletter" fill className="object-cover brightness-75" priority />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center px-6 w-full max-w-lg">
          <h2 className="text-white text-3xl tracking-[0.1em] uppercase mb-4 leading-tight">ENTREZ DANS NOTRE UNIVERS</h2>
          <p className="text-white text-[15px] italic mb-10 leading-relaxed tracking-wide">Découvrez En Avant-Première Nos Nouvelles Collections Et Nos Trésors Exclusifs.</p>
          <div className="flex items-stretch justify-center gap-3 w-full h-[56px]">
            <input type="email" placeholder="Your Email" className="flex-grow min-w-0 bg-transparent border border-white px-5 text-white placeholder:text-white/60 focus:outline-none text-base" />
            <button className="flex-shrink-0 px-6 h-full bg-[#f2e6cf] text-black font-bold uppercase tracking-widest text-[12px] transition-all hover:bg-[#e9dab9] whitespace-nowrap">Subscribe</button>
          </div>
        </div>
      </section>

      {/* --- 7. FOOTER SECTION --- */}
      <footer className="md:hidden bg-[#f3f0ea] pt-16 pb-10 px-6 border-t border-gray-200 text-black">
        <div className="flex flex-col gap-12 text-left">
          <div className="space-y-6">
            <Image src="/findea1.png" alt="Footer Logo" width={130} height={35} className="object-contain" />
            <p className="text-gray-800 text-[15px] leading-relaxed">Etiam nulla nunc, aliquet vel metus nec, scelerisque tempus enim. Sed eget blandit lectus.</p>
            <div className="flex gap-6 text-xl py-2">
              <FaFacebookF className="cursor-pointer" /> <FaInstagram className="cursor-pointer" /> <RiTwitterXFill className="cursor-pointer" /> <FaYoutube className="cursor-pointer" />
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold text-lg tracking-widest uppercase">Société</h3>
            <ul className="space-y-3 text-[14px] text-gray-700">
              <li>À propos</li><li>Politique de confidentialité</li><li>Politique de retour et de remboursement</li><li>Conditions Générales de Vente</li><li>Contactez-nous</li>
            </ul>
          </div>
        </div>
      </footer>

      {/* --- 8. COPYRIGHT BAR --- */}
      <div className="md:hidden bg-[#ccc7bc] py-5 flex justify-center items-center border-t border-gray-300 px-2">
        <p className="text-[2.8vw] min-[400px]:text-[10px] text-gray-700 tracking-widest uppercase whitespace-nowrap">
          Copyright © 2026 Findea. Tous droits réservés.
        </p>
      </div>
    </div>
  );
};

export default MyAccountPage;